/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "knockout", "plugins/router"], function (app, ko, router) {
    return function () {
        var me = this, apis = app.services.getService("apis");
        me.st = ko.observable(0);
        me.msg = ko.observable();
        function count(kb, k, v) {
            return app.buff.find(app.buff.getByKey(kb), k, v).length
        }

        function sa(d, v) {
            if (v == undefined)v = 1;
            me.st() ? "" : d.a != d.b ? me.st(1) : "";
            return v ? d.a != d.b ? "text-danger" : "text-success" : d.a != d.b ? "Error" : "Success"
        }

        function ca(a) {
            var msg = "";
            for (var i = 0; i < a.length; i++)msg += "<span class=" + sa(a[i]) + ">" + a[i].text + a[i].a + "/" + a[i].b + " (" + sa(a[i], 0) + ")</span><br/>";
            return msg
        }

        me.compositionComplete = function () {
            /*var inf = app.buff.getByKey("CONFIG_INFO");
            var msg = ca([{
                text: "Location: ",
                a: count("LocationAll", "type", "location"),
                b: inf.l
            }, {text: "System: ", a: count("LocationAll", "type", "system"), b: inf.s}, {
                text: "Unit: ",
                a: count("LocationAll", "type", "unit"),
                b: inf.u
            }, {text: "Component: ", a: count("LocationAll", "type", "component"), b: inf.co}, {
                text: "Channels: ",
                a: app.buff.getByKey("ChannelsAll").length,
                b: inf.ch
            }]);
            if (me.st())me.msg(msg); else router.navigate("page/dashboard")*/
			router.navigate("page/dashboard")
        };
        me.activate = function () {
        }
    }
});