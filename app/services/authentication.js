/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app"], function (app) {
    return function () {
        var me = this;
        var currentUser = false;
        me.getcurrentUser = function () {
            return currentUser
        };
        me.cheklogin = function (use, pass) {
            currentUser = true
        };
        return this
    }
});
