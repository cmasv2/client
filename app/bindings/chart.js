/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
(function(factory){if(typeof define==="function"&&define.amd)define(["knockout","jquery","moment","sparkline"],factory);else factory(window.ko,window.jQuery,window.moment)})(function(ko,$,moment,sparkline){ko.bindingHandlers.sparklinechart={init:function(element,valueAccessor,allBindingsAccessor){$(element).sparkline([10,8,5,7,4,4,1])},update:function(element,valueAccessor){}}});