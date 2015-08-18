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
        define(["knockout", "jquery", "moment", "jstree"], factory);
    } else {
        // No module loader (plain <script> tag) - put directly in global namespace
        factory(window.ko, window.jQuery, window.moment);
    }
})(function (ko, $, moment) {
    ko.bindingHandlers.myTree = {
        init: function (element, valueAccessor, allBindingsAccessor) {
            $(element)
                .on('changed.jstree', function (e, data) {
                    window.location.href = '/#page/explorer' + data.instance.get_node(data.selected[0]).original.url;
                }).jstree({'plugins': ["wholerow"], 'core': {'data': valueAccessor()}});

        },
        update: function (element, valueAccessor) {

        }
    };
});
