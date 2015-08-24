/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "knockout", "bootstrap", "viewmodels/component-user", "viewmodels/component-alarm", "viewmodels/component-conditioning"], function (app, ko, bootstrap, componentUser, componentAlarm, componentConditioning) {
    return function () {
        var me = this;
        me.compoment1 = ko.observable();
        var buff = app.buff;
        me.activate = function () {
            me.Conditioning()
        };
        me.user = function () {
            me.compoment1(new componentUser)
        };
        me.Alarm = function () {
            me.compoment1(new componentAlarm)
        };
        me.Conditioning = function () {
            me.compoment1(new componentConditioning)
        }
    }
});