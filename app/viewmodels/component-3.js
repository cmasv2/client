﻿/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "plugins/router", "knockout", "gauges", "./../bindings/gauges", "./../bindings/status-binding"], function (app, router, ko) {
    return function (cf) {
        var channels = [], me = this, buff = app.buff, Soc = app.services.getService("socket");

        function pr(it, col) {
            var r;
            for (var i = 0, j = it.length; i < j; i++) {
                if (i % col === 0) {
                    if (r)channels.push(r);
                    r = []
                }
                r.push(it[i])
            }
            if (r)channels.push(r)
        }

        function Lis(c) {
            c.value = ko.observable("NaN");
            var cv = function (value) {
                if (value != undefined)c.value(Math.round(value * 10) / 10)
            };
            if (Soc.connected())if (c.channelName != "xxx")Soc.Lis(c.channelName, cv)
        }

        function binds(status) {
            var _status = status;
            status = ko.observable(_status)
        }

        function inf(c) {
            return buff.find(buff.getByKey("ChannelsAll"), "code", c)
        }

        me.activate = function () {
            pr(cf[0].channels, 2);
            cf[0].channels = channels;
            for (var i = 0; i < cf[0].channels.length; i++) {
                var it = cf[0].channels[i];
                binds(it[0].status);
                var u = buff.find(buff.getByKey("LocationAll"), "code", it[0].code);
                it[0].name = u ? u[0].name : "NaN";
                var info = inf(it[0]["value1"].channelName);
                it[0]["value1"].unit = info ? info[0].unit : "";
                Lis(it[0]["value1"]);
                if (it[1]) {
                    binds(it[1].status);
                    var u = buff.find(buff.getByKey("LocationAll"), "code", it[1].code);
                    it[1].name = u ? u[0].name : "NaN";
                    var info = inf(it[1]["value1"].channelName);
                    it[1]["value1"].unit = info ? info[0].unit : "";
                    Lis(it[1]["value1"])
                }
            }
        };
        me.viewdetail = function (c) {
            c.code != undefined ? router.navigate("page/" + c.url + "/" + c.code) : router.navigate("page/detail/ITW_PW")
        };
        me.cf = ko.observableArray(cf)
    }
});