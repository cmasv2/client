define(['durandal/app', "knockout", "bootstrap", "viewmodels/component-2",
    "viewmodels/component-5", "viewmodels/component-4", "viewmodels/component-detail-system"],
    function (app, ko, bootstrap, Component2, Component5, Component4, ComponentDetailSystem) {
    return function () {
        var me = this,
            buff = app.buff;
        me.compoment1 = ko.observable();
        me.compoment2 = ko.observable();
        me.compoment3 = ko.observable();
        function getBuffer(key) {
            if (!buff) {
                return false;
            }
            else {
                return buff.getByKey(key);
            }
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
        me.activate = function (sys, id) {
            var config = [
                {
                    name: "",
                    id: "",
                    icon: "fa fa-tasks",
                    channels: getBuffer(sys)
                }];
            //
            me.compoment1(new Component2(config));
            id != undefined?me.compoment2(new Component5(initbuff(id,""))):me.compoment2(new ComponentDetailSystem(initbuff(sys,"_DETAIL")));
            var Alarms = [];
            me.compoment3(new Component4(Alarms));
                
        };

    };
}
);

