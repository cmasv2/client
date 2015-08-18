/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
// knockout.x-editable library v0.1.0
// (c) Brian Chance - https://github.com/brianchance/knockout-x-editable
// Licensed MIT
(function (factory) {
    if (typeof define === "function" && define.amd) {
        // AMD anonymous module
        define(["knockout", "jquery", "moment", "bootstrap-datepicker"], factory);
    } else {
        // No module loader (plain <script> tag) - put directly in global namespace
        factory(window.ko, window.jQuery, window.moment);
    }
})(function (ko, $, moment) {
    ko.bindingHandlers.bootstrapSwitch = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            var id = valueAccessor();
            $(element).bootstrapSwitch({
                handleWidth: 60,
                offColor: 'warning'
            }).on('switchChange.bootstrapSwitch', function (event, state) {
                $.ajax({
                    url: 'api/ChannelData/' + parseInt(id),
                    type: "put",
                    data: {"value": state ? 1 : 0},
                    success: function () {

                    }
                });
            });
        },
        update: function (element, valueAccessor) {
            $(element).bootstrapSwitch({handleWidth: 60, offColor: 'warning'});
        }
    };
});
