/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define([], function () {
    return function () {
        return {
            "key": "c8554bed03ab93e5951e3b5d916bea5e",
            "info": {
                "info_name": "CMAS V2",
				
				"DAR_PW_AC1" : [{
					"divs":[
						{"class1": "ACDB1Class1","channelName":"DAR_PW_DB1_OTB24_I00",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class2","channelName":"DAR_PW_DB1_OTB24_I01",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class3","channelName":"DAR_PW_DB1_OTB24_I02",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class4","channelName":"DAR_PW_DB1_OTB24_I03",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class5","channelName":"DAR_PW_DB1_OTB24_I04",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class6","channelName":"DAR_PW_DB1_OTB24_I05",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class7","channelName":"DAR_PW_DB1_OTB24_I06",'caption':"Volt: ","value": 0},
					],
					"name": "ACDB 1",/* -- @@value ----*/
                    "code": "DAR_PW_AC1",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/dar_acdb_1.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM1_7",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_AC1_PM107_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_AC1_PM107_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_AC1_PM107_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_AC1_PM107_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AC1_PM107_V12", "value": 0 },/* -- @@@value L1  Vd(V)----*/
                                                { "channelName": "DAR_PW_AC1_PM107_V23", "value": 0 },/* -- @@@value L2  Vd(V)-----*/
                                                { "channelName": "DAR_PW_AC1_PM107_V31", "value": 0 }/* -- @@@value L3  Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AC1_PM107_V1", "value": 0 },/* -- @@@value L1  Vp(V)-----*/
                                                { "channelName": "DAR_PW_AC1_PM107_V2", "value": 0 },/* -- @@@value L2  Vp(V)----*/
                                                { "channelName": "DAR_PW_AC1_PM107_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_AC1_PM107_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_AC1_PM107_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_AC1_PM107_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AC1_PM107_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_AC1_PM107_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_AC1_PM107_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AC1_PM107_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_AC1_PM107_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_AC1_PM107_kW3", "value": 0 }/* -- @@@value L3 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(I)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_LV1_PM117_THDI1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_LV1_PM117_THDI2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_LV1_PM117_THDI3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(V)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_LV1_PM117_THDV1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_LV1_PM117_THDV2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_LV1_PM117_THDV3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
					
				}],
				"DAR_PW_DB1": [
                {
					"divs":[
						{"class1": "DB1Class1","channelName":"DAR_PW_DB1_OTB24_I00",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class2","channelName":"DAR_PW_DB1_OTB24_I01",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class3","channelName":"DAR_PW_DB1_OTB24_I02",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class4","channelName":"DAR_PW_DB1_OTB24_I03",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class5","channelName":"DAR_PW_DB1_OTB24_I04",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class6","channelName":"DAR_PW_DB1_OTB24_I05",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class7","channelName":"DAR_PW_DB1_OTB24_I06",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class8","channelName":"DAR_PW_DB1_OTB24_I07",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class9","channelName":"DAR_PW_DB1_OTB24_I08",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class10","channelName":"DAR_PW_DB1_OTB24_I09",'caption':"Volt: ","value": 0},
						],
						"divc":[
								{
								"classc":"DB1Classc1",
								"name": "REC-1",
								"values":[
									{"name":"Volt:", "channelName": "DAR_RE_RE1_psTotalBatteryCurrent", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
									{"name":"Amp:", "channelName": "DAR_PW_UP2_PM110_V3", "value": 0, "unit": ""},/* -- @@value  pf----*/
									{"name":"Mode:", "channelName": "DAR_RE_RE1_psInputLineBVoltage", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
									],
								},
								{
								"classc":"DB1Classc3",
								"name": "REC-3",
								"values":[
									{"name":"Volt:", "channelName": "DAR_PW_UP2_PM110_V12", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
									{"name":"Amp:", "channelName": "DAR_RE_RE3_psInputLineAVoltage", "value": 0, "unit": ""},/* -- @@value  pf----*/
									{"name":"Mode:", "channelName": "DAR_RE_RE3_psInputLineBVoltage", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
									],
								},
								 {
								"classc":"DB1Classc5",
								"name": "REC-5",
								"values":[
									{"name":"Volt:", "channelName": "DAR_PW_UP2_PM110_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
									{"name":"Amp:", "channelName": "DAR_PW_UP2_PM110_kWh", "value": 0, "unit": "kWh"},/* -- @@value  pf----*/
									{"name":"Mode:", "channelName": "DAR_PW_UP2_PM110_Hour", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
									],
								},
						],
						"name": "DCDB 1",/* -- @@value name DCDB 1 ----*/
						"code": "DAR_PW_DB1",
						"description": "DCDB 1 switchboard",/* -- @@value description DCDB 1 ----*/
						"images": "images/dar_dcdb_1.png",/* -- @@value image DCDB 1 ----*/
						"System" : "Power switchboard",
						"status": [
							/*--------- block Status ----------*/
							{
								"name": "",
								Parameter: 0,
								"datas": [
									/* có thể lặp đi lặp lại để thêm nhiều status * /
									 /* --------- stats Status ----------*/
									{
										"name": "status 1",/* -- @@@value ----*/
										"icon": "fa-li fa fa-check-circle",
										"status": { "channelName": "xxx", "value": 0 },/* -- @@@value ----*/
										value : 0
									},
									/*--------- /end Status ----------*/
								]
							},
							/*--------- /block Status ----------*/
							/*--------- block Status ----------*/
						]
					}
				],
				
				
                "DOCUMENT_ALL":[{"code":"DAR_UP_T31","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_UP_T32","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_UP_T33","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_UP_T34","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX3","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX4","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX5","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX6","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX7","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX8","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_GS_BG1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_GS_BG2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_LV1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_LV2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_BU1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_BU2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_AT1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_AT2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_TC1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_UP1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_UP2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_AC1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_AC2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_EM1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_EM2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_UD1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_UD2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_PU1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_PU2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_TLL","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_HS_U1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE3","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE4","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE5","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE6","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_TF_DT1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_TF_DT2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_LL_U1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_LASER_U1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]}],
                "CONFIG_INFO":{"l":1,"s":9,"u":45,"co":44,"ch":1279}
            },
            "configView": [
			
			]
        }
    }
});