/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', "knockout", "bootstrap", "viewmodels/component-detail-system", "viewmodels/component-4", "viewmodels/component-warning"],
    function (app, ko, bootstrap, ComponentDetailSystem, Component4, ComponentWarning) {
        return function () {
            var me = this, buff = app.buff;
            me.comp1 = ko.observable();
            me.comp2 = ko.observable();
            me.comp3 = ko.observable();
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
                d[0].name = l[0].name ? l[0].name : d[0].name;
                d[0].description = l[0].description ? l[0].description : d[0].description;
                d[0].images = l[0].images ? "images/" + l[0].images : d[0].images;
                return d;
            }

            me.activate = function (sys) {
                me.comp1(new ComponentDetailSystem(initbuff(sys, "_DETAIL")));
                var Alarms = [];
                me.comp2(new Component4(Alarms));
            };
        };
    }
);

