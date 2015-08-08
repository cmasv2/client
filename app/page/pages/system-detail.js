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
		
		////////////////////////////////
		function test(channel){
			if(jQuery("#sys_left_close").hasClass( "sys_open" )){
				
				jQuery("#sys_detail_compoment1").hide();
			
				jQuery("#sys_detail_left").removeClass("col-md-3");
				jQuery("#sys_detail_right").removeClass("col-md-9");
				
				jQuery("#sys_detail_left").toggleClass("col-md-1");
				jQuery("#sys_detail_right").toggleClass("col-md-11");
				
				jQuery("#sys_left_close").removeClass("sys_open");
				jQuery("#sys_left_close").toggleClass("sys_close");
				
				jQuery("#sys_detail_left").attr("style","width:4%");
				jQuery(".sys_icon_close").attr("style","width:100%");
				jQuery("#i-icon").toggleClass("fa-chevron-circle-right");
				jQuery("#sys_detail_right").attr("style","width:96%");
				
			} else {
				jQuery("#sys_detail_compoment1").show();
			
				jQuery("#sys_detail_left").removeClass("col-md-1");
				jQuery("#sys_detail_right").removeClass("col-md-11");
				
				jQuery("#sys_detail_left").toggleClass("col-md-3");
				jQuery("#sys_detail_right").toggleClass("col-md-9");
				
				jQuery("#sys_left_close").removeClass("sys_close");
				jQuery("#sys_left_close").toggleClass("sys_open");
				
				jQuery("#sys_detail_left").attr("style","");
				jQuery(".sys_icon_close").attr("style","width:15%;float: right;");
				jQuery("#i-icon").toggleClass("fa-chevron-circle-right");
				jQuery("#sys_detail_right").attr("style","");
			}
        }
		me.test = test;		
		////////////////////////////////////////  

    };
}
);

