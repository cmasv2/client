/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "knockout", "plugins/router", "jquery", "q", "./../data/configGui", "css!../../css/login.css"], function (app, ko, router, $, Q, conF) {
    return function () {
        var me = this, conf = conF(), a = app.services.getService("apis");
        app.buff = $.buff(conf.info);
        localStorage.setItem("keyview", conf.key);
        localStorage.setItem("keyview", conf.key);
        me.username = ko.observable("admin@cmas.com");
        me.password = ko.observable("admin");
        me.showok = ko.observable(0);
        me.act = ko.observable(1);
        me.showError = ko.computed(function () {
            var msg = "";
            if (!me.password())msg = "Enter your password";
            if (!me.username())msg = "Enter your Username";
            return msg
        });
        function init(u, r) {
            $("#initcmasld").show();
            $("#showdetails").click(function () {
                if ($("#showdetails").text() == "Show details") {
                    $("#showdetails").text("Hide details");
                    $("#detailoading").show()
                } else {
                    $("#showdetails").text("Show details");
                    $("#detailoading").hide()
                }
            });
            $("#detailoading").append("<p>Init cmas buffer</p>");
            var ch;
            var inf = app.buff.getByKey("CONFIG_INFO");
            a.AlarmWatchersAll().then(function (re) {
                app.buff.setByKey("AlarmWatchers", re)
            });
            a.GetLocations().then(function (re) {
                $("#detailoading").append("<p>Buffer : set Locations (" + inf.l + "/" + app.buff.find(re, "type", "location").length + ")</p>");
                $("#detailoading").append("<p>Buffer : set System (" + inf.s + "/" + app.buff.find(re, "type", "system").length + ")</p>");
                $("#detailoading").append("<p>Buffer : set Unit (" + inf.u + "/" + app.buff.find(re, "type", "unit").length + ")</p>");
                $("#detailoading").append("<p>Buffer : set Component (" + inf.co + "/" + app.buff.find(re, "type", "component").length + ")</p>");
                app.buff.setByKey("LocationAll", re)
            }, function (e) {
                app.showMessage("Url: api/Locations?access_token=" + apis.access_token() + "<br/>" + e.responseText, "Error", ["Yes"])
            });
            Q.when(a.ChannelsAll()).then(function (ch) {
                app.buff.setByKey("ChannelsAll", ch)
            });
            a.Controllables().then(function (ch) {
                app.buff.setByKey("Controllables", ch)
            });
            a.CMASUsers(u).then(function (ch) {
                app.buff.setByKey("infoUser", ch)
            });
            a.AlarmWatchers().then(function (ch) {
                app.buff.setByKey("AlarmWatchersAll", ch)
            });
            a.countchannel().then(function (r) {
                $("#detailoading").append("<p>Buffer : set channels (" + inf.ch + "/" + r.count + ")</p>")
            });
            a.EscalationProfiles().then(function (e) {
                var arr = [];
                app.buff.setByKey("EscalationProfiles", e);
                Q.when(e.forEach(function (i) {
                    arr.push(i.displayName)
                })).then(function () {
                    app.buff.setByKey("opEscalationProfiles", arr)
                })
            });
            $("#detailoading").append("<p>Build tree location </p>");
            Q.when(a.getsub1(0)).then(function (location) {
                app.buff.setByKey("Location", location);
                $("#detailoading").append("<p>Buffer : set info user </p>");
                setTimeout(function () {
                    r(app.buff.home())
                }, 4E3)
            })
        }

        function login() {
            if (me.act()) {
                me.act(0);
                a.login({"email": me.username(), "password": me.password()}).then(function (r) {
                    localStorage.setItem("swagger_accessToken", r.id);
                    me.showok("login successful");
                    init(r, function (val) {
                        router.navigate(val)
                    })
                }, function (e) {
                    me.act(1);
                    app.showMessage("login failed ", "Error", ["Yes"])
                })
            }
        }

        me.activate = function () {
            localStorage.setItem("swagger_accessToken", "");
            for (var i = 0; i < conf.configView.length; i++) {
                var val = conf.configView[i];
                app.buff.setByCode(conf.configView[i].value)
            }
            for (var i = 0; i < conf.configView.length; i++) {
                var val = conf.configView[i];
                app.buff.setByKey(conf.configView[i].value)
            }
        };
        me.login = login
    }
});

