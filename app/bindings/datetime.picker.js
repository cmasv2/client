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
    ko.bindingHandlers.datetimepicker = {
        init: function (element, valueAccessor, allBindingsAccessor) {

            $(element).datetimepicker().on("dp.change", function (ev) {
                var observable = valueAccessor();
                observable(ev.date);
            });
;
        },
        update: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
////            $(element).datetimepicker("setValue", value);
            $(element).data("DateTimePicker").setDate(value);
        }
    };
});
