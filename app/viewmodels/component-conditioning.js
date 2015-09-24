﻿/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "knockout", "plugins/router", "q", "css!../../lib/nqhlib/css/switch_ac.css"], function (app, ko, router, Q) {
    return function () {
        var me = this;
        var apis = app.services.getService("apis");
        var Soc = app.services.getService("socket");
        var buff = app.buff;
        var control = [
            {
            name: "AC 1",
            status: {
                "channelName": "CMAS_AC_ServerCtrl1",
                "type": "1",
                "_1": "<span class='text-success'><i class='fa fa-spinner fa-spin'></i> Running</span>",
                "_0": "<span class='text-danger'><i class='fa fa-stop'></i> Stop</span>"
            },
            control: {"channelName": "AC_ServerManCtrl1", "type": "5", "_0": "ON", "_1": "OFF"}
        }, {
            name: "AC 2",
            status: {
                "channelName": "CMAS_AC_ServerCtrl2",
                "type": "1",
                "_1": "<span class='text-success'><i class='fa fa-spinner fa-spin'></i> Running</span>",
                "_0": "<span class='text-danger'><i class='fa fa-stop'></i> Stop</span>"
            },
            control: {"channelName": "AC_ServerManCtrl2", "type": "5", "_0": "ON", "_1": "OFF"}
        }/*, {
            name: "AC 3",
            status: {
                "channelName": "AC_ServerCtrl3",
                "type": "1",
                "_1": "<span class='text-success'><i class='fa fa-spinner fa-spin'></i> Running</span>",
                "_0": "<span class='text-danger'><i class='fa fa-stop'></i> Stop</span>"
            },
            control: {"channelName": "AC_ServerMan3", "type": "5", "_0": "ON", "_1": "OFF"}
        }*/];
        var control1 = [
            {
                name: "AC 1",
                status: {
                    "channelName": "CMAS_AC_MeCtrl1",
                    "type": "1",
                    "_1": "<span class='text-success'><i class='fa fa-spinner fa-spin'></i> Running</span>",
                    "_0": "<span class='text-danger'><i class='fa fa-stop'></i> Stop</span>"
                },
                control: {"channelName": "AC_MeManCtrl1", "type": "5", "_0": "ON", "_1": "OFF"}
            }, {
                name: "AC 2",
                status: {
                    "channelName": "CMAS_AC_MeCtrl2",
                    "type": "1",
                    "_1": "<span class='text-success'><i class='fa fa-spinner fa-spin'></i> Running</span>",
                    "_0": "<span class='text-danger'><i class='fa fa-stop'></i> Stop</span>"
                },
                control: {"channelName": "AC_MeManCtrl2", "type": "5", "_0": "ON", "_1": "OFF"}
            }
        ];
        function Lis(c) {
            if (c.type == 5) {
                var r = inf(c.channelName);
                c.value = ko.observable(r.length ? r[0].value : 0);
                c.id = r.length ? r[0].id : 0
            } else {
                c.value = ko.observable("NaN");
                var cv = function (value) {
                    if (c.type != undefined) {
                        if (c.type == "1")c.value(c["_" + Math.round(value * 10) / 10]);
                        if (c.type == "4") {
                            var h = value / 3600;
                            var t = value % 3600;
                            var m = t / 60;
                            var s = t % 60;
                            c.value(Math.round(h) + ":" + Math.round(m) + ":" + s)
                        }
                        if (c.type == "6")c.value(c["_" + Math.round(value * 10) / 10])
                    } else if (value != undefined) {
                        c.type = 0;
                        c.value(Math.round(value * 10) / 10)
                    }
                };
                if (Soc.connected())if (c.channelName != "xxx")Soc.Lis(c.channelName, cv)
            }
        }

        function inf(c) {
            return buff.find(buff.getByKey("Controllables"), "channelName", c)
        }

        function Lis1(c) {
            Q.when(apis.ChannelDataByCode(c.channelName)).then(function (r) {
                c.value = r ? r.value : 0;
                c.id = r ? r.id : 0
            })
        }

        me.activate = function () {
            for (var i = 0; i < control.length; i++) {
                Lis(control[i].status);
                Lis(control[i].control)
            }
            me.control = ko.observableArray(control);
            var mode = [{"channelName": "AC_ServerManEnable", "type": "5"}];
            Lis(mode[0]);
            me.modevl = ko.observable("NaN");
            Q.when(apis.ChannelDataByCode("AC_ServerManEnable")).then(function (r) {
                me.modevl(r ? r.value : 0)
            });
            me.mode = ko.observableArray(mode);
            var info = inf("AC_ServerNumberStandby");
            me.ServerNumberStandby = info ? info[0] : " ";
            Lis1(me.ServerNumberStandby);
            info = inf("AC_ServerRotateTime");
            info[0].h = parseInt(info[0].value / 3600);
            var temp = parseInt(info[0].value % 3600);
            info[0].m = parseInt(temp / 60);
            info[0].s = parseInt(temp % 60);
            me.ServerRotateTime = info[0];
            var info = inf("AC_ServerTempHigh");
            me.ServerTempHigh = info ? info[0] : " ";
            var info = inf("AC_ServerTempReset");
            me.ServerTempReset = info ? info[0] : " ";
            Lis1(me.ServerTempReset)

            for (var i = 0; i < control1.length; i++) {
                Lis(control1[i].status);
                Lis(control1[i].control)
            }
            me.control1 = ko.observableArray(control1);
            var mode1 = [{"channelName": "AC_MeManEnable", "type": "5"}];
            Lis(mode1[0]);
            me.modevl1 = ko.observable("NaN");
            Q.when(apis.ChannelDataByCode("AC_MeManEnable")).then(function (r) {
                me.modevl1(r ? r.value : 0)
            });
            me.mode1 = ko.observableArray(mode1);

        };
        me.ValueControl = function (c) {
            if (confirm("Are you sure?")) {
                var a = c.value() * 1 ? 0 : 1;
                me.modevl(a);
                c.value(a);
                apis.saveControl(c).then(function (response) {
                }, function (e) {
                    app.showMessage("Save failed <br/>" + e.responseText, "Error", ["Yes"])
                })
            }
        };
        me.ValueControl1 = function (c) {
            if (confirm("Are you sure?")) {
                var a = c.control.value() * 1 ? 0 : 1;
                c.control.value(a);
                apis.saveControl(c.control).then(function (response) {
                }, function (e) {
                    app.showMessage("Save failed <br/>" + e.responseText, "Error", ["Yes"])
                })
            }
        };
        me.ValueControl2 = function (c) {
            console.log(c);
            if (confirm("Are you sure?")) {
                var a = c.value() * 1 ? 0 : 1;
                me.modevl1(a);
                c.value(a);
                apis.saveControl(c).then(function (response) {
                }, function (e) {
                    app.showMessage("Save failed <br/>" + e.responseText, "Error", ["Yes"])
                })
            }
        };
        me.ValueControl3 = function (c) {
            console.log(c);
            if (confirm("Are you sure?")) {
                var a = c.control.value() * 1 ? 0 : 1;
                c.control.value(a);
                apis.saveControl(c.control).then(function (response) {
                }, function (e) {
                    app.showMessage("Save failed <br/>" + e.responseText, "Error", ["Yes"])
                })
            }
        };
        me.saveConfig = function () {
            me.ServerRotateTime.value = me.ServerRotateTime.h * 3600 + me.ServerRotateTime.m * 60 + me.ServerRotateTime.s;
            console.log(me.ServerRotateTime);
            if (confirm("Are you sure?")) {
                apis.saveControl1(me.ServerNumberStandby).then(function (response) {
                }, function (e) {
                    app.showMessage("Save failed <br/>" + e.responseText, "Error", ["Yes"])
                });
                apis.saveControl1(me.ServerRotateTime).then(function (response) {
                }, function (e) {
                    app.showMessage("Save failed <br/>" + e.responseText, "Error", ["Yes"])
                });
                apis.saveControl1(me.ServerTempHigh).then(function (response) {
                }, function (e) {
                    app.showMessage("Save failed <br/>" + e.responseText, "Error", ["Yes"])
                });
                apis.saveControl1(me.ServerTempReset).then(function (response) {
                }, function (e) {
                    app.showMessage("Save failed <br/>" + e.responseText, "Error", ["Yes"])
                })
            }
        }
    }
});