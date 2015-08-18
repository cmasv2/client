﻿/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', "knockout", "./../bindings/status-binding"],
    function (app, ko) {
        return function (cf) {
            var me = this,
	            Soc = app.services.getService("socket"),
	            buff = app.buff;
            function inf(c) {
	            return buff.find(buff.getByKey('ChannelsAll'), 'code', c);
	        }
	        function Lis(c) {
	            c.value = ko.observable('NaN');
	            var cv = function (value) {
	                if (value != undefined)
	                    c.value(Math.round(value * 10) / 10);
	            }
	            if (Soc.connected())
	                if (c.channelName != 'xxx')
	                    Soc.Lis(c.channelName, cv);
	        }
	        if(cf[0].onpage != undefined){
		        for (var i = cf[0].onpage.length - 1; i >= 0; i--) {
		        	if(cf[0].onpage[i].values != undefined){
			        	var it = cf[0].onpage[i].values;
			        	for (var j = it.length - 1; j >= 0; j--) {
			        		var info = inf(it[j].channelName);
				        	 it[j].unit = info ? info[0].unit : " ";
				        	 Lis(it[j]);	        		
			        	};
			        }
			        else
			        	cf[0].onpage[i].values = 0;
		        };
		    }
		    else
		    	cf[0].onpage = 0;
		    if (cf[0].Parameters != undefined) {
                for (i = 0; i < cf[0].Parameters.length; i++) {
                	if(cf[0].Parameters[i].data != undefined){
	                    for (j = 0; j < cf[0].Parameters[i].data.length; j++) {
	                        for (h = 0; h < cf[0].Parameters[i].data[j].values.length; h++) {
	                            Lis(cf[0].Parameters[i].data[j].values[h]);
	                        }
	                    }
                    }
			        else
			        	cf[0].Parameters[i].data = 0;
			        if(cf[0].Parameters[i].values != undefined){
	                    for (j = 0; j < cf[0].Parameters[i].values.length; j++) {
	                        var info = inf(cf[0].Parameters[i].values[j].channelName);
	                        cf[0].Parameters[i].values[j].unit = info ? info.unit : " ";
	                        Lis(cf[0].Parameters[i].values[j]);
	                    }
                	}
			        else
			        	cf[0].Parameters[i].values = 0;
                }
            } else {
                cf[0].Parameters = 0;
            }
            me.cf = ko.observableArray(cf);
        };
    }
);
