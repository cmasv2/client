/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app","knockout","bootstrap","viewmodels/component-2","viewmodels/component-5","viewmodels/component-detail-system"],function(app,ko,bootstrap,Component2,Component5,ComponentDetailSystem){return function(){var me=this,buff=app.buff;me.comp1=ko.observable();me.comp2=ko.observable();function getBuffer(key){if(!buff)return false;else return buff.getByKey(key)}function initbuff(id,sub){if(sub==undefined)sub="";var d=getBuffer(id+sub)?getBuffer(id+sub):[{name:"",description:"",images:""}];var l=buff.find(getBuffer("LocationAll"),"code",id);d[0].name=l?l[0].name:d[0].name;d[0].description=l?l[0].description:d[0].description;d[0].images=l?"images/"+l[0].images:d[0].images;d[0].id=l?l[0].id:d[0].id;return d}me.activate=function(sys,id,idc){var up=buff.find(buff.getByKey("LocationAll"),"code",sys);me.comp1(new Component2([{name:up?up[0].name:"NaN","url":"detail","code":sys,id:"",icon:"fa fa-tasks",channels:getBuffer(sys)}]));id!=undefined?me.comp2(new Component5(initbuff(id,""),id,idc)): me.comp2(new ComponentDetailSystem(initbuff(sys,"_DETAIL")))}}});

