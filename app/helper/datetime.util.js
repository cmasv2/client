/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define([moment], function () {
    return function () {
        var me = this;
        var DateUtil = me;
        var currentTimezoneOffset = (new Date).getTimezoneOffset();

        function toLocalTimeUnixTimestamp(unixTimeStamp) {
            return unixTimeStamp - currentTimezoneOffset * 60
        }

        DateUtil.toLocalTimeUnixTimestamp = toLocalTimeUnixTimestamp
    }
});