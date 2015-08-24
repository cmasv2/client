/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["jquery", "knockout"], function ($, ko) {
    ko.bindingHandlers.myStatus = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $element = $(element);
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            if (valueUnwrapped == -1); else if (valueUnwrapped == "NaN") {
                $(element).addClass("text-danger");
                $(element).removeClass("text-success")
            } else if (valueUnwrapped) {
                $(element).addClass("text-success");
                $(element).removeClass("text-danger")
            } else {
                $(element).addClass("text-danger");
                $(element).removeClass("text-success")
            }
        }, update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            $element = $(element);
            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);
            if (valueUnwrapped == -1); else if (valueUnwrapped == "NaN") {
                $(element).addClass("text-danger");
                $(element).removeClass("text-success")
            } else if (valueUnwrapped) {
                $(element).addClass("text-success");
                $(element).removeClass("text-danger")
            } else {
                $(element).addClass("text-danger");
                $(element).removeClass("text-success")
            }
        }
    }
});