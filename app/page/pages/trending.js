define(['durandal/app', "jquery", "q", "knockout", "knockback", "../../helper/screen_helper", "../../models/trending", "moment", "Canvas2Image", "../../helper/datetime.util", "flot", "flottime", "flotcrosshair", "flotnavigate", "TrendingControl", "../../bindings/datetime.picker", "bootstrap-datepicker", "css!../../../css/trending.css", "css!../../../lib/nqhlib/css/Control.Trending.css"], function (app, $, Q, ko, kb, ScreenHelper, Trending, Moment, Canvas2Image, DateTimeUtil) {
    return function () {
        var dateTimeUtil = new DateTimeUtil();
        var me = this, chartWrapperID = "#chart-wrapper", chartWrapperElement, selectedChannels = [], buff = app.buff, apis = app.services.getService("apis"), graph = null, updateLegendTimeout, latestPosition = null, legends = null, selectedGroupChannels = [],
            chartOptions = {
                series: {lines: {show: true}},
                /*series: {
                    points: {
                        show: true,
                        radius:1
                    }
                },
                grid: {
                    hoverable: true
                },*/
                xaxes: [{
                    mode: "time",
                    minTickSize: [1, "minute"],
                    timeformat: "%d/%m/%y %H:%M:%S",
                    show: true
                }],
                yaxes: [
                    {position: 'left'}
                ],
                crosshair: {mode: "x"},
                grid: {
                    show: true,
                    backgroundColor: "white",
                    hoverable: true,
                    autoHighlight: true,
                    clickable: true
                },
                zoom: {
                    interactive: false
                },
                pan: {
                    interactive: false
                },
                legend: {position: "sw"},
                ControlTrending: {
                    position: {right: "100px", top: "38px"},
                    display: "none",
                    homeRange: {
                        xmin: -10,
                        xmax: 10,
                        ymin: -10,
                        ymax: 10
                    },
                    panAmount: 10,
                    zoomAmount: 1.5
                }
            },
            commentOptions = {
                "class": "jquery-flot-comment",
                wrapperCss: {
                    "position": "absolute",
                    "display": "block",
                    "margin": "0",
                    "line-height": "1em",
                    "background-color": "#000",
                    "color": "white",
                    "padding": "0",
                    "font-size": "xx-small",
                    "box-sizing": "border-box",
                    "text-align": "center"
                },
                notch: {
                    size: "5px",
                    color: "#000",
                    position: 'bottom'
                },
                htmlTemplate: function (commentContent, notchPosition) {
                    var inverse = {
                        'bottom': 'top',
                        'top': 'bottom'
                    };
                    var template = "<div class='{1}'><div class='callout' style='position: relative; margin: 0; box-sizing: border-box; padding: 5px; width: auto; _width: 1%\0 /* IE 8 width hack */;'><div style='line-height: 1em; position: relative;'>{{0}}</div><b class='notch' style='position: absolute; {{1}}: -{0}; left: 50%; margin: 0 0 0 -{0}; border-{{2}}: {0} solid {2}; border-left: {0} solid transparent; border-right: {0} solid transparent; border-{{1}}: 0; padding: 0; width: 0; height: 0; font-size: 0; line-height: 0; _border-right-color: pink; _border-left-color: pink; _filter: chroma(color=pink);'></b></div></div>".format(this.notch.size, this["class"], this.notch.color);

                    notchPosition = notchPosition || this.notch.position;

                    return template.format(commentContent, notchPosition, inverse[notchPosition]);
                },
                show: true,
                position: {
                    offsetX: 0,
                    offsetY: 0,
                    x: function (x) {
                        return {
                            "left": x + parseFloat(this.offsetX || 0)
                        };
                    },
                    y: function (y) {
                        return {
                            "top": y + parseFloat(this.offsetY || 0)
                        };
                    }
                }
            },
            trending = new Trending({
                fromTime: moment().subtract(3, "hours").format(app.CMASConfig.DateTimeFormat.GLOBAL),
                toTime: moment().format(app.CMASConfig.DateTimeFormat.GLOBAL),
                channels: {}
            });
        var config1 = [];
        if (!getBuffer('Location')) {
            config1 = apis.getsub1(0);
            buff.setByKey('Location', config1);
        }
        else {
            config1 = getBuffer('Location');
        }
        var itemSub = [];
        me.treeSelect = config1[0].children[0];
        me.UnitSelect = config1[0].children[0].children[0];
        for (var i = 0; i < me.treeSelect.children.length; ++i) {
            itemSub.push(me.treeSelect.children[i]);
        }
        me.systemTree = ko.observableArray(config1[0].children);
        me.itemSub = ko.observableArray(itemSub);
        me.fromTime = kb.observable(trending, "fromTime");
        me.fromTime.subscribe(dateRangeUpdated);
        me.toTime = kb.observable(trending, "toTime");
        me.toTime.subscribe(dateRangeUpdated);
        me.notes = ko.observableArray([]);
        me.channelsList = ko.observableArray();
        me.selectedChannels = ko.observableArray(selectedChannels);
        me.selectedChannel = ko.observable();
        me.channelsGroupList = ko.observableArray();
        me.selectedGroupChannels = ko.observableArray([]);
        me.selectedGroupChannel = ko.observable();
        me.attached = function () {
            chartWrapperElement = $(chartWrapperID);
            chartWrapperElement.height(300);

            chartWrapperElement.bind("plothover", function (event, pos, item) {
                latestPosition = pos;
                //if (item) {

                    if (!updateLegendTimeout) {
                        updateLegendTimeout = setTimeout(myUpdateLegend.bind(pos, item), 50);
                    }
                //}
            });

            var panning = false;

            $(chartWrapperID + " canvas").bind('drag', function () {
                panning = true;
            });
            $(chartWrapperID + " canvas").bind('dragend', function () {
                setTimeout(function () {
                    panning = false;
                }, 100);
            });

            chartWrapperElement.bind('plotclick', function (event, pos, item) {
                if (!panning) {
                    if (item) {
                        addNote(item);
                    }
                    ;
                }
            });

            chartWrapperElement.bind("plotpan", function (event, plot) {
                legends = $(chartWrapperID + " .legendLabel");
            });

            chartWrapperElement.bind("plotzoom", function (event, plot) {
                legends = $(chartWrapperID + " .legendLabel");
            });

        }
        me.activate = function () {
            showChannel();
        }
        me.showChannel = showChannel;
        me.showSub = showSub1;
        me.removeselectOy = removeselectedOy;
        me.saveGroupChannelFromTrending = saveGroupChannelFromTrending;
        me.addGroupChannelIntoTrending = addGroupChannelIntoTrending;
        me.saveasGroupChannelFromTrending = saveasGroupChannelFromTrending;
        me.addChannelIntoTrending = addChannelIntoTrending;
        me.removeChannelFromTrending = removeChannelFormTrending;
        me.markAsIssue = markAsIssue;
        me.markAsOK = markAsOK;
        me.deleteNode = deleteNode;
        function addChannelIntoTrending() {
            if (me.selectedChannel()) {
                var channelName = me.selectedChannel().id;
                if (trending.get("channels")[channelName] == undefined) {
                    addChannelTrending(me.selectedChannel(), null);
                }
                else {
                    alert('Channel already exists');
                }
            }
        }

        function removeChannelFormTrending(channelInfo, event) {
            if (channelInfo) {
                var channelName = channelInfo.id;
                delete trending.get("channels")[channelName];
                selectedChannels.splice(selectedChannels.indexOf(channelInfo), 1);
                me.selectedChannels(selectedChannels);
                renderData();
            }
        }

        function getBuffer(key) {
            return buff ? buff.getByKey(key) : false;
        }

        function dateRangeUpdated() {
        }

        function myUpdateLegend(item) {
            //console.log(item);
            updateLegendTimeout = null;
            var dataIndex = item?item.dataIndex:null;
            var dataset = graph.getData();
            var snapShotDatas = [];
            for (var i = 0; i < dataset.length; ++i) {
                var series = dataset[i];
                var value = series.data[dataIndex] == undefined ? null:series.data[dataIndex][1];
                legends.eq(i).text(series.label.replace(/=.*[(]/, "= " + (value !== null ? value.toFixed(2) : "null") + "("));
            }
            legends.each(function () {
                // fix the widths so they don't jump around
                $(this).css('width', $(this).width() + 50);
            });
        }

        function dateRangeUpdated() {
            /*
            function updateData(channelName, fromTimeInUnix, toTimeInUnix) {


                return apis.getDataByTimeRange(channelName, fromTimeInUnix, toTimeInUnix).then(
                    function (response) {
                        if (response) {
                            var data = []
                            for (var index in response) {
                                data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[index]["TheTime"]) * 1000, response[index]["data"]]);
                            }
                            trending.get("channels")[channelName].data = data;
                        }
                    }
                );
            };

            if (trending.get("channels") && selectedChannels.length) {
                var fromTimeInUnix = moment(trending.get("fromTime")).unix();
                var toTimeInUnix = moment(trending.get("toTime")).unix();
                var callBack = []

                for (var channelID in trending.get("channels")) {
                    callBack.push(updateData(channelID, fromTimeInUnix, toTimeInUnix));
                }

                Q.all(callBack).done(renderData);
            }*/
        }

        function markAsIssue(viewModel) {
            viewModel.status("Issue");
        }

        function markAsOK(viewModel) {
            viewModel.status('Ok');
        }

        function deleteNode(viewModel) {
            if (viewModel) {
                me.notes.splice(me.notes.indexOf(viewModel), 1);
            }
        }

        function addNote(dataItem) {
            if (me.notes().length) {
                var i = me.notes().length - 1;
                var n = me.notes()[i];
                if (n.status() == "-----" && n.comment == "") {
                    me.notes.splice(i, 1);
                }
            }
            var dataIndex = dataItem.dataIndex;
            console.log(dataItem);
            var dataset = graph.getData();
            var snapShotDatas = [];
            for (var i = 0; i < dataset.length; ++i) {
                var series = dataset[i];
                var value = series.data[dataIndex] == undefined ? null : series.data[dataIndex][1];
                snapShotDatas.push(series.label.replace(/=.*[(]/, "= " + (value !== null ? value.toFixed(2) : "null") + "("));
            }
            var date = moment(dataItem.datapoint[0]).format(app.CMASConfig.DateTimeFormat.GLOBAL);
            var note = {date: date, comment: "", data: snapShotDatas, status: ko.observable("-----")};
            me.notes.push(note);

        }

        function addcomment(dataItem) {
            var oyaxis = null;
            var xaxis = null;
            var yaxis = null;
            var axes = graph.getAxes();

            $.each(graph.getAxes(), function (i, axis) {
                if (!axis.show)
                    return;
                //alert(print_r(axis));
                if (axis.direction == "x")
                    xaxis = axis;
                else if (axis.n == dataItem.seriesIndex) {
                    yaxis = axis;
                }
            });
            //alert(print_r(yaxis[]));
            if (!yaxis) {
                var axes = graph.getAxes();
                xaxis = axes.xaxis;
                yaxis = axes.yaxis;
            }
            //alert(print_r(graph.getAxes();));
            //alert(print_r(yaxis));
            var xmin = xaxis.min;
            var xmax = xaxis.max;
            var ymin = yaxis.min;
            var ymax = yaxis.max;
            var comment = {
                contents: 'huy',
                x: dataItem.datapoint[0],
                y: dataItem.datapoint[1],
                offsetX: 15,
                offsetY: 25
            };
            var notchPosition = comment.notch && comment.notch.position
                || commentOptions.notch && commentOptions.notch.position
                || 'bottom';

            var html = commentOptions.htmlTemplate(comment.contents, notchPosition);
            //alert(print_r(dataItem));
            //var size = measureHtmlSize($(html)[0].innerHTML, graph.getPlaceholder()[0], commentOptions.wrapperCss || null);
            if (comment.x >= xmin && comment.x <= xmax) {
                if (comment.y >= ymin && comment.y <= ymax) {
                    var canvasX = xaxis.p2c(comment.x) + graph.getPlotOffset().left - (comment.offsetX || 0);
                    var canvasY = yaxis.p2c(comment.y) + graph.getPlotOffset().top - (comment.offsetY || 0);

                    $(html).css(commentOptions.wrapperCss)
                        .css(commentOptions.position.x(canvasX))
                        .css(commentOptions.position.y(canvasY))
                        .appendTo(graph.getPlaceholder());
                }
            }
        }

        function getDataChartFormTrending(trendingModel) {
            var data = []
            $.each(trendingModel.get("channels"), function (channelName, dataObject) {
                data.push(dataObject);
            })
            return data;
        }

        function ControlTrending(graph) {

            var $placeholder = graph.getPlaceholder();
            $placeholder.find(".pan-up").click(function (e) {
                e.preventDefault();
                graph.pan({top: chartOptions.ControlTrending.panAmount}, click1);
            });
            /*
             addArrow("up", 40, 45, { top: 100 });
             addArrow("down", 40, 75, { top: -100 });
             $("<div class='button' style='right:20px;top:20px'>zoom out</div>")
             .appendTo(graph.getPlaceholder())
             .click(function (event) {
             event.preventDefault();
             graph.zoomOut();
             });*/
        }

        function panUp(graph) {
        }

        function axisTarget(graph) {
            $.each(graph.getAxes(), function (i, axis) {
                if (!axis.show)
                    return;

                var box = axis.box;

                $("<div class='axisTarget' style='position:absolute; left:" + box.left + "px; top:" + box.top + "px; width:" + box.width + "px; height:" + box.height + "px'></div>")
                    .data("axis.direction", axis.direction)
                    .data("axis.n", axis.n)
                    .css({backgroundColor: "#f00", opacity: 0, cursor: "pointer"})
                    .appendTo(graph.getPlaceholder())
                    .hover(
                    function () {
                        $(this).css({opacity: 0.10})
                    },
                    function () {
                        $(this).css({opacity: 0})
                    }
                )
                    .click(function () {
                        if (axis.direction === "y") {
                            graph.setchannelsl(axis);
                            var dataset = graph.getData();
                            $("#selectoy").text(dataset[axis.n - 1].channelName)
                        }

                        //
                        //alert(print_r(axis.direction));
                        //
                    });
            });
        }

        function removeselectedOy() {
            graph.setchannelsl(null);
            $("#selectoy").text("-----")

        }

        function renderData() {
            if (graph)
                chartOptions = graph.getOptions();
            var fromTime = (new Date(trending.get("fromTime"))).getTime();
            console.log(fromTime);
            var toTime =(new Date(trending.get("toTime"))).getTime();
            console.log(toTime);
            chartOptions.xaxes[0].min = fromTime;
            chartOptions.xaxes[0].max = toTime;
            graph = $.plot(chartWrapperID, getDataChartFormTrending(trending), chartOptions);
            $("#selectoy").text('---');
            legends = $(chartWrapperID + " .legendLabel");
            axisTarget(graph);
            ControlTrending(graph);
        }

        function addGroupChannelIntoTrending() {
            if (selectedGroupChannels != "") {
                selectedGroupChannels.splice(selectedGroupChannels[0], 1);
                me.selectedGroupChannels(selectedGroupChannels);
            }
            var GroupchannelId = me.selectedGroupChannel()._id;
            var GroupchannelDisplayName = me.selectedGroupChannel().name;
            selectedGroupChannels.push({id: GroupchannelId, name: GroupchannelDisplayName});
            me.selectedGroupChannels(selectedGroupChannels);
            $.each(trending.get("channels"), function (channelName, dataObject) {
                delete trending.get("channels")[channelName];
                selectedChannels.splice(selectedChannels.indexOf(dataObject), 1);
                me.selectedChannels(selectedChannels);
            });
            if (me.selectedGroupChannel()) {
                var channels = me.selectedGroupChannel().channels;
                var stt = 1;
                for (var i = channels.length - 1; i >= 0; i--) {
                    if (channels[i]) {

                        if (trending.get("channels")[channels[i].id] == undefined) {

                            addChannelTrending(channels[i], stt);
                            stt++;
                        }
                    }
                }
                ;
            }

        }

        function saveGroupChannelFromTrending(GroupchannelInfo, event) {
            var data = {name: GroupchannelInfo.name, channels: selectedChannels}
            apis.updateGroupChannel(GroupchannelInfo.id, data);
            apis.getChannelsGroupDefinition().then(function (definitions) { //
                me.channelsGroupList(definitions);
            })
            alert('saved successfully');
        }

        function saveasGroupChannelFromTrending(GroupchannelInfo, event) {
            var data = {name: GroupchannelInfo.name, channels: selectedChannels}
            apis.addGroupChannel(data);
            apis.getChannelsGroupDefinition().then(function (definitions) { //
                me.channelsGroupList(definitions);
            })
            alert('saved successfully');
        }

        function ObjToSource(o) {
            if (!o) return 'null';
            if (typeof(o) == "object") {
                if (!ObjToSource.check) ObjToSource.check = new Array();
                for (var i = 0, k = ObjToSource.check.length; i < k; ++i) {
                    if (ObjToSource.check[i] == o) {
                        return '{}';
                    }
                }
                ObjToSource.check.push(o);
            }
            var k = "", na = typeof(o.length) == "undefined" ? 1 : 0, str = "";
            for (var p in o) {
                if (na) k = "'" + p + "':";
                if (typeof o[p] == "string") str += k + "'" + o[p] + "',";
                else if (typeof o[p] == "object") str += k + ObjToSource(o[p]) + ",";
                else str += k + o[p] + ",";
            }
            if (typeof(o) == "object") ObjToSource.check.pop();
            if (na) return "{" + str.slice(0, -1) + "}";
            else return "[" + str.slice(0, -1) + "]";
        }

        function addChannelTrending(channel, i) {
            if (channel) {
                $('#waitload').show();
                $('#offwaitload').click(function () {
                    $('#waitload').hide();
                });
                var channelName = channel.id;
                var channelDisplayName = channel.name;
                var channelUnit = channel.unit;
                selectedChannels.push({id: channelName, name: channelDisplayName, unit: channelUnit});
                me.selectedChannels(selectedChannels);
                var yaxisn = i == null ? selectedChannels.length : i;
                var fromTime = moment(trending.get("fromTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
                var toTime = moment(trending.get("toTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
                
                 apis.getHistories(channelName, fromTime, toTime).then(function (r){
                    response = r.result.sort(function(a,b) { return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ?  1 : 0; });
                 if (response != undefined){
                    //console.log(response);
                    //console.log(channel);
                     var data = []
                     for (var i in response) {
                         //if(channel.type == 'Analogue')
                         //{
                            //Moment
                            //console.log(response[i]);
                            var D = new Date(response[i]["createdAt"]);
                            //console.log(D);
                            var theUnixTime = D.getTime();
                            //console.log(theUnixTime);
                            data.push([theUnixTime, response[i]["value"]]);
                         //}
                         /*else (channel.type == 'Digital')
                         {
                            console.log('Digital');
                             if(response[i+1] != undefined)
                             {
                             data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[i]["createdAt"])*1000, response[i]["value"]]);
                             data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[i]["updatedAt"])*1000, response[i]["value"]]);
                             data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[i]["updatedAt"])*1000, response[i+1]["value"]]);
                             data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[i+1]["updatedAt"])*1000, response[i+1]["value"]]);
                             }
                             else
                             {
                             data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[i]["createdAt"])*1000, response[i]["value"]]);
                             data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[i]["updatedAt"])*1000, response[i]["value"]]);
                             }
                         }*/
                     }
                     //console.log(data);
                     trending.get("channels")[channelName] = {
                     label: channelDisplayName + " = 0 (" + channelUnit + ")",
                     channelName: channelDisplayName,
                     data: data,
                     xaxis: 1,
                     //color: "#545454",
                     yaxis:yaxisn//Math.floor((Math.random() * 100) + 1)
                     };
                     renderData();
                     $('#waitload').hide();
                 }
                 },function (e){app.showMessage("Url: api/ChannelHistories/" + channelName + "?filter[where][createdAt][gt]=" + fromTime + "&filter[where][updatedAt][lt]=" + toTime + "&access_token=" + localStorage.getItem('swagger_accessToken') + "<br/>"+ e.responseText, "Error", ['Yes']);});
                 
                /*trending.get("channels")[channelName] = {
                    label: channelDisplayName + " = 0 (" + channelUnit + ")",
                    channelName: channelDisplayName,
                    data: [[-373597200000, 315.71], [-370918800000, 317.45], [-368326800000, 317.50], [-363056400000, 315.86], [-360378000000, 314.93], [-357699600000, 313.19], [-352429200000, 313.34], [-349837200000, 314.67], [-347158800000, 315.58], [-344480400000, 316.47], [-342061200000, 316.65], [-339382800000, 317.71], [-336790800000, 318.29], [-334112400000, 318.16], [-331520400000, 316.55], [-328842000000, 314.80], [-326163600000, 313.84], [-323571600000, 313.34], [-320893200000, 314.81], [-318301200000, 315.59], [-315622800000, 316.43], [-312944400000, 316.97], [-310438800000, 317.58], [-307760400000, 319.03], [-305168400000, 320.03], [-302490000000, 319.59], [-299898000000, 318.18], [-297219600000, 315.91], [-294541200000, 314.16], [-291949200000, 313.83], [-289270800000, 315.00], [-286678800000, 316.19], [-284000400000, 316.89], [-281322000000, 317.70], [-278902800000, 318.54], [-276224400000, 319.48], [-273632400000, 320.58], [-270954000000, 319.78], [-268362000000, 318.58], [-265683600000, 316.79], [-263005200000, 314.99], [-260413200000, 315.31], [-257734800000, 316.10], [-255142800000, 317.01], [-252464400000, 317.94], [-249786000000, 318.56], [-247366800000, 319.69], [-244688400000, 320.58], [-242096400000, 321.01], [-239418000000, 320.61], [-236826000000, 319.61], [-234147600000, 317.40], [-231469200000, 316.26], [-228877200000, 315.42], [-226198800000, 316.69], [-223606800000, 317.69], [-220928400000, 318.74], [-218250000000, 319.08], [-215830800000, 319.86], [-213152400000, 321.39], [-210560400000, 322.24], [-207882000000, 321.47], [-205290000000, 319.74], [-202611600000, 317.77], [-199933200000, 316.21], [-197341200000, 315.99], [-194662800000, 317.07], [-192070800000, 318.36], [-189392400000, 319.57], [-178938000000, 322.23], [-176259600000, 321.89], [-173667600000, 320.44], [-170989200000, 318.70], [-168310800000, 316.70], [-165718800000, 316.87], [-163040400000, 317.68], [-160448400000, 318.71], [-157770000000, 319.44], [-155091600000, 320.44], [-152672400000, 320.89], [-149994000000, 322.13], [-147402000000, 322.16], [-144723600000, 321.87], [-142131600000, 321.21], [-139453200000, 318.87], [-136774800000, 317.81], [-134182800000, 317.30], [-131504400000, 318.87], [-128912400000, 319.42], [-126234000000, 320.62], [-123555600000, 321.59], [-121136400000, 322.39], [-118458000000, 323.70], [-115866000000, 324.07], [-113187600000, 323.75], [-110595600000, 322.40], [-107917200000, 320.37], [-105238800000, 318.64], [-102646800000, 318.10], [-99968400000, 319.79], [-97376400000, 321.03], [-94698000000, 322.33], [-92019600000, 322.50], [-89600400000, 323.04], [-86922000000, 324.42], [-84330000000, 325.00], [-81651600000, 324.09], [-79059600000, 322.55], [-76381200000, 320.92], [-73702800000, 319.26], [-71110800000, 319.39], [-68432400000, 320.72], [-65840400000, 321.96], [-63162000000, 322.57], [-60483600000, 323.15], [-57978000000, 323.89], [-55299600000, 325.02], [-52707600000, 325.57], [-50029200000, 325.36], [-47437200000, 324.14], [-44758800000, 322.11], [-42080400000, 320.33], [-39488400000, 320.25], [-36810000000, 321.32], [-34218000000, 322.90], [-31539600000, 324.00], [-28861200000, 324.42], [-26442000000, 325.64], [-23763600000, 326.66], [-21171600000, 327.38], [-18493200000, 326.70], [-15901200000, 325.89], [-13222800000, 323.67], [-10544400000, 322.38], [-7952400000, 321.78], [-5274000000, 322.85], [-2682000000, 324.12], [-3600000, 325.06], [2674800000, 325.98], [5094000000, 326.93], [7772400000, 328.13], [10364400000, 328.07], [13042800000, 327.66], [15634800000, 326.35], [18313200000, 324.69], [20991600000, 323.10], [23583600000, 323.07], [26262000000, 324.01], [28854000000, 325.13], [31532400000, 326.17], [34210800000, 326.68], [36630000000, 327.18], [39308400000, 327.78], [41900400000, 328.92], [44578800000, 328.57], [47170800000, 327.37], [49849200000, 325.43], [52527600000, 323.36], [55119600000, 323.56], [57798000000, 324.80], [60390000000, 326.01], [63068400000, 326.77], [65746800000, 327.63], [68252400000, 327.75], [70930800000, 329.72], [73522800000, 330.07], [76201200000, 329.09], [78793200000, 328.05], [81471600000, 326.32], [84150000000, 324.84], [86742000000, 325.20], [89420400000, 326.50], [92012400000, 327.55], [94690800000, 328.54], [97369200000, 329.56], [99788400000, 330.30], [102466800000, 331.50], [105058800000, 332.48], [107737200000, 332.07], [110329200000, 330.87], [113007600000, 329.31], [115686000000, 327.51], [118278000000, 327.18], [120956400000, 328.16], [123548400000, 328.64], [126226800000, 329.35], [128905200000, 330.71], [131324400000, 331.48], [134002800000, 332.65], [136594800000, 333.16], [139273200000, 332.06], [141865200000, 330.99], [144543600000, 329.17], [147222000000, 327.41], [149814000000, 327.20], [152492400000, 328.33], [155084400000, 329.50], [157762800000, 330.68], [160441200000, 331.41], [162860400000, 331.85], [165538800000, 333.29], [168130800000, 333.91], [170809200000, 333.40], [173401200000, 331.78], [176079600000, 329.88], [178758000000, 328.57], [181350000000, 328.46], [184028400000, 329.26], [189298800000, 331.71], [191977200000, 332.76], [194482800000, 333.48], [197161200000, 334.78], [199753200000, 334.78], [202431600000, 334.17], [205023600000, 332.78], [207702000000, 330.64], [210380400000, 328.95], [212972400000, 328.77], [215650800000, 330.23], [218242800000, 331.69], [220921200000, 332.70], [223599600000, 333.24], [226018800000, 334.96], [228697200000, 336.04], [231289200000, 336.82], [233967600000, 336.13], [236559600000, 334.73], [239238000000, 332.52], [241916400000, 331.19], [244508400000, 331.19], [247186800000, 332.35], [249778800000, 333.47], [252457200000, 335.11], [255135600000, 335.26], [257554800000, 336.60], [260233200000, 337.77], [262825200000, 338.00], [265503600000, 337.99], [268095600000, 336.48], [270774000000, 334.37], [273452400000, 332.27], [276044400000, 332.41], [278722800000, 333.76], [281314800000, 334.83], [283993200000, 336.21], [286671600000, 336.64], [289090800000, 338.12], [291769200000, 339.02], [294361200000, 339.02], [297039600000, 339.20], [299631600000, 337.58], [302310000000, 335.55], [304988400000, 333.89], [307580400000, 334.14], [310258800000, 335.26], [312850800000, 336.71], [315529200000, 337.81], [318207600000, 338.29], [320713200000, 340.04], [323391600000, 340.86], [325980000000, 341.47], [328658400000, 341.26], [331250400000, 339.29], [333928800000, 337.60], [336607200000, 336.12], [339202800000, 336.08], [341881200000, 337.22], [344473200000, 338.34], [347151600000, 339.36], [349830000000, 340.51], [352249200000, 341.57], [354924000000, 342.56], [357516000000, 343.01], [360194400000, 342.47], [362786400000, 340.71], [365464800000, 338.52], [368143200000, 336.96], [370738800000, 337.13], [373417200000, 338.58], [376009200000, 339.89], [378687600000, 340.93], [381366000000, 341.69], [383785200000, 342.69], [389052000000, 344.30], [391730400000, 343.43], [394322400000, 341.88], [397000800000, 339.89], [399679200000, 337.95], [402274800000, 338.10], [404953200000, 339.27], [407545200000, 340.67], [410223600000, 341.42], [412902000000, 342.68], [415321200000, 343.46], [417996000000, 345.10], [420588000000, 345.76], [423266400000, 345.36], [425858400000, 343.91], [428536800000, 342.05], [431215200000, 340.00], [433810800000, 340.12], [436489200000, 341.33], [439081200000, 342.94], [441759600000, 343.87], [444438000000, 344.60], [446943600000, 345.20], [452210400000, 347.36], [454888800000, 346.74], [457480800000, 345.41], [460159200000, 343.01], [462837600000, 341.23], [465433200000, 341.52], [468111600000, 342.86], [470703600000, 344.41], [473382000000, 345.09], [476060400000, 345.89], [478479600000, 347.49], [481154400000, 348.00], [483746400000, 348.75], [486424800000, 348.19], [489016800000, 346.54], [491695200000, 344.63], [494373600000, 343.03], [496969200000, 342.92], [499647600000, 344.24], [502239600000, 345.62], [504918000000, 346.43], [507596400000, 346.94], [510015600000, 347.88], [512690400000, 349.57], [515282400000, 350.35], [517960800000, 349.72], [520552800000, 347.78], [523231200000, 345.86], [525909600000, 344.84], [528505200000, 344.32], [531183600000, 345.67], [533775600000, 346.88], [536454000000, 348.19], [539132400000, 348.55], [541551600000, 349.52], [544226400000, 351.12], [546818400000, 351.84], [549496800000, 351.49], [552088800000, 349.82], [554767200000, 347.63], [557445600000, 346.38], [560041200000, 346.49], [562719600000, 347.75], [565311600000, 349.03], [567990000000, 350.20], [570668400000, 351.61], [573174000000, 352.22], [575848800000, 353.53], [578440800000, 354.14], [581119200000, 353.62], [583711200000, 352.53], [586389600000, 350.41], [589068000000, 348.84], [591663600000, 348.94], [594342000000, 350.04], [596934000000, 351.29], [599612400000, 352.72], [602290800000, 353.10], [604710000000, 353.65], [607384800000, 355.43], [609976800000, 355.70], [612655200000, 355.11], [615247200000, 353.79], [617925600000, 351.42], [620604000000, 349.81], [623199600000, 350.11], [625878000000, 351.26], [628470000000, 352.63], [631148400000, 353.64], [633826800000, 354.72], [636246000000, 355.49], [638920800000, 356.09], [641512800000, 357.08], [644191200000, 356.11], [646783200000, 354.70], [649461600000, 352.68], [652140000000, 351.05], [654735600000, 351.36], [657414000000, 352.81], [660006000000, 354.22], [662684400000, 354.85], [665362800000, 355.66], [667782000000, 357.04], [670456800000, 358.40], [673048800000, 359.00], [675727200000, 357.99], [678319200000, 356.00], [680997600000, 353.78], [683676000000, 352.20], [686271600000, 352.22], [688950000000, 353.70], [691542000000, 354.98], [694220400000, 356.09], [696898800000, 356.85], [699404400000, 357.73], [702079200000, 358.91], [704671200000, 359.45], [707349600000, 359.19], [709941600000, 356.72], [712620000000, 354.79], [715298400000, 352.79], [717894000000, 353.20], [720572400000, 354.15], [723164400000, 355.39], [725842800000, 356.77], [728521200000, 357.17], [730940400000, 358.26], [733615200000, 359.16], [736207200000, 360.07], [738885600000, 359.41], [741477600000, 357.44], [744156000000, 355.30], [746834400000, 353.87], [749430000000, 354.04], [752108400000, 355.27], [754700400000, 356.70], [757378800000, 358.00], [760057200000, 358.81], [762476400000, 359.68], [765151200000, 361.13], [767743200000, 361.48], [770421600000, 360.60], [773013600000, 359.20], [775692000000, 357.23], [778370400000, 355.42], [780966000000, 355.89], [783644400000, 357.41], [786236400000, 358.74], [788914800000, 359.73], [791593200000, 360.61], [794012400000, 361.58], [796687200000, 363.05], [799279200000, 363.62], [801957600000, 363.03], [804549600000, 361.55], [807228000000, 358.94], [809906400000, 357.93], [812502000000, 357.80], [815180400000, 359.22], [817772400000, 360.44], [820450800000, 361.83], [823129200000, 362.95], [825634800000, 363.91], [828309600000, 364.28], [830901600000, 364.94], [833580000000, 364.70], [836172000000, 363.31], [838850400000, 361.15], [841528800000, 359.40], [844120800000, 359.34], [846802800000, 360.62], [849394800000, 361.96], [852073200000, 362.81], [854751600000, 363.87], [857170800000, 364.25], [859845600000, 366.02], [862437600000, 366.46], [865116000000, 365.32], [867708000000, 364.07], [870386400000, 361.95], [873064800000, 360.06], [875656800000, 360.49], [878338800000, 362.19], [880930800000, 364.12], [883609200000, 364.99], [886287600000, 365.82], [888706800000, 366.95], [891381600000, 368.42], [893973600000, 369.33], [896652000000, 368.78], [899244000000, 367.59], [901922400000, 365.84], [904600800000, 363.83], [907192800000, 364.18], [909874800000, 365.34], [912466800000, 366.93], [915145200000, 367.94], [917823600000, 368.82], [920242800000, 369.46], [922917600000, 370.77], [925509600000, 370.66], [928188000000, 370.10], [930780000000, 369.08], [933458400000, 366.66], [936136800000, 364.60], [938728800000, 365.17], [941410800000, 366.51], [944002800000, 367.89], [946681200000, 369.04], [949359600000, 369.35], [951865200000, 370.38], [954540000000, 371.63], [957132000000, 371.32], [959810400000, 371.53], [962402400000, 369.75], [965080800000, 368.23], [967759200000, 366.87], [970351200000, 366.94], [973033200000, 368.27], [975625200000, 369.64], [978303600000, 370.46], [980982000000, 371.44], [983401200000, 372.37], [986076000000, 373.33], [988668000000, 373.77], [991346400000, 373.09], [993938400000, 371.51], [996616800000, 369.55], [999295200000, 368.12], [1001887200000, 368.38], [1004569200000, 369.66], [1007161200000, 371.11], [1009839600000, 372.36], [1012518000000, 373.09], [1014937200000, 373.81], [1017612000000, 374.93], [1020204000000, 375.58], [1022882400000, 375.44], [1025474400000, 373.86], [1028152800000, 371.77], [1030831200000, 370.73], [1033423200000, 370.50], [1036105200000, 372.18], [1038697200000, 373.70], [1041375600000, 374.92], [1044054000000, 375.62], [1046473200000, 376.51], [1049148000000, 377.75], [1051740000000, 378.54], [1054418400000, 378.20], [1057010400000, 376.68], [1059688800000, 374.43], [1062367200000, 373.11], [1064959200000, 373.10], [1067641200000, 374.77], [1070233200000, 375.97], [1072911600000, 377.03], [1075590000000, 377.87], [1078095600000, 378.88], [1080770400000, 380.42], [1083362400000, 380.62], [1086040800000, 379.70], [1088632800000, 377.43], [1091311200000, 376.32], [1093989600000, 374.19], [1096581600000, 374.47], [1099263600000, 376.15], [1101855600000, 377.51], [1104534000000, 378.43], [1107212400000, 379.70], [1109631600000, 380.92], [1112306400000, 382.18], [1114898400000, 382.45], [1117576800000, 382.14], [1120168800000, 380.60], [1122847200000, 378.64], [1125525600000, 376.73], [1128117600000, 376.84], [1130799600000, 378.29], [1133391600000, 380.06], [1136070000000, 381.40], [1138748400000, 382.20], [1141167600000, 382.66], [1143842400000, 384.69], [1146434400000, 384.94], [1149112800000, 384.01], [1151704800000, 382.14], [1154383200000, 380.31], [1157061600000, 378.81], [1159653600000, 379.03], [1162335600000, 380.17], [1164927600000, 381.85], [1167606000000, 382.94], [1170284400000, 383.86], [1172703600000, 384.49], [1175378400000, 386.37], [1177970400000, 386.54], [1180648800000, 385.98], [1183240800000, 384.36], [1185919200000, 381.85], [1188597600000, 380.74], [1191189600000, 381.15], [1193871600000, 382.38], [1196463600000, 383.94], [1199142000000, 385.44]],
                    xaxis: 1,
                    //color: "#545454",
                    yaxis: yaxisn//Math.floor((Math.random() * 100) + 1)
                };*/
                //renderData();
            }
        };
        function showSub1() {
            me.itemSub.removeAll();
            for (var i = 0; i < me.treeSelect.children.length; ++i) {
                me.itemSub.push(me.treeSelect.children[i]);
            }
        }

        function infid(i) {
            return buff.find(buff.getByKey('ChannelsAll'), 'unitID', i);
        }

        function showChannel() {
            if (me.UnitSelect)me.channelsList(infid(me.UnitSelect.id));
        }
    };
});