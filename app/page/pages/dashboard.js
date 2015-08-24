/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', "knockout", "bootstrap", "jquery", "plugins/router", "css!../../../../css/dashboard.css"], function (app, ko, bootstrap, $, router) {
    return function () {
        var me = this,
            apis = app.services.getService("apis"),
            Soc = app.services.getService("socket"),
            buff = app.buff;
        me.comp1 = ko.observable();
        function Lis(c) {
            if (c.type == 5) {
                c.value = ko.observable('NaN');
                Q.when(apis.ChannelDataByCode(c.channelName)).then(function (r) {
                    c.value(r ? r.value : 0);
                    c.id = r ? r.id : 0;
                });
            }
            else {
                c.value = ko.observable('NaN');
                var cv = function (value) {
                    if (c.type != undefined) {
                        if (c.type == "1") {
                            c.value(c["_" + (Math.round(value * 10) / 10)]);
                        }
                        else if (c.type == "4") {
                            var t = value % 3600;
                            var h = (value - t) / 3600;
                            var m = (t - (t % 60)) / 60;
                            c.value(Math.round(h) + ":" + Math.round(m));
                        }
                        else if (c.type == "6") {
                            c.value(c["_" + (Math.round(value * 10) / 10)]);
                        }
                        else {
                            c.type = 0;
                            c.value(Math.round(value * 10) / 10);
                        }
                    }
                    else {
                        c.type = 0;
                        c.value(Math.round(value * 10) / 10);
                    }
                }
                if (Soc.connected())
                    if (c.channelName != 'xxx')
                        Soc.Lis(c.channelName, cv);
            }
        }

        function inf(c) {
            return buff.find(buff.getByKey('ChannelsAll'), 'code', c);
        }

        me.compositionComplete = function () {
            setTimeout(function () {
                $('#initcmasld').hide();
            }, 2000);
        };
        function getBuffer(key) {
            if (!buff) {
                return false;
            }
            else {
                return buff.getByKey(key);
            }
        }

        function initbuff(id, sub) {
            if (sub == undefined) sub = "";
            var d = getBuffer(id + sub) ? getBuffer(id + sub) : [{name: '', description: '', images: ''}];
            var l = buff.find(getBuffer('LocationAll'), 'code', id);
            d[0].name = l ? l[0].name : d[0].name;
            d[0].description = l ? l[0].description : d[0].description;
            d[0].images = l ? "images/" + l[0].images : d[0].images;
            d[0].id = l ? l[0].id : d[0].id;
            d[0].unit = d ? d[0].unit : 0;
            return d;
        }

        me.activate = function () {
            router.navigate('/page/explorer');
        };
    };
});