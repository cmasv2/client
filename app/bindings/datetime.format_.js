/**
 Create: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["jquery", "knockout"], function ($, ko) {
    ko.bindingHandlers.DateFormat = {
        init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here
            $element = $(element);

            // First get the latest data that we're bound to
            var value = valueAccessor();

            // Next, whether or not the supplied model property is observable, get its current value
            var valueUnwrapped = ko.unwrap(value);

            // Now manipulate the DOM element
            if (valueUnwrapped == -1) {
            }
            else if (valueUnwrapped == 'NaN') {
                $(element).addClass("text-danger");
                $(element).removeClass("text-success");
            }
            else if (valueUnwrapped) {
                $(element).addClass("text-success");
                $(element).removeClass("text-danger");
            } else {
                $(element).addClass("text-danger");
                $(element).removeClass("text-success");
            }
        },
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.

            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here
            $element = $(element);

            // First get the latest data that we're bound to
            var value = valueAccessor();

            // Next, whether or not the supplied model property is observable, get its current value
            var valueUnwrapped = ko.unwrap(value);

            // Now manipulate the DOM element
            if (valueUnwrapped == -1) {
            }
            else if (valueUnwrapped == 'NaN') {
                $(element).addClass("text-danger");
                $(element).removeClass("text-success");
            }
            else if (valueUnwrapped) {
                $(element).addClass("text-success");
                $(element).removeClass("text-danger");
            } else {
                $(element).addClass("text-danger");
                $(element).removeClass("text-success");
            }
        }
    };
});