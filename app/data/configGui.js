﻿/**
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
						{"class1": "ACDB1Class1","channelName":"OTB5_I0",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class2","channelName":"OTB5_I2",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class3","channelName":"OTB5_I4",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class4","channelName":"OTB5_I6",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class5","channelName":"OTB5_I8",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class6","channelName":"OTB5_I10",'caption':"Volt: ","value": 0},
						{"class1": "ACDB1Class7","channelName":"OTB5_I0",'caption':"Volt: ","value": 0},
					],
					
					"name": "ACDB 1",/* -- @@value ----*/
                    "code": "DAR_PW_AC1",
                    "description": "Switchboard",/* -- @@value ----*/
                    //"images": "images/dar_acdb_1.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM1_7",
									"classinfo":"AC1PM1_7Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_7_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_7_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_7_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_7_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_7_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_7_V12", "value": 0 },
                                                { "channelName": "PM1_7_V23", "value": 0 },
                                                { "channelName": "PM1_7_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_7_V1", "value": 0 },
                                                { "channelName": "PM1_7_V1", "value": 0 },
                                                { "channelName": "PM1_7_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_7_I1", "value": 0 },
                                                { "channelName": "PM1_7_I2", "value": 0 },
                                                { "channelName": "PM1_7_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_7_kW1", "value": 0 },
                                                { "channelName": "PM1_7_kW2", "value": 0 },
                                                { "channelName": "PM1_7_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_7_kVA1", "value": 0 },
                                                { "channelName": "PM1_7_kVA2", "value": 0 },
                                                { "channelName": "PM1_7_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_7_THD_V1", "value": 0 },
                                                { "channelName": "PM1_7_THD_V2", "value": 0 },
                                                { "channelName": "PM1_7_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_7_THD_I1", "value": 0 },
                                                { "channelName": "PM1_7_THD_I2", "value": 0 },
                                                { "channelName": "PM1_7_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                }
                            ],
					
				}],
				"DAR_PW_UP1": [
                {
					"divs":[
						{"class1": "DB1Class1","channelName":"OTB6_I3",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class2","channelName":"OTB6_I9",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class3","channelName":"OTB6_I5",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class4","channelName":"OTB6_I7",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class5","channelName":"OTB7_I0",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class6","channelName":"OTB7_I2",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class7","channelName":"OTB7_I4",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class8","channelName":"OTB7_I6",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class9","channelName":"OTB7_I8",'caption':"Volt: ","value": 0},
						{"class1": "DB1Class10","channelName":"OTB8_I7",'caption':"Volt: ","value": 0},
						],
						
						"name": "DCDB 1",/* -- @@value name DCDB 1 ----*/
						"code": "DAR_PW_DB1",
						"description": "DCDB 1 switchboard",/* -- @@value description DCDB 1 ----*/
						//"images": "images/dar_dcdb_1.png",/* -- @@value image DCDB 1 ----*/
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
				
				"DAR_PW_DB2": [
                {
					"divs":[
						{"class1": "DB2Class1","channelName":"OTB9_I7",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class2","channelName":"OTB9_I7",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class3","channelName":"OTB10_I2",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class4","channelName":"OTB10_I4",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class5","channelName":"OTB10_I6",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class6","channelName":"OTB10_I8",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class7","channelName":"OTB11_I3",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class8","channelName":"OTB11_I9",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class9","channelName":"OTB11_I5",'caption':"Volt: ","value": 0},
						{"class1": "DB2Class10","channelName":"OTB11_I7",'caption':"Volt: ","value": 0},
						
						],
						
						"name": "DCDB 1",/* -- @@value name DCDB 1 ----*/
						"code": "DAR_PW_DB1",
						"description": "DCDB 1 switchboard",/* -- @@value description DCDB 1 ----*/
						//"images": "images/dar_dcdb_1.png",/* -- @@value image DCDB 1 ----*/
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
				
				"DAR_PW_LV1": [	{
					"divs":[
						{"class1": "LV1Class1","channelName":"OTB21_I0","value": 0},
						
					],
					
					"name": "LV 1",
                    "code": "DAR_PW_LV1",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_17",
									"classinfo":"LV1PM1_17Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_17_F", "value": 0, "unit": "Hz"},
										{"name":"pf", "channelName": "PM1_17_pf", "value": 0, "unit": ""},	
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_17_V12", "value": 0 },
                                                { "channelName": "PM1_17_V23", "value": 0 },
                                                { "channelName": "PM1_17_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_17_V1", "value": 0 },
                                                { "channelName": "PM1_17_V1", "value": 0 },
                                                { "channelName": "PM1_17_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_17_I1", "value": 0 },
                                                { "channelName": "PM1_17_I2", "value": 0 },
                                                { "channelName": "PM1_17_I3", "value": 0 }
                                            ]
                                        },
										
                                        
                                    ]
                                }
                            ],
				}],
				"DAR_PW_LV2": [	{
					"divs":[
						{"class1": "LV2Class1","channelName":"OTB21_I2","value": 0},
					],
					
					"name": "LV 2",
                    "code": "DAR_PW_LV2",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_18",
									"classinfo":"LV2PM1_18Info",
                                    "values":[
                                        {"name":"Freq", "channelName": "PM1_18_F", "value": 0, "unit": "Hz"},
										{"name":"pf", "channelName": "PM1_18_pf", "value": 0, "unit": ""},	
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_18_V12", "value": 0 },
                                                { "channelName": "PM1_18_V23", "value": 0 },
                                                { "channelName": "PM1_18_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_18_V1", "value": 0 },
                                                { "channelName": "PM1_18_V1", "value": 0 },
                                                { "channelName": "PM1_18_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_18_I1", "value": 0 },
                                                { "channelName": "PM1_18_I2", "value": 0 },
                                                { "channelName": "PM1_18_I3", "value": 0 }
                                            ]
                                        },
										
                                    ]
                                }
                            ],
				}],
				"DAR_PW_BU1": [	{
					"divs":[
						{"class1": "BU1Class1","channelName":"OTB15_I0","value": 0},
					],
					
					"name": "TBU 1",
                    "code": "DAR_PW_BU1",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_11",
									"classinfo":"BU1PM1_11Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_11_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_11_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_11_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_11_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_11_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_11_V12", "value": 0 },
                                                { "channelName": "PM1_11_V23", "value": 0 },
                                                { "channelName": "PM1_11_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_11_V1", "value": 0 },
                                                { "channelName": "PM1_11_V1", "value": 0 },
                                                { "channelName": "PM1_11_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_11_I1", "value": 0 },
                                                { "channelName": "PM1_11_I2", "value": 0 },
                                                { "channelName": "PM1_11_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_11_kW1", "value": 0 },
                                                { "channelName": "PM1_11_kW2", "value": 0 },
                                                { "channelName": "PM1_11_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_11_kVA1", "value": 0 },
                                                { "channelName": "PM1_11_kVA2", "value": 0 },
                                                { "channelName": "PM1_11_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_11_THD_V1", "value": 0 },
                                                { "channelName": "PM1_11_THD_V2", "value": 0 },
                                                { "channelName": "PM1_11_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_11_THD_I1", "value": 0 },
                                                { "channelName": "PM1_11_THD_I2", "value": 0 },
                                                { "channelName": "PM1_11_THD_I3", "value": 0 }
                                            ]
                                        },
										
                                    ]
                                }
                            ],
				}],
				"DAR_PW_BU2": [	{
					"divs":[
						{"class1": "BU2Class1","channelName":"OTB17_I0","value": 0},
					],
					
					"name": "TBU 2",
                    "code": "DAR_PW_BU2",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_14",
									"classinfo":"BU2PM1_14Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_14_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_14_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_14_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_14_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_14_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_14_V12", "value": 0 },
                                                { "channelName": "PM1_14_V23", "value": 0 },
                                                { "channelName": "PM1_14_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_14_V1", "value": 0 },
                                                { "channelName": "PM1_14_V1", "value": 0 },
                                                { "channelName": "PM1_14_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_14_I1", "value": 0 },
                                                { "channelName": "PM1_14_I2", "value": 0 },
                                                { "channelName": "PM1_14_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_14_kW1", "value": 0 },
                                                { "channelName": "PM1_14_kW2", "value": 0 },
                                                { "channelName": "PM1_14_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_14_kVA1", "value": 0 },
                                                { "channelName": "PM1_14_kVA2", "value": 0 },
                                                { "channelName": "PM1_14_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_14_THD_V1", "value": 0 },
                                                { "channelName": "PM1_14_THD_V2", "value": 0 },
                                                { "channelName": "PM1_14_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_14_THD_I1", "value": 0 },
                                                { "channelName": "PM1_14_THD_I2", "value": 0 },
                                                { "channelName": "PM1_14_THD_I3", "value": 0 }
                                            ]
                                        },
										
                                    ]
                                }
                            ],
				}],
				
				"DAR_PW_AT1": [	{
					"divs":[
						{"class1": "AT1Class1","channelName":"OTB13_I0","value": 0},
						{"class1": "AT1Class2","channelName":"OTB13_I2","value": 0},
						{"class1": "AT1Class3","channelName":"OTB13_I10","value": 0},
						{"class1": "AT1Class4","channelName":"OTB13_I4","value": 0},
						{"class1": "AT1Class5","channelName":"OTB13_I6","value": 0},
						{"class1": "AT1Class6","channelName":"OTB13_I8","value": 0},
						
					],
					
					"name": "ATS 1",
                    "code": "DAR_PW_AT1",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM2_1",
									"classinfo":"AT1PM2_1Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM2_1_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM2_1_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM2_1_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM2_1_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM2_1_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM2_1_V12", "value": 0 },
                                                { "channelName": "PM2_1_V23", "value": 0 },
                                                { "channelName": "PM2_1_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM2_1_V1", "value": 0 },
                                                { "channelName": "PM2_1_V1", "value": 0 },
                                                { "channelName": "PM2_1_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM2_1_I1", "value": 0 },
                                                { "channelName": "PM2_1_I2", "value": 0 },
                                                { "channelName": "PM2_1_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM2_1_kW1", "value": 0 },
                                                { "channelName": "PM2_1_kW2", "value": 0 },
                                                { "channelName": "PM2_1_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM2_1_kVA1", "value": 0 },
                                                { "channelName": "PM2_1_kVA2", "value": 0 },
                                                { "channelName": "PM2_1_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM2_1_THD_V1", "value": 0 },
                                                { "channelName": "PM2_1_THD_V2", "value": 0 },
                                                { "channelName": "PM2_1_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM2_1_THD_I1", "value": 0 },
                                                { "channelName": "PM2_1_THD_I2", "value": 0 },
                                                { "channelName": "PM2_1_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                },
								{
                                    "name": "PM1_12",
									"classinfo":"AT1PM1_12Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_12_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_12_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_12_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_12_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_12_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_12_V12", "value": 0 },
                                                { "channelName": "PM1_12_V23", "value": 0 },
                                                { "channelName": "PM1_12_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_12_V1", "value": 0 },
                                                { "channelName": "PM1_12_V1", "value": 0 },
                                                { "channelName": "PM1_12_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_12_I1", "value": 0 },
                                                { "channelName": "PM1_12_I2", "value": 0 },
                                                { "channelName": "PM1_12_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_12_kW1", "value": 0 },
                                                { "channelName": "PM1_12_kW2", "value": 0 },
                                                { "channelName": "PM1_12_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_12_kVA1", "value": 0 },
                                                { "channelName": "PM1_12_kVA2", "value": 0 },
                                                { "channelName": "PM1_12_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_12_THD_V1", "value": 0 },
                                                { "channelName": "PM1_12_THD_V2", "value": 0 },
                                                { "channelName": "PM1_12_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_12_THD_I1", "value": 0 },
                                                { "channelName": "PM1_12_THD_I2", "value": 0 },
                                                { "channelName": "PM1_12_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                }
                            ],
				}],
				"DAR_PW_AT2": [	{
					"divs":[
						{"class1": "AT2Class1","channelName":"OTB18_I2","value": 0},
						{"class1": "AT2Class2","channelName":"OTB18_I0","value": 0},
						{"class1": "AT2Class3","channelName":"OTB18_I8","value": 0},
						{"class1": "AT2Class4","channelName":"OTB18_I6","value": 0},
						{"class1": "AT2Class5","channelName":"OTB18_I4","value": 0},
						{"class1": "AT2Class6","channelName":"OTB18_I10","value": 0},
						
					],
					
					"name": "ATS 2",
                    "code": "DAR_PW_AT2",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM2_2",
									"classinfo":"AT2PM2_2Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM2_2_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM2_2_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM2_2_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM2_2_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM2_2_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM2_2_V12", "value": 0 },
                                                { "channelName": "PM2_2_V23", "value": 0 },
                                                { "channelName": "PM2_2_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM2_2_V1", "value": 0 },
                                                { "channelName": "PM2_2_V1", "value": 0 },
                                                { "channelName": "PM2_2_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM2_2_I1", "value": 0 },
                                                { "channelName": "PM2_2_I2", "value": 0 },
                                                { "channelName": "PM2_2_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM2_2_kW1", "value": 0 },
                                                { "channelName": "PM2_2_kW2", "value": 0 },
                                                { "channelName": "PM2_2_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM2_2_kVA1", "value": 0 },
                                                { "channelName": "PM2_2_kVA2", "value": 0 },
                                                { "channelName": "PM2_2_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM2_2_THD_V1", "value": 0 },
                                                { "channelName": "PM2_2_THD_V2", "value": 0 },
                                                { "channelName": "PM2_2_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM2_2_THD_I1", "value": 0 },
                                                { "channelName": "PM2_2_THD_I2", "value": 0 },
                                                { "channelName": "PM2_2_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                },
								{
                                    "name": "PM1_13",
									"classinfo":"AT2PM1_13Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_13_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_13_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_13_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_13_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_13_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_13_V12", "value": 0 },
                                                { "channelName": "PM1_13_V23", "value": 0 },
                                                { "channelName": "PM1_13_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_13_V1", "value": 0 },
                                                { "channelName": "PM1_13_V1", "value": 0 },
                                                { "channelName": "PM1_13_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_13_I1", "value": 0 },
                                                { "channelName": "PM1_13_I2", "value": 0 },
                                                { "channelName": "PM1_13_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_13_kW1", "value": 0 },
                                                { "channelName": "PM1_13_kW2", "value": 0 },
                                                { "channelName": "PM1_13_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_13_kVA1", "value": 0 },
                                                { "channelName": "PM1_13_kVA2", "value": 0 },
                                                { "channelName": "PM1_13_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_13_THD_V1", "value": 0 },
                                                { "channelName": "PM1_13_THD_V2", "value": 0 },
                                                { "channelName": "PM1_13_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_13_THD_I1", "value": 0 },
                                                { "channelName": "PM1_13_THD_I2", "value": 0 },
                                                { "channelName": "PM1_13_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                }
                            ],
				}],
				
				"DAR_PW_TC1": [	{
					"divs":[
						
						
					],
					
					"name": "TCM",
                    "code": "DAR_PW_TC1",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_15",
									"classinfo":"TC1PM1_15Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_15_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_15_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_15_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_15_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_15_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_15_V12", "value": 0 },
                                                { "channelName": "PM1_15_V23", "value": 0 },
                                                { "channelName": "PM1_15_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_15_V1", "value": 0 },
                                                { "channelName": "PM1_15_V1", "value": 0 },
                                                { "channelName": "PM1_15_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_15_I1", "value": 0 },
                                                { "channelName": "PM1_15_I2", "value": 0 },
                                                { "channelName": "PM1_15_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_15_kW1", "value": 0 },
                                                { "channelName": "PM1_15_kW2", "value": 0 },
                                                { "channelName": "PM1_15_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_15_kVA1", "value": 0 },
                                                { "channelName": "PM1_15_kVA2", "value": 0 },
                                                { "channelName": "PM1_15_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_15_THD_V1", "value": 0 },
                                                { "channelName": "PM1_15_THD_V2", "value": 0 },
                                                { "channelName": "PM1_15_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_15_THD_I1", "value": 0 },
                                                { "channelName": "PM1_15_THD_I2", "value": 0 },
                                                { "channelName": "PM1_15_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                },
								{
                                    "name": "PM1_16",
									"classinfo":"TC1PM1_16Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_16_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_16_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_16_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_16_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_16_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_16_V12", "value": 0 },
                                                { "channelName": "PM1_16_V23", "value": 0 },
                                                { "channelName": "PM1_16_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_16_V1", "value": 0 },
                                                { "channelName": "PM1_16_V1", "value": 0 },
                                                { "channelName": "PM1_16_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_16_I1", "value": 0 },
                                                { "channelName": "PM1_16_I2", "value": 0 },
                                                { "channelName": "PM1_16_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_16_kW1", "value": 0 },
                                                { "channelName": "PM1_16_kW2", "value": 0 },
                                                { "channelName": "PM1_16_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_16_kVA1", "value": 0 },
                                                { "channelName": "PM1_16_kVA2", "value": 0 },
                                                { "channelName": "PM1_16_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_16_THD_V1", "value": 0 },
                                                { "channelName": "PM1_16_THD_V2", "value": 0 },
                                                { "channelName": "PM1_16_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_16_THD_I1", "value": 0 },
                                                { "channelName": "PM1_16_THD_I2", "value": 0 },
                                                { "channelName": "PM1_16_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                }
                            ],
				}],
				
				"DAR_PW_EM1": [	{
					"divs":[
						
						
					],
					
					"name": "ESDB 1",
                    "code": "DAR_PW_EM1",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_8",
									"classinfo":"EM1PM1_8Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_8_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_8_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_8_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_8_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_8_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_8_V12", "value": 0 },
                                                { "channelName": "PM1_8_V23", "value": 0 },
                                                { "channelName": "PM1_8_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_8_V1", "value": 0 },
                                                { "channelName": "PM1_8_V1", "value": 0 },
                                                { "channelName": "PM1_8_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_8_I1", "value": 0 },
                                                { "channelName": "PM1_8_I2", "value": 0 },
                                                { "channelName": "PM1_8_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_8_kW1", "value": 0 },
                                                { "channelName": "PM1_8_kW2", "value": 0 },
                                                { "channelName": "PM1_8_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_kVA1", "value": 0 },
                                                { "channelName": "PM1_8_kVA2", "value": 0 },
                                                { "channelName": "PM1_8_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_THD_V1", "value": 0 },
                                                { "channelName": "PM1_8_THD_V2", "value": 0 },
                                                { "channelName": "PM1_8_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_THD_I1", "value": 0 },
                                                { "channelName": "PM1_8_THD_I2", "value": 0 },
                                                { "channelName": "PM1_8_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                },
								{
                                    "name": "PM1_9",
									"classinfo":"EM1PM1_9Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_9_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_9_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_9_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_9_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_9_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_9_V12", "value": 0 },
                                                { "channelName": "PM1_9_V23", "value": 0 },
                                                { "channelName": "PM1_9_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_9_V1", "value": 0 },
                                                { "channelName": "PM1_9_V1", "value": 0 },
                                                { "channelName": "PM1_9_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_9_I1", "value": 0 },
                                                { "channelName": "PM1_9_I2", "value": 0 },
                                                { "channelName": "PM1_9_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_9_kW1", "value": 0 },
                                                { "channelName": "PM1_9_kW2", "value": 0 },
                                                { "channelName": "PM1_9_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_kVA1", "value": 0 },
                                                { "channelName": "PM1_9_kVA2", "value": 0 },
                                                { "channelName": "PM1_9_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_THD_V1", "value": 0 },
                                                { "channelName": "PM1_9_THD_V2", "value": 0 },
                                                { "channelName": "PM1_9_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_THD_I1", "value": 0 },
                                                { "channelName": "PM1_9_THD_I2", "value": 0 },
                                                { "channelName": "PM1_9_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                }
                            ],
				}],
				"DAR_PW_EM2": [	{
					"divs":[
						
						
					],
					
					"name": "ESDB 2",
                    "code": "DAR_PW_EM2",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_8",
									"classinfo":"EM1PM1_8Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_8_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_8_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_8_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_8_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_8_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_8_V12", "value": 0 },
                                                { "channelName": "PM1_8_V23", "value": 0 },
                                                { "channelName": "PM1_8_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_8_V1", "value": 0 },
                                                { "channelName": "PM1_8_V1", "value": 0 },
                                                { "channelName": "PM1_8_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_8_I1", "value": 0 },
                                                { "channelName": "PM1_8_I2", "value": 0 },
                                                { "channelName": "PM1_8_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_8_kW1", "value": 0 },
                                                { "channelName": "PM1_8_kW2", "value": 0 },
                                                { "channelName": "PM1_8_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_kVA1", "value": 0 },
                                                { "channelName": "PM1_8_kVA2", "value": 0 },
                                                { "channelName": "PM1_8_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_THD_V1", "value": 0 },
                                                { "channelName": "PM1_8_THD_V2", "value": 0 },
                                                { "channelName": "PM1_8_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_THD_I1", "value": 0 },
                                                { "channelName": "PM1_8_THD_I2", "value": 0 },
                                                { "channelName": "PM1_8_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                },
								{
                                    "name": "PM1_9",
									"classinfo":"EM1PM1_9Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_9_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_9_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_9_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_9_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_9_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_9_V12", "value": 0 },
                                                { "channelName": "PM1_9_V23", "value": 0 },
                                                { "channelName": "PM1_9_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_9_V1", "value": 0 },
                                                { "channelName": "PM1_9_V1", "value": 0 },
                                                { "channelName": "PM1_9_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_9_I1", "value": 0 },
                                                { "channelName": "PM1_9_I2", "value": 0 },
                                                { "channelName": "PM1_9_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_9_kW1", "value": 0 },
                                                { "channelName": "PM1_9_kW2", "value": 0 },
                                                { "channelName": "PM1_9_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_kVA1", "value": 0 },
                                                { "channelName": "PM1_9_kVA2", "value": 0 },
                                                { "channelName": "PM1_9_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_THD_V1", "value": 0 },
                                                { "channelName": "PM1_9_THD_V2", "value": 0 },
                                                { "channelName": "PM1_9_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_THD_I1", "value": 0 },
                                                { "channelName": "PM1_9_THD_I2", "value": 0 },
                                                { "channelName": "PM1_9_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                }
                            ],
				}],
				
				"DAR_PW_UD2": [	{
					"divs":[
						
						
					],
					
					"name": "UDB 2",
                    "code": "DAR_PW_UD2",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_3",
									"classinfo":"UD2PM1_3Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_3_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_3_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_3_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_3_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_3_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_3_V12", "value": 0 },
                                                { "channelName": "PM1_3_V23", "value": 0 },
                                                { "channelName": "PM1_3_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_3_V1", "value": 0 },
                                                { "channelName": "PM1_3_V1", "value": 0 },
                                                { "channelName": "PM1_3_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_3_I1", "value": 0 },
                                                { "channelName": "PM1_3_I2", "value": 0 },
                                                { "channelName": "PM1_3_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_3_kW1", "value": 0 },
                                                { "channelName": "PM1_3_kW2", "value": 0 },
                                                { "channelName": "PM1_3_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_3_kVA1", "value": 0 },
                                                { "channelName": "PM1_3_kVA2", "value": 0 },
                                                { "channelName": "PM1_3_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_3_THD_V1", "value": 0 },
                                                { "channelName": "PM1_3_THD_V2", "value": 0 },
                                                { "channelName": "PM1_3_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_3_THD_I1", "value": 0 },
                                                { "channelName": "PM1_3_THD_I2", "value": 0 },
                                                { "channelName": "PM1_3_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                },
								{
                                    "name": "PM1_4",
									"classinfo":"UD2PM1_4Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_4_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_4_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_4_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_4_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_4_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_4_V12", "value": 0 },
                                                { "channelName": "PM1_4_V23", "value": 0 },
                                                { "channelName": "PM1_4_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_4_V1", "value": 0 },
                                                { "channelName": "PM1_4_V1", "value": 0 },
                                                { "channelName": "PM1_4_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_4_I1", "value": 0 },
                                                { "channelName": "PM1_4_I2", "value": 0 },
                                                { "channelName": "PM1_4_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_4_kW1", "value": 0 },
                                                { "channelName": "PM1_4_kW2", "value": 0 },
                                                { "channelName": "PM1_4_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_4_kVA1", "value": 0 },
                                                { "channelName": "PM1_4_kVA2", "value": 0 },
                                                { "channelName": "PM1_4_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_4_THD_V1", "value": 0 },
                                                { "channelName": "PM1_4_THD_V2", "value": 0 },
                                                { "channelName": "PM1_4_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_4_THD_I1", "value": 0 },
                                                { "channelName": "PM1_4_THD_I2", "value": 0 },
                                                { "channelName": "PM1_4_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                }
                            ],
				}],
				
				"DAR_PW_TLL": [	{
					"divs":[
						
						
					],
					
					"name": "ESDB 1",
                    "code": "DAR_PW_TLL",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_8",
									"classinfo":"EM1PM1_8Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_8_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_8_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_8_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_8_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_8_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_8_V12", "value": 0 },
                                                { "channelName": "PM1_8_V23", "value": 0 },
                                                { "channelName": "PM1_8_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_8_V1", "value": 0 },
                                                { "channelName": "PM1_8_V1", "value": 0 },
                                                { "channelName": "PM1_8_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_8_I1", "value": 0 },
                                                { "channelName": "PM1_8_I2", "value": 0 },
                                                { "channelName": "PM1_8_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_8_kW1", "value": 0 },
                                                { "channelName": "PM1_8_kW2", "value": 0 },
                                                { "channelName": "PM1_8_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_kVA1", "value": 0 },
                                                { "channelName": "PM1_8_kVA2", "value": 0 },
                                                { "channelName": "PM1_8_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_THD_V1", "value": 0 },
                                                { "channelName": "PM1_8_THD_V2", "value": 0 },
                                                { "channelName": "PM1_8_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_8_THD_I1", "value": 0 },
                                                { "channelName": "PM1_8_THD_I2", "value": 0 },
                                                { "channelName": "PM1_8_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                },
								{
                                    "name": "PM1_9",
									"classinfo":"EM1PM1_9Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_9_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_9_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_9_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_9_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_9_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_9_V12", "value": 0 },
                                                { "channelName": "PM1_9_V23", "value": 0 },
                                                { "channelName": "PM1_9_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_9_V1", "value": 0 },
                                                { "channelName": "PM1_9_V1", "value": 0 },
                                                { "channelName": "PM1_9_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_9_I1", "value": 0 },
                                                { "channelName": "PM1_9_I2", "value": 0 },
                                                { "channelName": "PM1_9_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_9_kW1", "value": 0 },
                                                { "channelName": "PM1_9_kW2", "value": 0 },
                                                { "channelName": "PM1_9_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_kVA1", "value": 0 },
                                                { "channelName": "PM1_9_kVA2", "value": 0 },
                                                { "channelName": "PM1_9_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_THD_V1", "value": 0 },
                                                { "channelName": "PM1_9_THD_V2", "value": 0 },
                                                { "channelName": "PM1_9_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_9_THD_I1", "value": 0 },
                                                { "channelName": "PM1_9_THD_I2", "value": 0 },
                                                { "channelName": "PM1_9_THD_I3", "value": 0 }
                                            ]
                                        },
                                        
                                    ]
                                }
                            ],
				}],
				
				"DAR_PW_AC2": [	{
					"divs":[
						
					],
					
					"name": "ACDB 2",
                    "code": "DAR_PW_AC2",
                    "description": "",                    
                    "System" : "",
					"Parameters": [
                                {
                                    "name": "PM1_10",
									"classinfo":"AC2PM1_10Info",
                                    "values":[
										{"name":"Freq", "channelName": "PM1_10_F", "value": 0, "unit": "Hz"},
                                        {"name":"pf", "channelName": "PM1_10_pf", "value": 0, "unit": ""},
										{"name":"kW", "channelName": "PM1_10_kW", "value": 0, "unit": "kW"},
										{"name":"kVA", "channelName": "PM1_10_kVA", "value": 0, "unit": "kVA"},
                                        {"name":"kWh", "channelName": "PM1_10_kWh", "value": 0, "unit": "kWh"},
                                        
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_10_V12", "value": 0 },
                                                { "channelName": "PM1_10_V23", "value": 0 },
                                                { "channelName": "PM1_10_V31", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "PM1_10_V1", "value": 0 },
                                                { "channelName": "PM1_10_V1", "value": 0 },
                                                { "channelName": "PM1_10_V1", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "PM1_10_I1", "value": 0 },
                                                { "channelName": "PM1_10_I2", "value": 0 },
                                                { "channelName": "PM1_10_I3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kW",
                                            "unit": "kW",
                                            "values": [
                                                { "channelName": "PM1_10_kW1", "value": 0 },
                                                { "channelName": "PM1_10_kW2", "value": 0 },
                                                { "channelName": "PM1_10_kW3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_10_kVA1", "value": 0 },
                                                { "channelName": "PM1_10_kVA2", "value": 0 },
                                                { "channelName": "PM1_10_kVA3", "value": 0 }
                                            ]
                                        },
										{
                                            "name": "V THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_10_THD_V1", "value": 0 },
                                                { "channelName": "PM1_10_THD_V2", "value": 0 },
                                                { "channelName": "PM1_10_THD_V3", "value": 0 }
                                            ]
                                        },
                                        {
                                            "name": "I THD(%)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "PM1_10_THD_I1", "value": 0 },
                                                { "channelName": "PM1_10_THD_I2", "value": 0 },
                                                { "channelName": "PM1_10_THD_I3", "value": 0 }
                                            ]
                                        },
										
                                    ]
                                }
                            ],
				}],
				
				
                "DOCUMENT_ALL":[{"code":"DAR_UP_T31","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_UP_T32","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_UP_T33","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_UP_T34","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX3","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX4","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX5","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX6","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX7","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PI_DX8","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_GS_BG1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_GS_BG2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_LV1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_LV2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_BU1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_BU2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_AT1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_AT2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_TC1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_UP1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_UP2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_AC1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_AC2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_EM1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_EM2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_UD1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_UD2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_PU1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_PU2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_PW_TLL","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_HS_U1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE3","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE4","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE5","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_RE_RE6","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_TF_DT1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_TF_DT2","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_LL_U1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]},{"code":"DAR_LASER_U1","_":[{"name":"User Manual","id":0,"icon":"jstree-folder","sub":[{"name":"User Manual v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"As-built drawings","id":0,"icon":"jstree-folder","sub":[{"name":"As-built drawings v1","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]},{"name":"Catalogues","id":0,"icon":"jstree-folder","sub":[{"name":"Catalogues","id":1,"path":"dcs.pdf","icon":"icon-pdf","sub":0}]}]}],
                "CONFIG_INFO":{"l":1,"s":9,"u":45,"co":44,"ch":1279}
            },
            "configView": [
			
			]
        }
    }
});