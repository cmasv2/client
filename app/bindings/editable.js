/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
(function (factory) {
    if (typeof define === "function" && define.amd)define(["knockout", "jquery"], factory); else factory(window.ko, window.jQuery)
})(function (ko, $) {
    ko.bindingHandlers.editable = {
        init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
            var $element = $(element), value = valueAccessor(), allBindings = allBindingsAccessor(), editableOptions = allBindings.editableOptions || {};
            editableOptions.value = ko.utils.unwrapObservable(value);
            if (!editableOptions.name)$.each(bindingContext.$data, function (k, v) {
                if (v == value) {
                    editableOptions.name = k;
                    return false
                }
            });
            if (!editableOptions.validate && value.isValid)editableOptions.validate = function (testValue) {
                var initalValue = value();
                value(testValue);
                var res = value.isValid() ? null : ko.utils.unwrapObservable(value.error);
                value(initalValue);
                return res
            };
            if ((editableOptions.type === "select" || editableOptions.type === "checklist" || editableOptions.type === "typeahead") && !editableOptions.source && editableOptions.options) {
                if (editableOptions.optionsCaption)editableOptions.prepend = editableOptions.optionsCaption;
                function applyToObject(object, predicate, defaultValue) {
                    var predicateType = typeof predicate;
                    if (predicateType == "function")return predicate(object); else if (predicateType == "string")return object[predicate]; else return defaultValue
                }

                editableOptions.source = function () {
                    return ko.utils.arrayMap(ko.utils.unwrapObservable(editableOptions.options), function (item) {
                        var optionValue = applyToObject(item, editableOptions.optionsValue, item);
                        var optionText = applyToObject(item, editableOptions.optionsText, optionText);
                        return {
                            value: ko.utils.unwrapObservable(optionValue),
                            text: ko.utils.unwrapObservable(optionText)
                        }
                    })
                }
            }
            if (editableOptions.visible && ko.isObservable(editableOptions.visible))editableOptions.toggle = "manual";
            var $editable = $element.editable(editableOptions);
            if (ko.isObservable(value))$editable.on("save.ko", function (e, params) {
                value(params.newValue)
            });
            if (editableOptions.save)$editable.on("save", editableOptions.save);
            ko.computed({
                read: function () {
                    var val = ko.utils.unwrapObservable(valueAccessor());
                    if (val === null)val = "";
                    $editable.editable("setValue", val, true)
                }, owner: this, disposeWhenNodeIsRemoved: element
            });
            if (editableOptions.visible && ko.isObservable(editableOptions.visible)) {
                ko.computed({
                    read: function () {
                        var val = ko.utils.unwrapObservable(editableOptions.visible());
                        if (val)$editable.editable("show")
                    }, owner: this, disposeWhenNodeIsRemoved: element
                });
                $editable.on("hidden.ko", function (e, params) {
                    editableOptions.visible(false)
                })
            }
        }
    }
});