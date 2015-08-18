/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
(function(factory){if(typeof define==="function"&&define.amd)define(["knockout","jquery","moment","bootstrap-datepicker"],factory);else factory(window.ko,window.jQuery,window.moment)})(function(ko,$,moment){ko.bindingHandlers.gauges={init:function(element,valueAccessor,allBindingsAccessor){var ps=valueAccessor();$(element).gauge(ps,{min:0,max:100,unit:"%",color:"#d9534f",colorAlpha:1,bgcolor:"#449d44",type:"halfcircle"})},update:function(element,valueAccessor){var ps=valueAccessor();$(element).gauge(ps, {min:0,max:100,unit:"%",color:"#d9534f",colorAlpha:1,bgcolor:"#449d44",type:"halfcircle"})}}});