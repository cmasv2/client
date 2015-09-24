/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["events", "moment"], function (Events, Moment) {
    Events.includeIn(clock);
    setInterval(function () {
        clock.trigger('time:changed', moment());
    }, 1000);
    return clock;
})