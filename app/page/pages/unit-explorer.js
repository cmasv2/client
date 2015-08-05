define(['durandal/app', "knockout", "bootstrap", "viewmodels/component-5", "viewmodels/component-detail-system",
"../../bindings/tree-binding","css!../../../lib/jstree/dist/themes/default/style.min.css"],
    function (app, ko, bootstrap, Component5, ComponentDetailSystem) {
    return function () {
        var me = this,UnitExplorerdViewModel = this, buff = app.buff;
        var apis = app.services.getService("apis");
        UnitExplorerdViewModel.compoment1 = ko.observable();
        UnitExplorerdViewModel.compoment2 = ko.observable();
        function getBuffer(key) {
            if (!buff) {
                return false;
            }
            else {
                return buff.getByKey(key);
            }
        }
        var config1 = [];
        if(!getBuffer('Location')){
            config1 = apis.getsub1(0);
            buff.setByKey('Location',config1);
        }
        else{
            config1 = getBuffer('Location');
        }
        function SelectTree(o,x,y){
            for(var p in o){
                if(o[p].code == x||o[p].code == y){o[p].state.selected = o[p].state.opened = 1;}
                else{o[p].state.selected = o[p].state.opened = 0;}
                SelectTree(o[p].children,x,y);
            }
            return o;
        }
        function initbuff(id,sub){
            if(sub == undefined) sub ="";
            var d = getBuffer(id + sub)?getBuffer(id + sub):[{name:'',description:'',images:''}];
            var l = buff.find(getBuffer('LocationAll'), 'code', id);
            d[0].name = l?l[0].name:d[0].name;
            d[0].description = l?l[0].description:d[0].description;
            d[0].images = l?"images/"+l[0].images:d[0].images;
            d[0].id = l?l[0].id:d[0].id;
            return d;
        }
        UnitExplorerdViewModel.activate = function (sys, id) {
            UnitExplorerdViewModel.config1 = SelectTree(config1,sys,id);
            if (sys != undefined) {
                id != undefined?me.compoment2(new Component5(initbuff(id,""))):me.compoment2(new ComponentDetailSystem(initbuff(sys,"_DETAIL")));
            }
            else {
                me.compoment2(new ComponentDetailSystem(initbuff("DAR","_DETAIL")));
            }
        };

    };
});