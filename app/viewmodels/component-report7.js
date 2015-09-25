/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app","jquery", "knockout", "knockback", "plugins/router", "q", "../models/report", "moment", "jqplot", "cursor", "dateAxisRenderer", "canvasTextRenderer", "canvasAxisLabelRenderer", "../bindings/datetime.picker", "bootstrap-datepicker", "css!../../lib/nqhlib/css/jquery.jqplot.min.css"], function (app,$ ,ko, kb, router, Q, Report, Moment) {
    return function () {
        var me = this;
        me.Temps = [], me.Hums = [], apis = app.services.getService("apis"), buff = app.buff;
        var report = new Report({
            fromTime: moment().subtract(1, "day").format(app.CMASConfig.DateTimeFormat.GLOBAL),
            toTime: moment().format(app.CMASConfig.DateTimeFormat.GLOBAL)
        });

        function dateRangeUpdated() {
            renderChart()
        }

        function getHistories() {
            var deferred = Q.defer();
            var fromTime = moment(report.get("fromTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            var toTime = moment(report.get("toTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            console.log(fromTime);
            console.log(toTime);
            apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_MSBDC_DPM_kW")[0].id, fromTime, toTime).then(function (rs) {
                if (rs.result)me.DPMA_kW(Math.round(rs.result * 10) / 10);
                apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_DBAC_DPM_kW")[0].id, fromTime, toTime).then(function (rs) {
                    if (rs.result)me.DPMB_kW(Math.round(rs.result * 10) / 10);
                    me.csd(Math.round((me.DPMA_kW() + rs.result) * 10) / 10)
                })
            });
            apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_DBAC_DPM_kWh")[0].id, fromTime, toTime).then(function (rs) {
                if (rs.result)me.DPMA_kWh(Math.round(rs.result * 10) / 10);
                apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_DBAC_DPM_kWh")[0].id, fromTime, toTime).then(function (rs) {
                    me.nld(Math.round((me.DPMA_kWh() + rs.result) * 10) / 10)
                })
            });
            apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS1_kW1out")[0].id, fromTime, toTime).then(function (rs) {
                if (rs.result)me.UPS1_kW1out(Math.round(rs.result * 10) / 10);
                apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS1_kW2out")[0].id, fromTime, toTime).then(function (rs) {
                    if (rs.result)me.UPS1_kW2out(Math.round(rs.result * 10) / 10);
                    apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS1_kW3out")[0].id, fromTime, toTime).then(function (rs) {
                        me.UPS1_kW(Math.round(((me.UPS1_kW1out() + me.UPS1_kW2out() + Math.round(rs.result * 10) / 10) / 3)* 10) / 10)
                    })
                })
            });
            apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS2_kW1out")[0].id, fromTime, toTime).then(function (rs) {
                if (rs.result)me.UPS2_kW1out(Math.round(rs.result * 10) / 10);
                apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS2_kW2out")[0].id, fromTime, toTime).then(function (rs) {
                    if (rs.result)me.UPS2_kW2out(Math.round(rs.result * 10) / 10);
                    apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS2_kW3out")[0].id, fromTime, toTime).then(function (rs) {
                        me.UPS2_kW(Math.round(((me.UPS2_kW1out() + me.UPS2_kW2out() + Math.round(rs.result * 10) / 10) / 3)* 10) / 10)
                    })
                })
            });
            apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS1_I1out")[0].id, fromTime, toTime).then(function (rs) {
                if (rs.result)me.UPS1_I1out(Math.round(rs.result * 10) / 10);
                apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS1_I2out")[0].id, fromTime, toTime).then(function (rs) {
                    if (rs.result)me.UPS1_I2out(Math.round(rs.result * 10) / 10);
                    apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS1_I3out")[0].id, fromTime, toTime).then(function (rs) {
                        me.UPS1_I(Math.round(((me.UPS1_I1out() + me.UPS1_I2out() + Math.round(rs.result * 10) / 10) / 3)* 10) / 10)
                    })
                })
            });
            apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS2_I1out")[0].id, fromTime, toTime).then(function (rs) {
                if (rs.result)me.UPS2_I1out(Math.round(rs.result * 10) / 10);
                apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS2_I2out")[0].id, fromTime, toTime).then(function (rs) {
                    if (rs.result)me.UPS2_I2out(Math.round(rs.result * 10) / 10);
                    apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_UPS2_I3out")[0].id, fromTime, toTime).then(function (rs) {
                        me.UPS2_I(Math.round(((me.UPS2_I1out() + me.UPS2_I2out() + Math.round(rs.result * 10) / 10) / 3)* 10) / 10)
                    })
                })
            });
            /*
            apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "DPMA_In")[0].id, fromTime, toTime).then(function (rs) {
                if (rs.result)me.DPMA_I(Math.round(rs.result * 10) / 10)
            });
            apis.averageByTimeRange(buff.find(buff.getByKey("ChannelsAll"), "code", "DPMB_In")[0].id, fromTime, toTime).then(function (rs) {
                if (rs.result)me.DPMB_I(Math.round(rs.result * 10) / 10)
            });*/
            var idtemp = buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_ENV_ServerTemp1")[0].id;
            apis.getHistories1(idtemp, fromTime, toTime, 1E3).then(function (r) {
                response = r.result.sort(function (a, b) {
                    return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
                });
                apis.averageByTimeRange(idtemp, fromTime, toTime).then(function (rs) {
                    if (rs.result)me.Temp(Math.round(rs.result * 10) / 10)
                });
                if (response != undefined)for (var i in response)me.Temps.push([Moment(response[i]["createdAt"]).format("MM/DD/YYYY hh:mm:ss"), response[i]["value"]]);
                var idhum = buff.find(buff.getByKey("ChannelsAll"), "code", "CMAS_ENV_ServerHum1")[0].id;
                apis.getHistories1(idhum, fromTime, toTime, 1E3).then(function (r) {
                    response = r.result.sort(function (a, b) {
                        return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0
                    });
                    apis.averageByTimeRange(idhum, fromTime, toTime).then(function (rs) {
                        if (rs.result)me.Hum(Math.round(rs.result * 10) / 10)
                    });
                    if (response != undefined)for (var i in response)me.Hums.push([Moment(response[i]["createdAt"]).format("MM/DD/YYYY hh:mm:ss"), response[i]["value"]]);
                    deferred.resolve()
                })
            });
            return deferred.promise
        }

        function renderChart() {
            $('#waitload').show();
            $('#offwaitload').click(function () {
                $('#waitload').hide();
            });
            getHistories().then(function () {
                var plot1 = $.jqplot("chart123", [me.Temps, me.Hums], {
                    title: "Environmental",
                    animate: true,
                    animateReplot: true,
                    seriesDefaults: {showMarker: false},
                    series: [{rendererOptions: {animation: {speed: 2E3}}}, {
                        yaxis: "y2axis",
                        rendererOptions: {animation: {speed: 2E3}}
                    }],
                    cursor: {show: true, tooltipLocation: "sw", zoom: false},
                    axesDefaults: {useSeriesColor: true},
                    axes: {
                        xaxis: {
                            renderer: $.jqplot.DateAxisRenderer,
                            labelRenderer: $.jqplot.CanvasAxisLabelRenderer,
                            tickRenderer: $.jqplot.CanvasAxisTickRenderer,
                            tickOptions: {angle: -30, formatString: "%#d/%#m/%Y"}
                        },
                        yaxis: {labelRenderer: $.jqplot.CanvasAxisLabelRenderer, label: "Temperature"},
                        y2axis: {labelRenderer: $.jqplot.CanvasAxisLabelRenderer, label: "Humidity"}
                    }
                });
                $('#waitload').hide();
            })
        }

        me.fromTime = kb.observable(report, "fromTime");
        me.toTime = kb.observable(report, "toTime");
        me.nld = ko.observable(0);
        me.csd = ko.observable(0);
        me.Temp = ko.observable(0);
        me.Hum = ko.observable(0);
        me.DPMA_kW = ko.observable(0);
        me.DPMB_kW = ko.observable(0);
        me.DPMA_kWh = ko.observable(0);
        me.DPMB_kWh = ko.observable(0);
        me.UPS1_kW = ko.observable(0);
        me.UPS1_kW1out = ko.observable(0);
        me.UPS1_kW2out = ko.observable(0);
        me.UPS1_kW3out = ko.observable(0);
        me.UPS2_kW = ko.observable(0);
        me.UPS2_kW1out = ko.observable(0);
        me.UPS2_kW2out = ko.observable(0);
        me.UPS2_kW3out = ko.observable(0);
        me.UPS3_kW = ko.observable(0);
        me.UPS3_kW1out = ko.observable(0);
        me.UPS3_kW2out = ko.observable(0);
        me.UPS3_kW3out = ko.observable(0);
        me.DPMA_I = ko.observable(0);
        me.DPMB_I = ko.observable(0);
        me.UPS1_I = ko.observable(0);
        me.UPS1_I1out = ko.observable(0);
        me.UPS1_I2out = ko.observable(0);
        me.UPS2_I = ko.observable(0);
        me.UPS2_I1out = ko.observable(0);
        me.UPS2_I2out = ko.observable(0);
        me.UPS3_I = ko.observable(0);
        me.UPS3_I1out = ko.observable(0);
        me.UPS3_I2out = ko.observable(0);
        me.Show = function () {
            dateRangeUpdated()
        }
    }
});