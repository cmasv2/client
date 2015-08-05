define([
'durandal/app',
"jquery",
"q",
"knockout",
"knockback",
"../../helper/screen_helper",
"../../models/trending",
"moment",
"Canvas2Image",
"../../helper/datetime.util",
"flot",
"flottime",
//"flotcrosshair",
//"flotnavigate",
//ndingControl",
"../../bindings/datetime.picker",
"bootstrap-datepicker",
"css!../../../css/trending.css",
"css!../../../lib/nqhlib/css/Control.Trending.css"
],function (app,$,Q,ko,kb,ScreenHelper,Trending,Moment,Canvas2Image,DateTimeUtil) {
        return function () {
            var dateTimeUtil = new DateTimeUtil();
            var me = this,chartWrapperID = "#chart-wrapper",
            chartWrapperElement,selectedChannels = [],
            buff = app.buff,apis = app.services.getService("apis"),
            graph = null,updateLegendTimeout,latestPosition = null,legends = null,
            chartOptions = {
                series: {
                    lines: { show: true}
                },
                xaxes: [{
                    mode: "time",
                    minTickSize: [1, "minute"],
                    timeformat: "%d/%m %H:%M:%S",
                    show: true
                }],
                yaxes: [
                    { position: 'left' }
                ],
                crosshair: {
                    mode: "x"
                },
                grid: {
                    show: true,
                    backgroundColor: "white",
                    hoverable: true,
                    autoHighlight: true,
                    clickable : true
                },
                zoom: {
                    interactive: false
                },
                pan: {
                    interactive: false
                },
                legend: { position: "sw" },
                ControlTrending: {
                    position: { right: "100px", top: "38px" },
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
	            channels: {
	            },
	            notes: []
	        });
            me.fromTime = kb.observable(trending, "fromTime");
	        me.fromTime.subscribe(dateRangeUpdated);
	        me.toTime = kb.observable(trending, "toTime");
	        me.toTime.subscribe(dateRangeUpdated);
	        me.notes = ko.observableArray(trending.get("notes"));
	        me.channelsList = ko.observableArray();
	        me.selectedChannels = ko.observableArray(selectedChannels);
            me.selectedChannel = ko.observable();
            me.channelsGroupList = ko.observableArray();
            var selectedGroupChannels = [];
            me.selectedGroupChannels = ko.observableArray(selectedGroupChannels);
            me.selectedGroupChannel = ko.observable();
            function addChannelIntoTrending() {
                if (me.selectedChannel()) {
                    var channelName = me.selectedChannel().id;
                    if(trending.get("channels")[channelName] == undefined){
                        addChannelTrending(me.selectedChannel(),null);
                     }
                     else{
                        alert('Channel already exists');
                     }
                }
            }
            function removeChannelFormTrending(channelInfo, event) {
                if (channelInfo) {
                    var channelName = channelInfo.id;
                    delete trending.get("channels")[channelName];
                    selectedChannels.splice(selectedChannels.indexOf(channelInfo),1);
                    me.selectedChannels(selectedChannels);
                    renderData();
                }
            }
            function getBuffer(key) {
                            if (!buff) {
                                return false;
                            }
                            else {
                                return buff.getByKey(key);
                            }
                        }
            function dateRangeUpdated() {}
            function myUpdateLegend(item) {
                updateLegendTimeout = null;
                var dataIndex = item.dataIndex;
                var dataset = graph.getData();
                var snapShotDatas = [];
                for (var i = 0; i < dataset.length; ++i) {
                    var series = dataset[i];
                    var value = series.data[dataIndex][1];

                    legends.eq(i).text(series.label.replace(/=.*[(]/, "= " + (value !== null ? value.toFixed(2) : "null") +"("));
                }
                legends.each(function () {
                        // fix the widths so they don't jump around
                    $(this).css('width', $(this).width());
                });
            }
            function dateRangeUpdated() {
                /**
                 * Get data from channel
                 * */

                function updateData (channelName, fromTimeInUnix, toTimeInUnix) {

                    return apis.getDataByTimeRange(channelName, fromTimeInUnix, toTimeInUnix).then(
                        function (response){
                            if (response){
                                var data = []
                                for (var index in response) {
                                    data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[index]["TheTime"])*1000, response[index]["data"]]);
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
                }
            }
            function markAsIssue(viewModel, event) {
                viewModel.status = "Status : ISSUE";
                me.notes(trending.get("notes"));
            }
            function markAsOK(viewModel, event) {
                viewModel.status = 'Status : Ok';
                me.notes(trending.get("notes"));
            }
            function deleteNode(viewModel, event){
                if (viewModel) {
                    trending.get("notes").splice(trending.get("notes").indexOf(viewModel),1);
                    me.notes(trending.get("notes"));

                }
            }
            function addNote(dataItem) {
                var dataIndex = dataItem.dataIndex;
                var dataset = graph.getData();
                var snapShotDatas = [];
                for (var i = 0; i < dataset.length; ++i) {
                    var series = dataset[i];
    //
                    var value = series.data[dataIndex][1];

                    snapShotDatas.push(series.label.replace(/=.*[(]/, "= " + (value !== null ? value.toFixed(2) : "null") +"("));
                }
                var date = moment(dataItem.datapoint[0]-25200000).format(app.CMASConfig.DateTimeFormat.GLOBAL);
                var note = {date: date, comment: "Click here to add comment", data: snapShotDatas, status: "Status : -----"};
                note.markAsIssue = markAsIssue;
                note.markAsOK = markAsOK;
                note.deleteNode = deleteNode;
                trending.set(trending.get("notes").push(note));
                me.notes(trending.get("notes"));
                //addcomment(dataItem);

            }
            function addcomment(dataItem){
                var oyaxis = null;
                var xaxis = null;
                var yaxis = null;
                var axes = graph.getAxes();

                $.each(graph.getAxes(), function (i, axis) {
                    if (!axis.show)
                        return;
                    //alert(print_r(axis));
                    if(axis.direction == "x")
                        xaxis = axis;
                    else if(axis.n == dataItem.seriesIndex ){
                        yaxis = axis;
                    }
                });
                //alert(print_r(yaxis[]));
                if(!yaxis){
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
                var comment = {contents:'huy',x:dataItem.datapoint[0],y:dataItem.datapoint[1],offsetX: 15,offsetY: 25};
                 var notchPosition = comment.notch && comment.notch.position
                || commentOptions.notch && commentOptions.notch.position
                || 'bottom';

                var html = commentOptions.htmlTemplate(comment.contents, notchPosition);
                //alert(print_r(dataItem));
                //var size = measureHtmlSize($(html)[0].innerHTML, graph.getPlaceholder()[0], commentOptions.wrapperCss || null);
                if (comment.x >= xmin && comment.x <= xmax) {
                    if (comment.y >= ymin && comment.y <= ymax) {
                        var canvasX = xaxis.p2c(comment.x) + graph.getPlotOffset().left  - (comment.offsetX || 0);
                        var canvasY = yaxis.p2c(comment.y) + graph.getPlotOffset().top  - (comment.offsetY || 0);

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
            function ControlTrending(graph){

                var $placeholder = graph.getPlaceholder();
                $placeholder.find(".pan-up").click(function(e) {
                    e.preventDefault();
                    graph.pan({top: chartOptions.ControlTrending.panAmount},click1);
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
            function panUp(graph){}
            function axisTarget(graph){
                $.each(graph.getAxes(), function (i, axis) {
                    if (!axis.show)
                        return;

                    var box = axis.box;

                    $("<div class='axisTarget' style='position:absolute; left:" + box.left + "px; top:" + box.top + "px; width:" + box.width +  "px; height:" + box.height + "px'></div>")
                        .data("axis.direction", axis.direction)
                        .data("axis.n", axis.n)
                        .css({ backgroundColor: "#f00", opacity: 0, cursor: "pointer" })
                        .appendTo(graph.getPlaceholder())
                        .hover(
                            function () { $(this).css({ opacity: 0.10 }) },
                            function () { $(this).css({ opacity: 0 }) }
                        )
                        .click(function () {
                            if(axis.direction === "y"){
                                graph.setchannelsl(axis);
                                var dataset = graph.getData();
                                $("#selectoy").text(dataset[axis.n -1].channelName)
                            }

                            //
                            //alert(print_r(axis.direction));
                            //
                        });
                });
            }
            function removeselectedOy(){
                graph.setchannelsl(null);
                $("#selectoy").text("-----")

            }
            function renderData() {
                if(graph)
                    chartOptions = graph.getOptions();
                graph = $.plot(chartWrapperID, getDataChartFormTrending(trending), chartOptions);
               // graph.setchannelsl(null);
                $("#selectoy").text('---');
                legends = $(chartWrapperID + " .legendLabel");
                axisTarget(graph);

                //ControlTrending(graph);
                //addArrow("left", 55, 60, { left: -100 });
                //addArrow("right", 25, 60, { left: 100 });

            }
            function addGroupChannelIntoTrending() {
                //
                //delete selectedGroupChannels;
                if(selectedGroupChannels != ""){
                    //alert(print_r(selectedGroupChannels));
                    selectedGroupChannels.splice(selectedGroupChannels[0],1);
                    me.selectedGroupChannels(selectedGroupChannels);
                }

                    var GroupchannelId = me.selectedGroupChannel()._id;
                    var GroupchannelDisplayName = me.selectedGroupChannel().name;
                    selectedGroupChannels.push({id: GroupchannelId, name: GroupchannelDisplayName});
                    me.selectedGroupChannels(selectedGroupChannels);
                    $.each(trending.get("channels"), function (channelName, dataObject) {
                        delete trending.get("channels")[channelName];
                        selectedChannels.splice(selectedChannels.indexOf(dataObject),1);
                        me.selectedChannels(selectedChannels);
                    });

                    if (me.selectedGroupChannel()) {
                        var channels = me.selectedGroupChannel().channels;
                        var stt = 1;
                        for (var i = channels.length - 1; i >= 0; i--) {
                            if(channels[i]){

                                if(trending.get("channels")[channels[i].id] == undefined){

                                    addChannelTrending(channels[i],stt);
                                    stt++;
                                }
                            }
                        };
                    }

            }
            function saveGroupChannelFromTrending(GroupchannelInfo, event){
                var data = {name:GroupchannelInfo.name,channels:selectedChannels}
                apis.updateGroupChannel(GroupchannelInfo.id,data);
                apis.getChannelsGroupDefinition().then(function (definitions) { //
                    me.channelsGroupList(definitions);
                })
                alert('saved successfully');
            }
            function saveasGroupChannelFromTrending(GroupchannelInfo, event){
                var data = {name:GroupchannelInfo.name,channels:selectedChannels}
                apis.addGroupChannel(data);
                apis.getChannelsGroupDefinition().then(function (definitions) { //
                    me.channelsGroupList(definitions);
                })
                alert('saved successfully');
            }
            function ObjToSource(o){
                if (!o) return 'null';
                if (typeof(o) == "object") {
                    if (!ObjToSource.check) ObjToSource.check = new Array();
                    for (var i=0, k=ObjToSource.check.length ; i<k ; ++i) {
                        if (ObjToSource.check[i] == o) {return '{}';}
                    }
                    ObjToSource.check.push(o);
                }
                var k="",na=typeof(o.length)=="undefined"?1:0,str="";
                for(var p in o){
                    if (na) k = "'"+p+ "':";
                    if (typeof o[p] == "string") str += k + "'" + o[p]+"',";
                    else if (typeof o[p] == "object") str += k + ObjToSource(o[p])+",";
                    else str += k + o[p] + ",";
                }
                if (typeof(o) == "object") ObjToSource.check.pop();
                if (na) return "{"+str.slice(0,-1)+"}";
                else return "["+str.slice(0,-1)+"]";
            }
            function addChannelTrending(channel,i) {
                if (channel) {
                    var channelName = channel.id;
                    var channelDisplayName = channel.name;
                    var channelUnit = channel.unit;
                    selectedChannels.push({id: channelName, name: channelDisplayName,unit:channelUnit});
                    me.selectedChannels(selectedChannels);
                    var yaxisn=i==null?selectedChannels.length:i;
                    var fromTime = moment(trending.get("fromTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
                    var toTime = moment(trending.get("toTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
                    apis.getHistories(channelName, fromTime, toTime).then(function (response){
                        if (response != undefined){
                            var data = []
                            for (var i in response) {
                                if(channel.typec == 'Analogue')
                                {
                                     data.push([dateTimeUtil.toLocalTimeUnixTimestamp(response[i]["createdAt"])*1000, response[i]["value"]]);
                                }
                                else (channel.typec == 'Digital')
                                {
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
                                }
                            }
                            trending.get("channels")[channelName] = {
                                label: channelDisplayName + " = 0 (" + channelUnit + ")",
                                channelName: channelDisplayName,
                                data: data,
                                xaxis: 1,
                                //color: "#545454",
                                yaxis:yaxisn//Math.floor((Math.random() * 100) + 1)
                            };
                            renderData();
                        }
                    },function (e){app.showMessage("Url: api/ChannelHistories/" + channelName + "?filter[where][createdAt][gt]=" + fromTime + "&filter[where][updatedAt][lt]=" + toTime + "&access_token=" + localStorage.getItem('swagger_accessToken') + "<br/>"+ e.responseText, "Error", ['Yes']);});

                }
            };
            function showSub1(){
                me.itemSub.removeAll();
                for (var i = 0; i < me.treeSelect.children.length; ++i) {
                    me.itemSub.push(me.treeSelect.children[i]);
                }
            }
            function infid(i){ return buff.find(buff.getByKey('ChannelsAll'), 'unitID', i);}
            function showChannel(){me.channelsList(infid(me.UnitSelect.id));}
            var config1 = [];
            if(!getBuffer('Location')){
                config1 = apis.getsub1(0);
                buff.setByKey('Location',config1);
            }
            else{
                config1 = getBuffer('Location');
            }
            var itemSub = [];
            me.treeSelect = config1[0].children[0];
            me.UnitSelect = config1[0].children[0].children[0];
            me.attached = function () {
                            chartWrapperElement = $(chartWrapperID);
                            chartWrapperElement.height(300);

                            chartWrapperElement.bind("plothover",  function (event, pos, item) {
                                latestPosition = pos;
                                if (item) {

                                    if (!updateLegendTimeout) {
                                        updateLegendTimeout = setTimeout(myUpdateLegend.bind(pos, item), 50);
                                    }
                                }
                            });

                            var panning = false;

                            $(chartWrapperID + " canvas").bind('drag',function(){
                                panning = true;
                            });
                            $(chartWrapperID + " canvas").bind('dragend',function(){
                                setTimeout(function() {panning = false; }, 100);
                            });

                            chartWrapperElement.bind('plotclick', function (event, pos, item) {
                                if (!panning){
                                    if (item) {
                                        addNote(item);
                                    };
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
                for (var i = 0; i < me.treeSelect.children.length; ++i) {
                    itemSub.push(me.treeSelect.children[i]);
                }
            }
            me.showChannel = showChannel;
            me.systemTree = ko.observableArray(config1[0].children);
            me.itemSub = ko.observableArray(itemSub);
            me.showSub = showSub1;
            me.removeselectOy = removeselectedOy;
            me.saveGroupChannelFromTrending = saveGroupChannelFromTrending;
            me.addGroupChannelIntoTrending = addGroupChannelIntoTrending;
            me.saveasGroupChannelFromTrending = saveasGroupChannelFromTrending;
            me.addChannelIntoTrending = addChannelIntoTrending;
            me.removeChannelFromTrending = removeChannelFormTrending;
        };
    }
);

