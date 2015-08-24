/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "plugins/router", "knockout"], function (app, router, ko) {
    return function (cf) {
        var me = this;
        var Soc = app.services.getService("socket");

        function Lis(c) {
            c.value = ko.observable(0);
            var cv = function (value) {
                if (value != undefined)c.value(Math.round(value * 10) / 10)
            };
            if (Soc.connected())if (c.channelName != "xxx")Soc.Lis(c.channelName, cv)
        }

        function binds(status) {
            var _status = status;
            status = ko.observable(_status)
        }

        me.activate = function () {

        };
    }
});