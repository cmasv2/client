/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "knockout", "knockback", "plugins/router", "../models/report", "jquery", "q", "moment", "jqplot", "pieRenderer", "../bindings/chart", "../bindings/datetime.picker", "bootstrap-datepicker", "css!../../lib/nqhlib/css/jquery.jqplot.min.css"], function (app, ko, kb, router, Report, $, Q, Moment) {
    return function () {
        var me = this, apis = app.services.getService("apis"), buff = app.buff;
        var report = new Report({
            fromTime: moment().subtract(1, "day").format(app.CMASConfig.DateTimeFormat.GLOBAL),
            toTime: moment().format(app.CMASConfig.DateTimeFormat.GLOBAL)
        });

        function sort(arr) {
            return arr.sort(function (a, b) {
                a = new Date(a.alarmAt);
                b = new Date(b.alarmAt);
                return a > b ? 1 : a < b ? -1 : 0
            })
        }

        function getAlarmlog() {
            var deferred = Q.defer();
            var data = [];
            var fromTime = moment(report.get("fromTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            var toTime = moment(report.get("toTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
            apis.getAlarmLog(1, fromTime, toTime).then(function (r) {
                me.count(r.result.length);
                me.AlarmLog(sort(r.result));
                apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "ITW_UP")[0].id, fromTime, toTime).then(function (r) {
                    me.ups(r.result.length);
                    apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "ITW_PW")[0].id, fromTime, toTime).then(function (r) {
                        me.dbit(r.result.length);
                        apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "ITW_AI")[0].id, fromTime, toTime).then(function (r) {
                            me.ai(r.result.length);
                            apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "ITW_LL")[0].id, fromTime, toTime).then(function (r) {
                                me.rrn(r.result.length);
                                apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "ITW_FF")[0].id, fromTime, toTime).then(function (r) {
                                    me.fire(r.result.length);
                                    apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "ITW_EV")[0].id, fromTime, toTime).then(function (r) {
                                        me.env(r.result.length);
                                        deferred.resolve()
                                    })
                                })
                            })
                        })
                    })
                })
            });
            return deferred.promise
        }

        function dateRangeUpdated() {
            getAlarmlog().then(function () {
                var data = [["H\u1ec7 th\u1ed1ng T\u1ee7 \u0111i\u1ec7n ph\u00e2n ph\u1ed1i", me.dbit()], ["H\u1ec7 th\u1ed1ng UPS", me.ups()], ["H\u1ec7 th\u1ed1ng \u0110i\u1ec1u h\u00f2a", me.ai()], ["H\u1ec7 th\u1ed1ng Ph\u00e1t hi\u1ec7n n\u01b0\u1edbc r\u00f2 r\u1ec9", me.rrn()], ["H\u1ec7 th\u1ed1ng B\u00e1o-d\u1eadp ch\u00e1y", me.fire()], ["H\u1ec7 th\u1ed1ng M\u00f4i tr\u01b0\u1eddng", me.env()]];
                var plot1 = $.jqplot("chart1", [data], {
                    seriesDefaults: {
                        renderer: $.jqplot.PieRenderer,
                        rendererOptions: {showDataLabels: true}
                    }, legend: {show: true, location: "e"}
                })
            })
        }

        function initdata() {
        }

        function gettext(id) {
            return buff.find(buff.getByKey("AlarmWatchersAll"), "id", id)[0].msg.alarm
        }

        me.show = initdata;
        me.fromTime = kb.observable(report, "fromTime");
        me.toTime = kb.observable(report, "toTime");
        me.count = ko.observable(0);
        me.dbit = ko.observable(0);
        me.ups = ko.observable(0);
        me.ai = ko.observable(0);
        me.rrn = ko.observable(0);
        me.fire = ko.observable(0);
        me.env = ko.observable(0);
        me.AlarmLog = ko.observableArray([]);
        me.Moment = Moment;
        me.getText = gettext;
        me.Show = function () {
            dateRangeUpdated()
        }
    }
});