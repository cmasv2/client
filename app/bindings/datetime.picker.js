/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
(function(factory){if(typeof define==="function"&&define.amd)define(["knockout","jquery","moment","bootstrap-datepicker"],factory);else factory(window.ko,window.jQuery,window.moment)})(function(ko,$,moment){ko.bindingHandlers.datetimepicker={init:function(element,valueAccessor,allBindingsAccessor){$(element).datetimepicker().on("dp.change",function(ev){var observable=valueAccessor();observable(ev.date)})},update:function(element,valueAccessor){var value=ko.utils.unwrapObservable(valueAccessor());$(element).data("DateTimePicker").setDate(value)}}});