/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', "knockout", "knockback", 'plugins/router', "../models/report","jquery",'q',"moment","jqplot","pieRenderer","../bindings/chart","../bindings/datetime.picker", "bootstrap-datepicker","css!../../lib/nqhlib/css/jquery.jqplot.min.css"],
    function (app, ko, kb, router, Report,$,Q,Moment) {
        return function () {
            var me = this,apis = app.services.getService("apis"), buff = app.buff;
            var report = new Report({
                fromTime: moment().subtract(1, "day").format(app.CMASConfig.DateTimeFormat.GLOBAL),
                toTime: moment().format(app.CMASConfig.DateTimeFormat.GLOBAL)
            });
            function sort(arr){
                return arr.sort(function(a, b) {
                    a = new Date(a.alarmAt);
                    b = new Date(b.alarmAt);
                    return a > b ? 1 : a < b ? -1 : 0;
                });
            }
            function getAlarmlog(){
                var deferred = Q.defer();
                var data = [];
                var fromTime = moment(report.get("fromTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
                var toTime = moment(report.get("toTime")).format("YYYY-MM-DDTHH:mm:ss.SSSZ");
                apis.getAlarmLog(1,fromTime,toTime).then(function(r){
                    me.count(r.result.length);
                    me.AlarmLog(sort(r.result));
                    apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "CMAS_UP")[0].id,fromTime,toTime).then(function(r){
                        me.ups(r.result.length);
                        apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "CMAS_PW")[0].id,fromTime,toTime).then(function(r){
                            me.dbit(r.result.length);
                            apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "CMAS_AI")[0].id,fromTime,toTime).then(function(r){
                                me.ai(r.result.length);
                                apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "CMAS_LL")[0].id,fromTime,toTime).then(function(r){
                                    me.rrn(r.result.length);
                                    apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "CMAS_FF")[0].id,fromTime,toTime).then(function(r){
                                        me.fire(r.result.length);
                                        apis.getAlarmLog(buff.find(buff.getByKey("LocationAll"), "code", "CMAS_EV")[0].id,fromTime,toTime).then(function(r){
                                            me.env(r.result.length);
                                            deferred.resolve();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                return deferred.promise;
            }
            function dateRangeUpdated() {
                getAlarmlog().then(function() {
                    var data = [
                        ['Hệ thống Tủ điện phân phối', me.dbit()],
                        ['Hệ thống UPS',me.ups()],
                        ['Hệ thống Điều hòa', me.ai()],
                        ['Hệ thống Phát hiện nước rò rỉ', me.rrn()],
                        ['Hệ thống Báo-dập cháy', me.fire()],
                        ['Hệ thống Môi trường', me.env()]
                    ];
                    var plot1 = $.jqplot('chart1', [data],
                        {
                            seriesDefaults: {
                                // Make this a pie chart.
                                renderer: $.jqplot.PieRenderer,
                                rendererOptions: {
                                    // Put data labels on the pie slices.
                                    // By default, labels show the percentage of the slice.
                                    showDataLabels: true
                                }
                            },
                            legend: {show: true, location: 'e'}
                        }
                    );
                });
                /*

                 $('#chart1').sparkline([,,,,,], {
                 type: 'pie',
                 width: '500 px',
                 height: '500 px',
                 sliceColors: ['#3366cc','#dc3912','#ff9900','#109618','#66aa00','#dd4477','#0099c6','#99f099 ']});
                 });
                 */

            }
            function initdata() {
            }
            function gettext(id){
                return buff.find(buff.getByKey('AlarmWatchersAll'), 'id', id)[0].msg.alarm;
            }
            me.show = initdata;
            me.fromTime = kb.observable(report, "fromTime");
            me.toTime = kb.observable(report, "toTime");
            //me.fromTime.subscribe(dateRangeUpdated);
            //me.toTime.subscribe(dateRangeUpdated);
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
                dateRangeUpdated();
            };
        };
    }
);
