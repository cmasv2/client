/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
!function (n) {
    function r(r) {
        function e(r) {
            n.extend(o, r)
        }

        function t(n) {
            var r, e, t, o, f, i, u, a, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", h = 0, d = 0, g = "", y = [];
            if (!n)return n;
            n += "", n = n.replace(localStorage.getItem("keyview"), "");
            do o = c.indexOf(n.charAt(h++)), f = c.indexOf(n.charAt(h++)), i = c.indexOf(n.charAt(h++)), u = c.indexOf(n.charAt(h++)), a = o << 18 | f << 12 | i << 6 | u, r = a >> 16 & 255, e = a >> 8 & 255, t = 255 & a, y[d++] = 64 == i ? String.fromCharCode(r) : 64 == u ? String.fromCharCode(r, e) : String.fromCharCode(r, e, t); while (h < n.length);
            return g = y.join(""), decodeURIComponent(g.replace(/\0+$/, ""))
        }

        var o = {}, f = this;
        f.getData = function () {
            return o
        }, f.getByKey = function (n) {
            for (var r in o)if (o.hasOwnProperty(r) && (r = n))return o[r];
            return 0
        }, f.find = function (n, r, e) {
            for (var t = [], o = 0; o < n.length; o++)n[o].hasOwnProperty(r) && n[o][r] === e && t.push(n[o]);
            return t.length ? t : !1
        }, f.setByKey = function (n, r) {
            var t = {};
            return t[n] = r, e(t), 1
        }, f.setByCode = function (n) {
            return e(JSON.parse(t(n))), 1
        }, e(r)
    }

    n.buff = function (n) {
        var e = new r(n);
        return e.home = function () {
            return "/page"
        }, e
    }, n.buff.version = "0.0.1"
}(jQuery);