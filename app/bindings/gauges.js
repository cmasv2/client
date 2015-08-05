/**
 * Created by Tan on 9/29/14.
 */
// knockout.x-editable library v0.1.0
// (c) Brian Chance - https://github.com/brianchance/knockout-x-editable
// Licensed MIT
(function(factory) {
    if (typeof define === "function" && define.amd) {
        // AMD anonymous module
        define(["knockout", "jquery", "moment", "bootstrap-datepicker"], factory);
    } else {
        // No module loader (plain <script> tag) - put directly in global namespace
        factory(window.ko, window.jQuery, window.moment);
    }
})(function(ko, $, moment) {
    ko.bindingHandlers.gauges = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var ps = valueAccessor();
            $(element).gauge(ps, {
                min: 0,
                max: 100,
                unit: "%",
                color: "#d9534f",
                colorAlpha: 1,
                bgcolor: "#449d44",
                type: "halfcircle"
                });
        },
        update: function (element, valueAccessor) {
            var ps = valueAccessor();
            $(element).gauge(ps, {
                 min: 0,
                 max: 100,
                 unit: "%",
                 color: "#d9534f",
                 colorAlpha: 1,
                 bgcolor: "#449d44",
                 type: "halfcircle"
                 });
        }
    };
});
