/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app","knockout","moment"],function(app,ko,Moment){return function(c){var me=this,buff=app.buff;me.cf=ko.observableArray([]);function AlarmAck(a){}function pusha(a){if(a!=undefined)if(a.id!=undefined)me.cf.push(a)}me.activate=function(){for(var i=0;i<c.length;i++)pusha(c[i].alarmWatcher)};me.channelname=function(c){var a=buff.find(buff.getByKey("ChannelsAll"),"id",c);return a[0].name!=undefined?a[0].name:"NaN"};me.Moment=Moment;me.AlarmAck=AlarmAck;app.on("update-alarm",function(data){})}});