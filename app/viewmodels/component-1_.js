/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', 'plugins/router', "knockout", "moment", "viewmodels/component-warning", "./../bindings/status-binding"], function (app, router, ko, Moment, ComponentWarning) {
        return function (cf) {
            var me = this, buff = app.buff;
            var Soc = app.services.getService("socket");
            me.comp1 = ko.observable();
            function Lis(c) {
                c.value = ko.observable('NaN');
                var cv = function (value) {
                    if (value != undefined)
                        c.value(Math.round(value * 10) / 10);
                }
                if (Soc.connected())
                    if (c.channelName != 'xxx')
                        Soc.Lis(c.channelName, cv);
            }

            function binds(s) {
                var _s = s;
                s = ko.observable(_s);
            }

            function inf(c) {
                return buff.find(buff.getByKey('ChannelsAll'), 'code', c);
            }

            for (var i = 0; i < cf[0].channels.length; i++) {
                var it = cf[0].channels[i];
                binds(it.status);
                var u = buff.find(buff.getByKey("LocationAll"), "code", it.code);
                it.name = u ? u[0].name : "NaN";
                Lis(it["progress"]);
                if (it["value1"] != undefined) {
                    var info = inf(it["value1"].channelName);
                    it["value1"].unit = info ? info[0].unit : "";
                    Lis(it["value1"]);
                }
                if (it["value2"] != undefined) {
                    var info = inf(it["value2"].channelName);
                    it["value2"].unit = info ? info[0].unit : "";
                    Lis(it["value2"]);
                }
            }
            me.activate = function () {
                /*me.comp1(new ComponentWarning(cf[0].warningSystem));*/
                cf[0].warningSystem = [];
            }
            me.viewdetail = function (c) {
                router.navigate("page/" + c.url + "/" + c.code);
            };
            me.cf = ko.observableArray(cf);
            me.view = function (c) {
                router.navigate("page/smoke/ITW_LL");
            };

        };
    }
);
