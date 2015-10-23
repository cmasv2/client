/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "plugins/router", "knockout", "./../bindings/status-binding"], function(app, router, ko) {
    return function(cf) {
        var me = this,
            buff = app.buff;
        var Soc = app.services.getService("socket");

        function Lis(c) {
            if (c.type != undefined && c.type == "3") {
                c.value = ko.observable(c.text);
                c.unit = ""
            } else c.value = ko.observable("NaN");
            var cv = function(value) {
                if (c.type != undefined) {
                    if (c.type == "1") c.value(value ? c._1 : c._0);
                    if (c.type == "2") c.value(c.text + "<b>" + number_format(Math.round(value * 10) / 10)) + "</b>";
                    if (c.type == "3")
                        if (value != undefined) c.value(c.text1);
                    if (c.type == "4") {
                        var t = value % 3600;
                        var h = (value - t) / 3600;
                        var m = (t - t % 60) / 60;
                        c.value(Math.round(h) + ":" + Math.round(m))
                    }
                } else if (value != undefined) c.value(Math.round(value * 10) / 10)
            };
            if (Soc.connected())
                if (c.channelName != "xxx") Soc.Lis(c.channelName, cv)
        }

        function binds(s) {
            var _s = s;
            s = ko.observable(_s)
        }

        function inf(c) {
            return buff.find(buff.getByKey("ChannelsAll"), "code", c)
        }

        function number_format(number, decimals, dec_point, thousands_sep) {
            var n = number,
                prec = decimals;
            var toFixedFix = function(n, prec) {
                var k = Math.pow(10, prec);
                return (Math.round(n * k) / k).toString()
            };
            n = !isFinite(+n) ? 0 : +n;
            prec = !isFinite(+prec) ? 0 : Math.abs(prec);
            var sep = typeof thousands_sep === "undefined" ? "," : thousands_sep;
            var dec = typeof dec_point === "undefined" ? "." : dec_point;
            var s = prec > 0 ? toFixedFix(n, prec) : toFixedFix(Math.round(n), prec);
            var abs = toFixedFix(Math.abs(n), prec);
            var _, i;
            if (abs >= 1E3) {
                _ = abs.split(/\D/);
                i = _[0].length % 3 || 3;
                _[0] = s.slice(0, i + (n < 0)) + _[0].slice(i).replace(/(\d{3})/g, sep + "$1");
                s = _.join(dec)
            } else s = s.replace(".", dec);
            var decPos = s.indexOf(dec);
            if (prec >= 1 && decPos !== -1 && s.length - decPos - 1 < prec) s += (new Array(prec - (s.length - decPos - 1))).join(0) + "0";
            else if (prec >= 1 && decPos === -1) s += dec + (new Array(prec)).join(0) + "0";
            return s
        }
        for (var i = 0; i < cf[0].channels.length; i++) {
            var it = cf[0].channels[i];
            binds(it.status);
            var u = buff.find(buff.getByKey("LocationAll"), "code", it.code);
            it.name = u ? u[0].name : "NaN";
            if (it["value"] != undefined)
                for (j = 0; j < it["value"].length; j++) {
                    var info = inf(it["value"][j].channelName);
                    it["value"][j].unit = info ? info[0].unit : " ";
                    Lis(it["value"][j])
                } else it["value"] = 0
        }
        me.viewdetail = function(c) {
            router.navigate("page/" + c.url + "/" + c.code)
        };
        me.channelname = function(c) {
            var a = buff.find(buff.getByKey("ChannelsAll"), "code", c);
            return a[0] != undefined ? a[0].name : "NaN"
        };
        me.cf = ko.observableArray(cf)
    }
});