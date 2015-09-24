/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
(function(factory){if(typeof define==="function"&&define.amd)define(["knockout","jquery","moment","jstree"],factory);else factory(window.ko,window.jQuery,window.moment)})(function(ko,$,moment){ko.bindingHandlers.myTree={init:function(element,valueAccessor,allBindingsAccessor){$(element).on("changed.jstree",function(e,data){window.location.href="/#page/explorer"+data.instance.get_node(data.selected[0]).original.url}).jstree({"plugins":["wholerow"],"core":{"data":valueAccessor()}})},update:function(element, valueAccessor){}}});