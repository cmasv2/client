/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["helper/viewportSize"],function(){return function(){var VIEWPORT_WIDTH=viewportSize.getWidth();var VIEWPORT_HEIGHT=viewportSize.getHeight();this.getViewSize=function(element){var result={};var height=0,width=0;var $element=$("#"+element);var offset=$element.offset();height=$element.height();width=height/3*4;result.width=width;result.height=height;return result};this.getElementSize=function(element){var result={};result.width=$("#"+element).width();result.height=$("#"+element).height();return result};this.getViewPortHeight=function(){return VIEWPORT_HEIGHT}}});