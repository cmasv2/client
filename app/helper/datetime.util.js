/**
 * Created by Tan on 10/4/14.
 */
define([moment], function () {
    return function () {
        var me = this;
        var DateUtil = me;
        var currentTimezoneOffset = new Date().getTimezoneOffset();

        function toLocalTimeUnixTimestamp(unixTimeStamp) {
            return unixTimeStamp - (currentTimezoneOffset * 60);
        }

        DateUtil.toLocalTimeUnixTimestamp = toLocalTimeUnixTimestamp;
    }
})
