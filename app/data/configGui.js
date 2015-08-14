define([], function () {
    return function () {
        return {
            "DAR_PW_DB1_DETAIL" : [{
                "divs":[
                    {"class1": "nameclass1","channelName":"DAR_PW_DB1_OTB24_I00"},
					{"class1": "nameclass2","channelName":"DAR_PW_DB1_OTB24_I01",'caption':"Volt: "}
                ]
            }],
            "DAR_UP" : [
                {
                    "status": {"value": 0},"url": "detail/DAR_UP","code": "DAR_UP_T31",
                    "progress": {"channelName": "DAR_UP_T31_kVA"},
                    "value1": { "channelName": "DAR_UP_T31_kVA"},
                    "value2": { "channelName": "DAR_UP_T31_min"}
                },
                {
                    "status": {"value": 0},"url": "detail/DAR_UP","code": "DAR_UP_T32",
                    "progress": {"channelName": "DAR_UP_T32_kVA"},
                    "value1": { "channelName": "DAR_UP_T32_kVA"},
                    "value2": { "channelName": "DAR_UP_T32_min"}
                },
                {
                    "status": {"value": 0},"url": "detail/DAR_UP","code": "DAR_UP_T33",
                    "progress": {"channelName": "DAR_UP_T33_kVA"},
                    "value1": { "channelName": "DAR_UP_T33_kVA"},
                    "value2": { "channelName": "DAR_UP_T33_min"}
                },
                {
                    "status": {"value": 0 },"url": "detail/DAR_UP","code": "DAR_UP_T34",
                    "progress": {"channelName": "DAR_UP_T34_kVA"},
                    "value1": { "channelName": "DAR_UP_T34_kVA"},
                    "value2": { "channelName": "DAR_UP_T34_min"}
                }
            ],
            "DAR_UP_T31": [
                {
                    "code" : "DAR_UP_T31",
                    "status": [
                        {"datas": [
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}}
                        ]},{"datas": [
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}}
                        ]}
                    ],
                    "Parameters": [
                        {"name": "Input",
                            "values": [
                                {"name":"pf", "channelName": "DAR_UP_T31_VI12"},
                                {"name":"kWh", "channelName": "DAR_UP_T31_VI12"},
                                {"name":"Time", "channelName": "DAR_UP_T31_min"}
                            ],"data": [{
                                    "name": "Vd","unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T31_VI12"},
                                        { "channelName": "DAR_UP_T31_VI23"},
                                        { "channelName": "DAR_UP_T31_VI31"}
                                ]},{
                                    "name": "Vp","unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T31_VI1"},
                                        { "channelName": "DAR_UP_T31_VI2"},
                                        { "channelName": "DAR_UP_T31_VI3"}
                                ]},{
                                    "name": "I","unit": "A",
                                    "values": [
                                        { "channelName": "DAR_UP_T31_I11"},
                                        { "channelName": "DAR_UP_T31_I12"},
                                        { "channelName": "DAR_UP_T31_I13"}
                                ]},{
                                    "name": "kVA","unit": "",
                                    "values": [
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"}
                                ]},{
                                    "name": "kW","unit": "",
                                    "values": [
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"}
                                ]}
                            ]
                        },
                        {"name": "Bypass",
                            "values":[
                                {"name":"pf", "channelName": "xxx"},
                                {"name":"kWh", "channelName": "xxx"},
                                {"name":"Time", "channelName": "xxx"},
                            ],"data": [{
                                    "name": "Vd","unit": "V",
                                    "values": [
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"}
                                ]},{
                                    "name": "Vp","unit": "V",
                                    "values": [
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"}
                                ]},{
                                    "name": "I","unit": "A",
                                    "values": [
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"}
                                ]},{
                                    "name": "kVA","unit": "",
                                    "values": [
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"}
                                ]},{
                                    "name": "kW", "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"},
                                        { "channelName": "xxx"}
                                ]}
                            ]
                        },
                        {"name": "Output",
                            "values":[
                                {"name":"pf", "channelName": "DAR_UP_T31_VO12"},
                                {"name":"kWh", "channelName": "DAR_UP_T31_VO12"},
                                {"name":"Time", "channelName": "DAR_UP_T31_VO12"}
                            ],
                            "data": [{
                                    "name": "Vd","unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T31_VO12"},/* -- @@value L1 UPS 1 Output Vd(V)----*/
                                        { "channelName": "DAR_UP_T31_VO23"},/* -- @@value L2 UPS 1 Output Vd(V)-----*/
                                        { "channelName": "DAR_UP_T31_VO31"}/* -- @@value L3 UPS 1 Output Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T31_VO1"},/* -- @@value L1 UPS 1 Output Vp(V)-----*/
                                        { "channelName": "DAR_UP_T31_VO2"},/* -- @@value L2 UPS 1 Output Vp(V)----*/
                                        { "channelName": "DAR_UP_T31_VO2"}/* -- @@value L3 UPS 1 Output Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "DAR_UP_T31_I21"},/* -- @@value L1 UPS 1 Output I(A)----*/
                                        { "channelName": "DAR_UP_T31_I22"},/* -- @@value L2 UPS 1 Output I(A)----*/
                                        { "channelName": "DAR_UP_T31_I23"}/* -- @@value L3 UPS 1 Output I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 1 Output kVA----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 1 Output kVA----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 1 Output kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 1 Output kW----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 1 Output kW----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 1 Output kW----*/
                                    ]
                                }
                            ]
                        }
                    ],
                    "Battery": {
                        "values": [
                            { "name": "Volt","channelName": "xxx"},
                            {"name": "Current","channelName": "xxx"},
                            {"name": "Percent","channelName": "xxx"},
                            {"name": "Backup Time","channelName": "xxx"},
                            {"name": "Temperature","channelName": "xxx"}
                        ]
                    }
                }],/*------------------------------ / data UPS 1 --------------------------*/
            /*------------------------------ data UPS 2 --------------------------*/
            "DAR_UP_T32": [
                {
                    "code": "DAR_UP_T32",
                    "status": [
                        {"datas": [
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                            {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}}
                        ]},
                        {"datas": [
                             {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                             {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                             {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}}
                        ]}
                    ],
                    "Parameters": [
                        {
                            "name": "Input",
                            "values":[
                                { "name":"pf", "channelName": "xxx"},
                                { "name": "kWh", "channelName": "xxx"},
                                { "name": "Time", "channelName": "DAR_UP_T32_min"},/* -- @@value UPS 2 Input Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T32_VI12"},/* -- @@value L1 UPS 2 Input Vd(V)----*/
                                        { "channelName": "DAR_UP_T32_VI23"},/* -- @@value L2 UPS 2 Input Vd(V)-----*/
                                        { "channelName": "DAR_UP_T32_VI31" }/* -- @@value L3 UPS 2 Input Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T32_VI1" },/* -- @@value L1 UPS 2 Input Vp(V)-----*/
                                        { "channelName": "DAR_UP_T32_VI2" },/* -- @@value L2 UPS 2 Input Vp(V)----*/
                                        { "channelName": "DAR_UP_T32_VI3" }/* -- @@value L3 UPS 2 Input Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "DAR_UP_T32_I11"},/* -- @@value L1 UPS 2 Input I(A)----*/
                                        { "channelName": "DAR_UP_T32_I12"},/* -- @@value L2 UPS 2 Input I(A)----*/
                                        { "channelName": "DAR_UP_T32_I13"}/* -- @@value L3 UPS 2 Input I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Input kVA----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Input kVA----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Input kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Input kW----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Input kW----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Input kW----*/
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Bypass",
                            "values":[
                                {"name":"pf", "channelName": "xxx"},/* -- @@value  pf----*/
                                {"name":"kWh", "channelName": "xxx"},/* -- @@value  kVA----*/
                                {"name":"Time", "channelName": "xxx"},/* -- @@value Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Bypass Vd(V)----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Bypass Vd(V)-----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Bypass Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Bypass Vp(V)-----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Bypass Vp(V)----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Bypass Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Bypass I(A)----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Bypass I(A)----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Bypass I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Bypass kVA----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Bypass kVA----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Bypass kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Bypass kW----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Bypass kW----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Bypass kW----*/
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Output",
                            "values":[
                                {"name":"pf", "channelName": "xxx"},/* -- @@value  pf----*/
                                {"name":"kWh", "channelName": "xxx"},/* -- @@value  kVA----*/
                                {"name":"Time", "channelName": "xxx"},/* -- @@value Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T32_VO12"},/* -- @@value L1 UPS 2 Output Vd(V)----*/
                                        { "channelName": "DAR_UP_T32_VO23"},/* -- @@value L2 UPS 2 Output Vd(V)-----*/
                                        { "channelName": "DAR_UP_T32_VO31"}/* -- @@value L3 UPS 2 Output Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T32_VO1"},/* -- @@value L1 UPS 2 Output Vp(V)-----*/
                                        { "channelName": "DAR_UP_T32_VO2"},/* -- @@value L2 UPS 2 Output Vp(V)----*/
                                        { "channelName": "DAR_UP_T32_VO2"}/* -- @@value L3 UPS 2 Output Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "DAR_UP_T32_I21"},/* -- @@value L1 UPS 2 Output I(A)----*/
                                        { "channelName": "DAR_UP_T32_I22"},/* -- @@value L2 UPS 2 Output I(A)----*/
                                        { "channelName": "DAR_UP_T32_I23"}/* -- @@value L3 UPS 2 Output I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Output kVA----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Output kVA----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Output kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 2 Output kW----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 2 Output kW----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 2 Output kW----*/
                                    ]
                                }
                            ]
                        }
                    ],
                    "Battery": {
                        "values": [
                            {"name": "Volt","channelName": "xxx"},
                            {"name": "Current","channelName": "xxx"},
                            {"name": "Percent","channelName": "xxx" },
                            {"name": "Backup Time", "channelName": "xxx"},
                            {"name": "Temperature","channelName": "xxx"}
                        ]
                    }
                }],/*------------------------------ / data UPS 2 --------------------------*/
            /*------------------------------ data UPS 3 --------------------------*/
            "DAR_UP_T33": [
                {
                    "code": "DAR_UP_T33",
                    "status": [
                        /*--------- block Status ----------*/
                        {
                            "datas": [
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}}
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "datas": [
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx" }},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}}
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ],
                    "Parameters": [
                        {
                            "name": "Input",
                            "values":[
                                {"name":"pf", "channelName": "xxx"},/* -- @@value  pf----*/
                                {"name":"kWh", "channelName": "xxx"},/* -- @@value  kVA----*/
                                {"name":"Time", "channelName": "DAR_UP_T33_min"},/* -- @@value Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T33_VI12"},/* -- @@value L1 UPS 3 Input Vd(V)----*/
                                        { "channelName": "DAR_UP_T33_VI23"},/* -- @@value L2 UPS 3 Input Vd(V)-----*/
                                        { "channelName": "DAR_UP_T33_VI31"}/* -- @@value L3 UPS 3 Input Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T33_VI1"},/* -- @@value L1 UPS 3 Input Vp(V)-----*/
                                        { "channelName": "DAR_UP_T33_VI2"},/* -- @@value L2 UPS 3 Input Vp(V)----*/
                                        { "channelName": "DAR_UP_T33_VI3"}/* -- @@value L3 UPS 3 Input Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "DAR_UP_T33_I11"},/* -- @@value L1 UPS 3 Input I(A)----*/
                                        { "channelName": "DAR_UP_T33_I12"},/* -- @@value L2 UPS 3 Input I(A)----*/
                                        { "channelName": "DAR_UP_T33_I13"}/* -- @@value L3 UPS 3 Input I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Input kVA----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Input kVA----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Input kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Input kW----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Input kW----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Input kW----*/
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Bypass",
                            "values":[
                                {"name":"pf", "channelName": "xxx"},/* -- @@value  pf----*/
                                {"name":"kWh", "channelName": "xxx"},/* -- @@value  kVA----*/
                                {"name":"Time", "channelName": "xxx"},/* -- @@value Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Bypass Vd(V)----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Bypass Vd(V)-----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Bypass Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Bypass Vp(V)-----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Bypass Vp(V)----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Bypass Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Bypass I(A)----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Bypass I(A)----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Bypass I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Bypass kVA----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Bypass kVA----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Bypass kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Bypass kW----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Bypass kW----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Bypass kW----*/
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Output",
                            "values":[
                                {"name":"pf", "channelName": "xxx"},/* -- @@value  pf----*/
                                {"name":"kWh", "channelName": "xxx"},/* -- @@value  kVA----*/
                                {"name":"Time", "channelName": "xxx"},/* -- @@value Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T33_VO12"},/* -- @@value L1 UPS 3 Output Vd(V)----*/
                                        { "channelName": "DAR_UP_T33_VO23"},/* -- @@value L2 UPS 3 Output Vd(V)-----*/
                                        { "channelName": "DAR_UP_T33_VO31"}/* -- @@value L3 UPS 3 Output Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T33_VO1"},/* -- @@value L1 UPS 3 Output Vp(V)-----*/
                                        { "channelName": "DAR_UP_T33_VO2"},/* -- @@value L2 UPS 3 Output Vp(V)----*/
                                        { "channelName": "DAR_UP_T33_VO2"}/* -- @@value L3 UPS 3 Output Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "DAR_UP_T33_I21"},/* -- @@value L1 UPS 3 Output I(A)----*/
                                        { "channelName": "DAR_UP_T33_I22"},/* -- @@value L2 UPS 3 Output I(A)----*/
                                        { "channelName": "DAR_UP_T33_I23"}/* -- @@value L3 UPS 3 Output I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Output kVA----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Output kVA----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Output kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx"},/* -- @@value L1 UPS 3 Output kW----*/
                                        { "channelName": "xxx"},/* -- @@value L2 UPS 3 Output kW----*/
                                        { "channelName": "xxx"}/* -- @@value L3 UPS 3 Output kW----*/
                                    ]
                                }
                            ]
                        }
                    ],
                    "Battery": {
                        "values": [
                                {"name": "Volt","channelName": "xxx"},
                                {"name": "Current","channelName": "xxx"},
                                {"name": "Percent","channelName": "xxx" },
                                {"name": "Backup Time", "channelName": "xxx"},
                                {"name": "Temperature","channelName": "xxx"}
                            ]
                    }
                }],/*------------------------------ / data UPS 3 --------------------------*/
            /*------------------------------ data UPS 4 --------------------------*/
            "DAR_UP_T34": [
                {"code": "DAR_UP_T34",
                    "status": [
                        /*--------- block Status ----------*/
                        {
                            "datas": [
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                 {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                 {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}}
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "datas": [
                                 {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                 {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}},
                                {"value": 0,"icon": "fa-li fa fa-circle","status": { "channelName": "xxx"}}
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ],
                    "Parameters": [
                        {
                            "name": "Input",
                            "values":[
                                {"name":"pf", "channelName": "xxx"},/* -- @@value  kVA----*/
                                {"name":"Time", "channelName": "DAR_UP_T34_min"},/* -- @@value Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T34_VI12"},/* -- @@value L1 UPS 4 Input Vd(V)----*/
                                        { "channelName": "DAR_UP_T34_VI23"},/* -- @@value L2 UPS 4 Input Vd(V)-----*/
                                        { "channelName": "DAR_UP_T34_VI31"}/* -- @@value L3 UPS 4 Input Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T34_VI1"},/* -- @@value L1 UPS 4 Input Vp(V)-----*/
                                        { "channelName": "DAR_UP_T34_VI2"},/* -- @@value L2 UPS 4 Input Vp(V)----*/
                                        { "channelName": "DAR_UP_T34_VI3"}/* -- @@value L3 UPS 4 Input Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "DAR_UP_T34_I11"},/* -- @@value L1 UPS 4 Input I(A)----*/
                                        { "channelName": "DAR_UP_T34_I12", "value": 0 },/* -- @@value L2 UPS 4 Input I(A)----*/
                                        { "channelName": "DAR_UP_T34_I13", "value": 0 }/* -- @@value L3 UPS 4 Input I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Input kVA----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Input kVA----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Input kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Input kW----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Input kW----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Input kW----*/
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Bypass",
                            "values":[
                                {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Bypass Vd(V)----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Bypass Vd(V)-----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Bypass Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Bypass Vp(V)-----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Bypass Vp(V)----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Bypass Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Bypass I(A)----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Bypass I(A)----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Bypass I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Bypass kVA----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Bypass kVA----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Bypass kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Bypass kW----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Bypass kW----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Bypass kW----*/
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Output",
                            "values":[
                                {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                {"name":"Time", "channelName": "DAR_UP_T34_min", "value": 0, "unit": "min"},/* -- @@value Time----*/
                            ],
                            "data": [
                                {
                                    "name": "Vd",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T34_VO12", "value": 0 },/* -- @@value L1 UPS 4 Output Vd(V)----*/
                                        { "channelName": "DAR_UP_T34_VO23", "value": 0 },/* -- @@value L2 UPS 4 Output Vd(V)-----*/
                                        { "channelName": "DAR_UP_T34_VO31", "value": 0 }/* -- @@value L3 UPS 4 Output Vd(V)-----*/
                                    ]
                                },
                                {
                                    "name": "Vp",
                                    "unit": "V",
                                    "values": [
                                        { "channelName": "DAR_UP_T34_VO1", "value": 0 },/* -- @@value L1 UPS 4 Output Vp(V)-----*/
                                        { "channelName": "DAR_UP_T34_VO2", "value": 0 },/* -- @@value L2 UPS 4 Output Vp(V)----*/
                                        { "channelName": "DAR_UP_T34_VO2", "value": 0 }/* -- @@value L3 UPS 4 Output Vp(V)----*/
                                    ]
                                },
                                {
                                    "name": "I",
                                    "unit": "A",
                                    "values": [
                                        { "channelName": "DAR_UP_T34_I21", "value": 0 },/* -- @@value L1 UPS 4 Output I(A)----*/
                                        { "channelName": "DAR_UP_T34_I22", "value": 0 },/* -- @@value L2 UPS 4 Output I(A)----*/
                                        { "channelName": "DAR_UP_T34_I23", "value": 0 }/* -- @@value L3 UPS 4 Output I(A)----*/
                                    ]
                                },
                                {
                                    "name": "kVA",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Output kVA----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Output kVA----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Output kVA----*/
                                    ]
                                },
                                {
                                    "name": "kW",
                                    "unit": "",
                                    "values": [
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L1 UPS 4 Output kW----*/
                                        { "channelName": "xxx", "value": 0 },/* -- @@value L2 UPS 4 Output kW----*/
                                        { "channelName": "xxx", "value": 0 }/* -- @@value L3 UPS 4 Output kW----*/
                                    ]
                                }
                            ]
                        }
                    ],
                    "Battery": {
                        "values": [
                                {"name": "Volt","channelName": "xxx"},
                                {"name": "Current","channelName": "xxx"},
                                {"name": "Percent","channelName": "xxx" },
                                {"name": "Backup Time", "channelName": "xxx"},
                                {"name": "Temperature","channelName": "xxx"}
                            ]
                    }
                }],/*------------------------------ / data UPS 4 --------------------------*/
            /* ----------------------------- data Rectifier system --------------------*/
            DAR_RE: [
                {
                    url: "detail/DAR_RE",
                    code: "DAR_RE_RE1",
                    "status": { "channelName": "xxx"},/* -- @@@value REC 1 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_RE_RE1_psTotalLoadCurrent"},/* -- @@value REC 1 (A)----*/
                    value2: { "channelName": "xxx"}/* -- @@value REC 1 (kVA)----*/
                },
                {
                    url: "detail/DAR_RE",
                    code: "DAR_RE_RE2",
                    "status": { "channelName": "xxx"},/* -- @@@value REC 2 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_RE_RE2_psTotalLoadCurrent"},/* -- @@value REC 2 (A)----*/
                    value2: { "channelName": "xxx"}/* -- @@value REC 2 (kVA)----*/
                },
                {
                    url: "detail/DAR_RE",
                    code: "DAR_RE_RE3",
                    "status": { "channelName": "xxx"},/* -- @@@value REC 3 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_RE_RE3_psTotalLoadCurrent"},/* -- @@value REC 3 (A)----*/
                    value2: { "channelName": "xxx"}/* -- @@value REC 3 (kVA)----*/
                },
                {
                    url: "detail/DAR_RE",
                    code: "DAR_RE_RE4",
                    "status": { "channelName": "xxx"},/* -- @@@value REC 4 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_RE_RE4_psTotalLoadCurrent"},/* -- @@value REC 4 (A)----*/
                    value2: { "channelName": "xxx"}/* -- @@value REC 4 (kVA)----*/
                },
                {
                    url: "detail/DAR_RE",
                    code: "DAR_RE_RE5",
                    "status": { "channelName": "xxx"},/* -- @@@value REC 5 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_RE_RE5_psTotalLoadCurrent"},/* -- @@value REC 5 (A)----*/
                    value2: { "channelName": "xxx"}/* -- @@value REC 5 (kVA)----*/
                },
                {
                    url: "detail/DAR_RE",
                    code: "DAR_RE_RE6",
                    "status": { "channelName": "xxx"},/* -- @@@value REC 6 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_RE_RE6_psTotalLoadCurrent"},/* -- @@value REC 6 (A)----*/
                    value2: { "channelName": "xxx"}/* -- @@value REC 6 (kVA)----*/
                },
                {
                    url: "detail/DAR_RE",
                    code: "DAR_RE_RE7",
                    "status": { "channelName": "xxx"},/* -- @@@value REC 7 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_RE_RE7_psTotalLoadCurrent"},/* -- @@value REC 7 (A)----*/
                    value2: { "channelName": "xxx"}/* -- @@value REC 7 (kVA)----*/
                },
                {
                    url: "detail/DAR_RE",
                    code: "DAR_RE_RE8",
                    "status": { "channelName": "xxx"},/* -- @@@value REC 8 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_RE_RE8_psTotalLoadCurrent"},/* -- @@value REC 8 (A)----*/
                    value2: { "channelName": "xxx"}/* -- @@value REC 8 (kVA)----*/
                }
            ],
            /* ----------------------------- /data Rectifier system --------------------*/
            /* ----------------------------- data DAR_RE_RE1 --------------------*/
            DAR_RE_RE1: [
                {
                    "name": "RECTIFIER 1",/* -- @@value ----*/
                    "code": "DAR_RE_RE1",
                    "description": " DEUTZ 500kVA",/* -- @@value ----*/
                    "System" : "Rectifier System",
                    "images": "images/UPSEmerson.png",/* -- @@value image REC 1----*/
					"Parameters": [
                                {
                                    "name": "#",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 1 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 1 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 1 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_RE_RE1_psInputLineAVoltage", "value": 0 },/* -- @@@value L1 REC 1 Vp(V)-----*/
                                                { "channelName": "DAR_RE_RE1_psInputLineBVoltage", "value": 0 },/* -- @@@value L2 REC 1 Vp(V)----*/
                                                { "channelName": "DAR_RE_RE1_psInputLineCVoltage", "value": 0 }/* -- @@@value L3 REC 1 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 1 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 1 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 1 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 1 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 1 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 1 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 1 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 1 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 1 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                    "status": 0
                }
            ],
            /* ----------------------------- data DAR_RE_RE1 --------------------*/
            /* ----------------------------- data DAR_RE_RE2 --------------------*/
            DAR_RE_RE2: [
                {
                    "name": "RECTIFIER 2",/* -- @@value ----*/
                    "code": "DAR_RE_RE3",
                    "description": " DEUTZ 500kVA",/* -- @@value ----*/
                    "System" : "Rectifier System",
                    "images": "images/UPSEmerson.png",/* -- @@value image REC 2----*/
                    "status": 0,
					"Parameters": [
                                {
                                    "name": "#",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 2 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 2 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_RE_RE2_psInputLineAVoltage", "value": 0 },/* -- @@@value L1 REC 2 Vp(V)-----*/
                                                { "channelName": "DAR_RE_RE2_psInputLineBVoltage", "value": 0 },/* -- @@@value L2 REC 2 Vp(V)----*/
                                                { "channelName": "DAR_RE_RE2_psInputLineCVoltage", "value": 0 }/* -- @@@value L3 REC 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 2 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 2 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 2 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 2 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 2 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 2 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 2 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 2 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE2--------------------*/
            /* ----------------------------- data DAR_RE_RE3 --------------------*/
            DAR_RE_RE3: [
                {
                    "name": "RECTIFIER 3",/* -- @@value ----*/
                    "code": "DAR_RE_RE3",
                    "description": " DEUTZ 500kVA",/* -- @@value ----*/
                    "System" : "Rectifier System",
                    "images": "images/UPSEmerson.png",/* -- @@value image REC 3----*/
                    "status": 0,
					"Parameters": [
                                {
                                    "name": "#",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 3 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 3 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_RE_RE3_psInputLineAVoltage", "value": 0 },/* -- @@@value L1 REC 3 Vp(V)-----*/
                                                { "channelName": "DAR_RE_RE3_psInputLineBVoltage", "value": 0 },/* -- @@@value L2 REC 3 Vp(V)----*/
                                                { "channelName": "DAR_RE_RE3_psInputLineCVoltage", "value": 0 }/* -- @@@value L3 REC 3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 3 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 3 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 3 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 3 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 3 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 3 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 3 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE3 --------------------*/
            /* ----------------------------- data DAR_RE_RE4 --------------------*/
            DAR_RE_RE4: [
                {
                    "name": "RECTIFIER 4",/* -- @@value ----*/
                    "code": "DAR_RE_RE4",
                    "description": " DEUTZ 500kVA",/* -- @@value ----*/
                    "System" : "Rectifier System",
                    "images": "images/UPSEmerson.png",/* -- @@value image REC 4----*/
                    "status": 0,
					"Parameters": [
                                {
                                    "name": "#",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 4 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 4 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 4 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_RE_RE4_psInputLineAVoltage", "value": 0 },/* -- @@@value L1 REC 4 Vp(V)-----*/
                                                { "channelName": "DAR_RE_RE4_psInputLineBVoltage", "value": 0 },/* -- @@@value L2 REC 4 Vp(V)----*/
                                                { "channelName": "DAR_RE_RE4_psInputLineCVoltage", "value": 0 }/* -- @@@value L3 REC 4 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 4 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 4 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 4 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 4 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 4 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 4 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 4 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 4 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 4 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE4 --------------------*/
            /* ----------------------------- data DAR_RE_RE5 --------------------*/
            DAR_RE_RE5: [
                {
                    "name": "RECTIFIER 5",/* -- @@value ----*/
                    "code": "DAR_RE_RE5",
                    "description": " DEUTZ 500kVA",
                    "System" : "Rectifier System",/* -- @@value ----*/
                    "images": "images/UPSEmerson.png",/* -- @@value image REC 5----*/
                    "status": 0,
					"Parameters": [
                                {
                                    "name": "#",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 5 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 5 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 5 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_RE_RE5_psInputLineAVoltage", "value": 0 },/* -- @@@value L1 REC 5 Vp(V)-----*/
                                                { "channelName": "DAR_RE_RE5_psInputLineBVoltage", "value": 0 },/* -- @@@value L2 REC 5 Vp(V)----*/
                                                { "channelName": "DAR_RE_RE5_psInputLineCVoltage", "value": 0 }/* -- @@@value L3 REC 5 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 5 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 5 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 5 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 5 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 5 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 5 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 5 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 5 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 5 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE5 --------------------*/
            /* ----------------------------- data DAR_RE_RE6 --------------------*/
            DAR_RE_RE6: [
                {
                    "name": "RECTIFIER 6",/* -- @@value ----*/
                    "code": "DAR_RE_RE6",
                    "description": " DEUTZ 500kVA",/* -- @@value ----*/
                    "System" : "Rectifier System",
                    "images": "images/UPSEmerson.png",/* -- @@value image REC 6----*/
                    "status": 0,
					"Parameters": [
                                {
                                    "name": "#",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 6 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 6 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 6 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_RE_RE6_psInputLineAVoltage", "value": 0 },/* -- @@@value L1 REC 6 Vp(V)-----*/
                                                { "channelName": "DAR_RE_RE6_psInputLineBVoltage", "value": 0 },/* -- @@@value L2 REC 6 Vp(V)----*/
                                                { "channelName": "DAR_RE_RE6_psInputLineCVoltage", "value": 0 }/* -- @@@value L3 REC 6 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 6 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 6 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 6 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 6 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 6 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 6 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 6 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 6 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 6 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE6 --------------------*/
            /* ----------------------------- data DAR_RE_RE7 --------------------*/
            DAR_RE_RE7: [
                {
                    "name": "RECTIFIER 7",/* -- @@value ----*/
                    "code": "DAR_RE_RE7",
                    "description": " DEUTZ 500kVA",/* -- @@value ----*/
                    "System" : "Rectifier System",
                    "images": "images/UPSEmerson.png",/* -- @@value image REC 7----*/
                    "status": 0,
					"Parameters": [
                                {
                                    "name": "#",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 7 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 7 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 7 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_RE_RE7_psInputLineAVoltage", "value": 0 },/* -- @@@value L1 REC 7 Vp(V)-----*/
                                                { "channelName": "DAR_RE_RE7_psInputLineBVoltage", "value": 0 },/* -- @@@value L2 REC 7 Vp(V)----*/
                                                { "channelName": "DAR_RE_RE7_psInputLineCVoltage", "value": 0 }/* -- @@@value L3 REC 7 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 7 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 7 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 7 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 7 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 7 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 7 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 7 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 7 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 7 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE7 --------------------*/
            /* ----------------------------- data DAR_RE_RE8 --------------------*/
            DAR_RE_RE8: [
                {
                    "name": "RECTIFIER 8",/* -- @@value ----*/
                    "code": "DAR_RE_RE8",
                    "description": " DEUTZ 500kVA",/* -- @@value ----*/
                    "System" : "Rectifier System",
                    "images": "images/UPSEmerson.png",/* -- @@value image REC 8----*/
                    "status": 0,
					"Parameters": [
                                {
                                    "name": "#",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 8 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 8 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 8 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_RE_RE8_psInputLineAVoltage", "value": 0 },/* -- @@@value L1 REC 8 Vp(V)-----*/
                                                { "channelName": "DAR_RE_RE8_psInputLineBVoltage", "value": 0 },/* -- @@@value L2 REC 8 Vp(V)----*/
                                                { "channelName": "DAR_RE_RE8_psInputLineCVoltage", "value": 0 }/* -- @@@value L3 REC 8 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 8 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 8 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 8 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 8 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 8 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 8 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 REC 8 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 REC 8 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 REC 8 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE8 --------------------*/
            /* ----------------------------- data DHCX system --------------------*/
            DAR_PI: [
                {
                    url: "detail/DAR_PI",
                    code: "DAR_PI_DX1",
                    "status": { "channelName": "xxx"},/* -- @@@value DHCX 1 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PI_DX1_RAT"},/* -- @@value DHCX 1 (°C)----*/
                    value2: { "channelName": "DAR_PI_DX1_RAH"}/* -- @@value DHCX 1 (%RH)----*/
                },
                {
                    url: "detail/DAR_PI",
                    code: "DAR_PI_DX2",
                    "status": { "channelName": "xxx"},/* -- @@@value DHCX 2 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PI_DX2_RAT"},/* -- @@value DHCX 2 (°C)----*/
                    value2: { "channelName": "DAR_PI_DX2_RAH"}/* -- @@value DHCX 2 (%RH)----*/
                },
                {
                    url: "detail/DAR_PI",
                    code: "DAR_PI_DX3",
                    "status": { "channelName": "xxx"},/* -- @@@value DHCX 3 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PI_DX3_RAT"},/* -- @@value DHCX 3 (°C)----*/
                    value2: { "channelName": "DAR_PI_DX3_RAH"}/* -- @@value DHCX 3 (%RH)----*/
                },
                {
                    url: "detail/DAR_PI",
                    code: "DAR_PI_DX4",
                    "status": { "channelName": "xxx"},/* -- @@@value DHCX 4 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PI_DX4_RAT"},/* -- @@value DHCX 4 (°C)----*/
                    value2: { "channelName": "DAR_PI_DX4_RAH"}/* -- @@value DHCX 4 (%RH)----*/
                },
                {
                    url: "detail/DAR_PI",
                    code: "DAR_PI_DX5",
                    "status": { "channelName": "xxx"},/* -- @@@value DHCX 5 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PI_DX5_RAT"},/* -- @@value DHCX 5 (°C)----*/
                    value2: { "channelName": "DAR_PI_DX5_RAH"}/* -- @@value DHCX 5 (%RH)----*/
                },
                {
                    url: "detail/DAR_PI",
                    code: "DAR_PI_DX6",
                    "status": { "channelName": "xxx"},/* -- @@@value DHCX 6 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PI_DX6_RAT"},/* -- @@value DHCX 6 (°C)----*/
                    value2: { "channelName": "DAR_PI_DX6_RAH"}/* -- @@value DHCX 6 (%RH)----*/
                },
                {
                    url: "detail/DAR_PI",
                    code: "DAR_PI_DX7",
                    "status": { "channelName": "xxx"},/* -- @@@value DHCX 7 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PI_DX7_RAT"},/* -- @@value DHCX 7 (°C)----*/
                    value2: { "channelName": "DAR_PI_DX7_RAH"}/* -- @@value DHCX 7 (%RH)----*/
                },
                {
                    url: "detail/DAR_PI",
                    code: "DAR_PI_DX8",
                    "status": { "channelName": "xxx"},/* -- @@@value DHCX 8 status----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PI_DX8_RAT"},/* -- @@value DHCX 8 (°C)----*/
                    value2: { "channelName": "DAR_PI_DX8_RAH"}/* -- @@value DHCX 8 (%RH)----*/
                }
            ],
            /* ----------------------------- /data DHCX system --------------------*/
            /* ----------------------------- data DAR_PI_DX1 --------------------*/
            DAR_PI_DX1: [
                {
                    "name": "DHCX 1",/* -- @@value ----*/
                    "code": "DAR_PI_DX1",
                    "description": "CyberAir 3",/* -- @@value ----*/
                    "System" : "PI System",
                    "images": "images/stulz.png",/* -- @@value image DHCX 1----*/
                    "status": [
                          {
                            "name": "System On (Fan)",
                            "datas": [
                                /*--------- Status ----------*/
                                {"icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX1_UnitHeat", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 2",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX1_UnitHeat", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Dehumidification",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX1_UnitDehum", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Humidification",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX1_UnitHum", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Temperature",
                                    "icon": "fa-li fa fa-tint",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX1_RAT", "value": 0, "unit": "°C" }/* -- @@@value DHCX 1----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Humidity",
                                    "icon": "fa-li fa fa-sun-o",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX1_RAH", "value": 0, "unit": "%RH" }/* -- @@@value DHCX 1----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Run Hours",
                                    "icon": "fa-li fa fa-calendar",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX1_UnitRunHr", "value": 0, "unit": "days" }/* -- @@@value DHCX 1----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Unit on Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX1_ComAlm", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX1_RATHH", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Low Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX1_RATLL", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX1_RAHHH", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    "name": "Low Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX1_RAHLL", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Clogged Filter Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Flooding Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Air Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Heater Overheating Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Water Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- /data DAR_PI_DX1 --------------------*/
            /* ----------------------------- data DAR_PI_DX2 --------------------*/
            DAR_PI_DX2: [
                {
                    "name": "DHCX 2",/* -- @@value ----*/
                    "code": "DAR_PI_DX2",
                    "description": "CyberAir 3",/* -- @@value ----*/
                    "System" : "PI System",
                    "images": "images/stulz.png",/* -- @@value image DHCX 2----*/
                    "status": [
                          /*--------- block Status ----------*/
                        {
                            "name": "System On (Fan)",
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 1",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX2_UnitHeat", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 2",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX2_UnitHeat", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Dehumidification",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX2_UnitDehum", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Humidification",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX2_UnitHum", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Temperature",
                                    "icon": "fa-li fa fa-tint",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX2_RAT", "value": 0, "unit": "°C" }/* -- @@@value DHCX 2----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Humidity",
                                    "icon": "fa-li fa fa-sun-o",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX2_RAH", "value": 0, "unit": "%RH" }/* -- @@@value DHCX 2----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Run Hours",
                                    "icon": "fa-li fa fa-calendar",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX2_UnitRunHr", "value": 0, "unit": "days" }/* -- @@@value DHCX 2----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Unit on Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX2_ComAlm", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX2_RATHH", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Low Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX2_RATLL", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX2_RAHHH", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    "name": "Low Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX2_RAHLL", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Clogged Filter Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Flooding Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Air Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Heater Overheating Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Water Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- /data DAR_PI_DX2 --------------------*/
            /* ----------------------------- data DAR_PI_DX3 --------------------*/
            DAR_PI_DX3: [
                {
                    "name": "DHCX 3",/* -- @@value ----*/
                    "code": "DAR_PI_DX3",
                    "description": "CyberAir 3",/* -- @@value ----*/
                    "System" : "PI System",
                    "images": "images/stulz.png",/* -- @@value image DHCX 3----*/
                    "status": [
                          /*--------- block Status ----------*/
                        {
                            "name": "System On (Fan)",
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 1",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX3_UnitHeat", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 2",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX3_UnitHeat", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Dehumidification",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX3_UnitDehum", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Humidification",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX3_UnitHum", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Temperature",
                                    "icon": "fa-li fa fa-tint",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX3_RAT", "value": 0, "unit": "°C" }/* -- @@@value DHCX 3----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Humidity",
                                    "icon": "fa-li fa fa-sun-o",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX3_RAH", "value": 0, "unit": "%RH" }/* -- @@@value DHCX 3----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Run Hours",
                                    "icon": "fa-li fa fa-calendar",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX3_UnitRunHr", "value": 0, "unit": "days" }/* -- @@@value DHCX 3----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Unit on Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX3_ComAlm", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX3_RATHH", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Low Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX3_RATLL", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX3_RAHHH", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    "name": "Low Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX3_RAHLL", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Clogged Filter Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 3----*/
                                    "value": 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Flooding Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Air Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Heater Overheating Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Water Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_PI_DX3 --------------------*/
            /* ----------------------------- data DAR_PI_DX4 --------------------*/
            DAR_PI_DX4: [
                {
                    "name": "DHCX 4",/* -- @@value ----*/
                    "code": "DAR_PI_DX4",
                    "description": "CyberAir 3",/* -- @@value ----*/
                    "System" : "PI System",
                    "images": "images/stulz.png",/* -- @@value image DHCX 4----*/
                    "status": [
                          /*--------- block Status ----------*/
                        {
                            "name": "System On (Fan)",
                            
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 1",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX4_UnitHeat", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 2",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX4_UnitHeat", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Dehumidification",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX4_UnitDehum", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Humidification",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX4_UnitHum", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Temperature",
                                    "icon": "fa-li fa fa-tint",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX4_RAT", "value": 0, "unit": "°C" }/* -- @@@value DHCX 4----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Humidity",
                                    "icon": "fa-li fa fa-sun-o",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX4_RAH", "value": 0, "unit": "%RH" }/* -- @@@value DHCX 4----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Run Hours",
                                    "icon": "fa-li fa fa-calendar",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX4_UnitRunHr", "value": 0, "unit": "days" }/* -- @@@value DHCX 4----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Unit on Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX4_ComAlm", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX4_RATHH", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Low Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX4_RATLL", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX4_RAHHH", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    "name": "Low Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX4_RAHLL", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Clogged Filter Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Flooding Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Air Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Heater Overheating Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Water Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_PI_DX4 --------------------*/
            /* ----------------------------- data DAR_PI_DX5 --------------------*/
            DAR_PI_DX5: [
                {
                    "name": "DHCX 5",/* -- @@value ----*/
                    "code": "DAR_PI_DX5",
                    "description": "CyberAir 3",/* -- @@value ----*/
                    "System" : "PI System",
                    "images": "images/stulz.png",/* -- @@value image DHCX 5----*/
                    "status": [
                          /*--------- block Status ----------*/
                        {
                            "name": "System On (Fan)",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 1",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX5_UnitHeat", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 2",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX5_UnitHeat", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Dehumidification",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX5_UnitDehum", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Humidification",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX5_UnitHum", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Temperature",
                                    "icon": "fa-li fa fa-tint",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX5_RAT", "value": 0, "unit": "°C" }/* -- @@@value DHCX 5----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Humidity",
                                    "icon": "fa-li fa fa-sun-o",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX5_RAH", "value": 0, "unit": "%RH" }/* -- @@@value DHCX 5----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Run Hours",
                                    "icon": "fa-li fa fa-calendar",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX5_UnitRunHr", "value": 0, "unit": "days" }/* -- @@@value DHCX 5----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Unit on Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX5_ComAlm", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX5_RATHH", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Low Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX5_RATLL", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX5_RAHHH", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    "name": "Low Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX5_RAHLL", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Clogged Filter Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Flooding Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Air Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Heater Overheating Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Water Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_PI_DX5 --------------------*/
            /* ----------------------------- data DAR_PI_DX6 --------------------*/
            DAR_PI_DX6: [
                {
                    "name": "DHCX 6",/* -- @@value ----*/
                    "code": "DAR_PI_DX6",
                    "description": "CyberAir 3",/* -- @@value ----*/
                    "System" : "PI System",
                    "images": "images/stulz.png",/* -- @@value image DHCX 6----*/
                    "status": [
                          /*--------- block Status ----------*/
                        {
                            "name": "System On (Fan)",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 1",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX6_UnitHeat", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 2",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX6_UnitHeat", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Dehumidification",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX6_UnitDehum", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Humidification",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX6_UnitHum", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Temperature",
                                    "icon": "fa-li fa fa-tint",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX6_RAT", "value": 0, "unit": "°C" }/* -- @@@value DHCX 6----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Humidity",
                                    "icon": "fa-li fa fa-sun-o",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX6_RAH", "value": 0, "unit": "%RH" }/* -- @@@value DHCX 6----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Run Hours",
                                    "icon": "fa-li fa fa-calendar",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX6_UnitRunHr", "value": 0, "unit": "days" }/* -- @@@value DHCX 6----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Unit on Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX6_ComAlm", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX6_RATHH", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Low Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX6_RATLL", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX6_RAHHH", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    "name": "Low Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX6_RAHLL", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Clogged Filter Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Flooding Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Air Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Heater Overheating Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Water Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_PI_DX6 --------------------*/
            /* ----------------------------- data DAR_PI_DX7 --------------------*/
            DAR_PI_DX7: [
                {
                    "name": "DHCX 7",/* -- @@value ----*/
                    "code": "DAR_PI_DX7",
                    "description": "CyberAir 3",/* -- @@value ----*/
                    "System" : "PI System",
                    "images": "images/stulz.png",/* -- @@value image DHCX 7----*/
                    "status": [
                          /*--------- block Status ----------*/
                        {
                            "name": "System On (Fan)",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 1",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX7_UnitHeat", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 2",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX7_UnitHeat", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Dehumidification",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX7_UnitDehum", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Humidification",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX7_UnitHum", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Temperature",
                                    "icon": "fa-li fa fa-tint",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX7_RAT", "value": 0, "unit": "°C" }/* -- @@@value DHCX 7----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Humidity",
                                    "icon": "fa-li fa fa-sun-o",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX7_RAH", "value": 0, "unit": "%RH" }/* -- @@@value DHCX 7----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Run Hours",
                                    "icon": "fa-li fa fa-calendar",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX7_UnitRunHr", "value": 0, "unit": "days" }/* -- @@@value DHCX 7----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Unit on Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX7_ComAlm", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX7_RATHH", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Low Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX7_RATLL", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX7_RAHHH", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    "name": "Low Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX7_RAHLL", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Clogged Filter Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Flooding Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Air Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Heater Overheating Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Water Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_PI_DX7 --------------------*/
            /* ----------------------------- data DAR_PI_D8 --------------------*/
            DAR_PI_DX8: [
                {
                    "name": "DHCX 8",/* -- @@value ----*/
                    "code": "DAR_PI_DX8",
                    "description": "CyberAir 3",/* -- @@value ----*/
                    "System" : "PI System",
                    "images": "images/stulz.png",/* -- @@value image DHCX 8----*/
                    "status": [
                          /*--------- block Status ----------*/
                        {
                            "name": "System On (Fan)",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 1",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX8_UnitHeat", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "El. Heater 2",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX8_UnitHeat", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Dehumidification",
                                    "icon": "fa-li fa fa-circle",
                                    "status": { "channelName": "DAR_PI_DX8_UnitDehum", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Humidification",
                                    "icon": "fa-li fa fa-circle-o",
                                    "status": { "channelName": "DAR_PI_DX8_UnitHum", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Temperature",
                                    "icon": "fa-li fa fa-tint",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX8_RAT", "value": 0, "unit": "°C" }/* -- @@@value DHCX 8----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Room Humidity",
                                    "icon": "fa-li fa fa-sun-o",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX8_RAH", "value": 0, "unit": "%RH" }/* -- @@@value DHCX 8----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Run Hours",
                                    "icon": "fa-li fa fa-calendar",
                                    "status": 0,
                                    value : { "channelName": "DAR_PI_DX8_UnitRunHr", "value": 0, "unit": "days" }/* -- @@@value DHCX 8----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Unit on Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX8_ComAlm", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX8_RATHH", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Low Room Temperature Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX8_RATLL", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "High Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX8_RAHHH", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    "name": "Low Room Humidity Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_PI_DX8_RAHLL", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Clogged Filter Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Flooding Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Air Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Heater Overheating Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "Loss of Water Flow Alarm",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_PI_DX8 --------------------*/

            /* ----------------------------- /data Power switchboard  --------------------**/
            DAR_PW: [
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_LV1",
                    "status": { "channelName": "xxx"},/* -- @@@value LV 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_LV1_PM117_kVA"}/* -- @@value LV 1 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_LV2",
                    "status": { "channelName": "xxx"},/* -- @@@value LV 2----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_LV2_PM118_kVA"}/* -- @@value LV 2 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_BU1",
                    "status": { "channelName": "xxx"},/* -- @@@value TBU 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_BU1_PM111_kVA"}/* -- @@value TBU 1 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_BU2",
                    "status": { "channelName": "xxx"},/* -- @@@value TBU 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_BU2_PM114_kVA"}/* -- @@value TBU 2 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_AT1",
                    "status": { "channelName": "xxx"},/* -- @@@value ATS 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_AT1_PM112_kVA"}/* -- @@value ATS 1 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_AT2",
                    "status": { "channelName": "xxx"},/* -- @@@value ATS 2----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_AT2_PM113_kVA"}/* -- @@value ATS 2 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_TC1",
                    "status": { "channelName": "xxx"},/* -- @@@value TCM ----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_TC1_PM115_kVA"}/* -- @@value TCM ----*/
                },

				{
                    url: "detail/DAR_PW",
                    code: "DAR_PW_EM1",
                    "status": { "channelName": "xxx"},/* -- @@@value EMDB 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_EM1_PM108_kVA"}/* -- @@value EMDB 1 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_AC1",
                    "status": { "channelName": "xxx"},/* -- @@@value ACDB 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_AC1_PM107_kVA"}/* -- @@value ACDB 1 ----*/
                },
				{
                    url: "detail/DAR_PW",
                    code: "DAR_PW_AC2",
                    "status": { "channelName": "xxx"},/* -- @@@value ACDB 2----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_UP2_PM110_kVA"}/* -- @@value ACDB 2 ----*/
                },
				{
                    url: "detail/DAR_PW",
                    code: "DAR_PW_UP1",
                    "status": { "channelName": "xxx"},/* -- @@@value UPSDB 1----*/
                    progress: 0,
                    value1: { "channelName": "xxx"}/* -- @@value UPSDB 1 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_UP2",
                    "status": { "channelName": "xxx"},/* -- @@@value UPSDB 2----*/
                    progress: 0,
                    value1: { "channelName": "xxx"}/* -- @@value UPSDB 2 ----*/
                },
				{
                    url: "detail/DAR_PW",
                    code: "DAR_PW_DB1",
                    "status": { "channelName": "xxx"},/* -- @@@value DCDB 1----*/
                    progress: 0,
                    value1: { "channelName": "xxx"}/* -- @@value DCDB 1 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_DB2",
                    "status": { "channelName": "xxx"},/* -- @@@value DCDB 2----*/
                    progress: 0,
                    value1: { "channelName": "xxx"}/* -- @@value DCDB 2 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_UD1",
                    "status": { "channelName": "xxx"},/* -- @@@value UDB 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_UD1_PM101_kVA"}/* -- @@value UDB 1 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_UD2",
                    "status": { "channelName": "xxx"},/* -- @@@value UDB 2----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_UD2_PM103_kVA"}/* -- @@value UDB 2 ----*/
                },
				{
                    url: "detail/DAR_PW",
                    code: "DAR_PW_PU1",
                    "status": { "channelName": "xxx"},/* -- @@@value PDU 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_PU1_PM105_kVA"}/* -- @@value PDU 1 ----*/
                },
                {
                    url: "detail/DAR_PW",
                    code: "DAR_PW_PU2",
                    "status": { "channelName": "xxx"},/* -- @@@value PDU 2----*/
                    progress: 0,
                    value1: { "channelName": "DAR_PW_PU2_PM106_kVA"}/* -- @@value PDU 2 ----*/
                }
            ],
            DAR_PW_LV1: [
                {
                    "name": "LV 1",/* -- @@value ----*/
                    "code": "DAR_PW_LV1",
                    "description": " Low Voltage 1",/* -- @@value ----*/
                    "images": "images/dar_lv_1.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM117",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_LV1_PM117_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_LV1_PM117_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_LV1_PM117_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_LV1_PM117_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_LV1_PM117_V12", "value": 0 },/* -- @@@value L1 LV 1 Vd(V)----*/
                                                { "channelName": "DAR_PW_LV1_PM117_V23", "value": 0 },/* -- @@@value L2 LV 1 Vd(V)-----*/
                                                { "channelName": "DAR_PW_LV1_PM117_V31", "value": 0 }/* -- @@@value L3 LV 1 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_LV1_PM117_V1", "value": 0 },/* -- @@@value L1 LV 1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_LV1_PM117_V2", "value": 0 },/* -- @@@value L2 LV 1 Vp(V)----*/
                                                { "channelName": "DAR_PW_LV1_PM117_V3", "value": 0 }/* -- @@@value L3 LV 1 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_LV1_PM117_I1", "value": 0 },/* -- @@@value L1 LV 1 I(A)----*/
                                                { "channelName": "DAR_PW_LV1_PM117_I2", "value": 0 },/* -- @@@value L2 LV 1 I(A)----*/
                                                { "channelName": "DAR_PW_LV1_PM117_I3", "value": 0 }/* -- @@@value L3 LV 1 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_LV1_PM117_kVA1", "value": 0 },/* -- @@@value L1 LV 1 kVA----*/
                                                { "channelName": "DAR_PW_LV1_PM117_kVA2", "value": 0 },/* -- @@@value L2 LV 1 kVA----*/
                                                { "channelName": "DAR_PW_LV1_PM117_kVA3", "value": 0 }/* -- @@@value L3 LV 1 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_LV1_PM117_kW1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_LV1_PM117_kW2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_LV1_PM117_kW3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
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
                    "status": [
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Main CB: ON",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LV 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "SPD CB: On",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LV 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_LV2: [
                {
                    "name": "LV 2",/* -- @@value ----*/
                    "code": "DAR_PW_LV2",
                    "description": "Low Voltage 2",/* -- @@value ----*/
                    "images": "images/dar_lv_2.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM118",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_LV2_PM118_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_LV2_PM118_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_LV2_PM118_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_LV2_PM118_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_LV2_PM118_V12", "value": 0 },/* -- @@@value L1 LV 2 Vd(V)----*/
                                                { "channelName": "DAR_PW_LV2_PM118_V23", "value": 0 },/* -- @@@value L2 LV 2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_LV2_PM118_V31", "value": 0 }/* -- @@@value L3 LV 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_LV2_PM118_V1", "value": 0 },/* -- @@@value L1 LV 2 Vp(V)-----*/
                                                { "channelName": "DAR_PW_LV2_PM118_V2", "value": 0 },/* -- @@@value L2 LV 2 Vp(V)----*/
                                                { "channelName": "DAR_PW_LV2_PM118_V3", "value": 0 }/* -- @@@value L3 LV 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_LV2_PM118_I1", "value": 0 },/* -- @@@value L1 LV 2 I(A)----*/
                                                { "channelName": "DAR_PW_LV2_PM118_I2", "value": 0 },/* -- @@@value L2 LV 2 I(A)----*/
                                                { "channelName": "DAR_PW_LV2_PM118_I3", "value": 0 }/* -- @@@value L3 LV 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_LV2_PM118_kVA1", "value": 0 },/* -- @@@value L1 LV 2 kVA----*/
                                                { "channelName": "DAR_PW_LV2_PM118_kVA2", "value": 0 },/* -- @@@value L2 LV 2 kVA----*/
                                                { "channelName": "DAR_PW_LV2_PM118_kVA3", "value": 0 }/* -- @@@value L3 LV 2 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_LV2_PM118_kW1", "value": 0 },/* -- @@@value L1 LV 2 kW----*/
                                                { "channelName": "DAR_PW_LV2_PM118_kW2", "value": 0 },/* -- @@@value L2 LV 2 kW----*/
                                                { "channelName": "DAR_PW_LV2_PM118_kW3", "value": 0 }/* -- @@@value L3 LV 2 kW----*/
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
                    "status": [
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Main CB: ON",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LV 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "SPD CB: On",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LV 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        }
                        /*--------- /block Status ----------*/

                    ]
                }
            ],
            DAR_PW_DB2: [
                {
                    "name": "DCDB 2",/* -- @@value name DCDB 2 ----*/
                    "code": "DAR_PW_DB2",
                    "description": "DCDB 2 switchboard",/* -- @@value description DCDB 2 ----*/
                    "images": "images/dar_dcdb_2.png",/* -- @@value image DCDB 2 ----*/
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
                        /* @@@value note template */
                        /* block table template Status start*/
                        /* coppy start */
                        /*--------- block table template Status start ----------*/

                        /*--------- /block table template Status end ----------*/
                         /* coppy end */
                        /* block table template Status end*/
                    ]
                }
            ],
            DAR_PW_AC2: [
                {
                    "name": "ACDB 2",/* -- @@value name ACDB 2 ----*/
                    "code": "DAR_PW_AC2",
                    "description": "Switchboard",/* -- @@value description ACDB 2 ----*/
                    "images": "images/dar_acdb_2.png", /* -- @@value image ACDB 2 ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM110",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_UP2_PM110_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_UP2_PM110_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_UP2_PM110_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_UP2_PM110_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UP2_PM110_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_UP2_PM110_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_UP2_PM110_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UP2_PM110_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_UP2_PM110_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_UP2_PM110_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_UP2_PM110_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_UP2_PM110_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_UP2_PM110_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UP2_PM110_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_UP2_PM110_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_UP2_PM110_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UP2_PM110_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_UP2_PM110_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_UP2_PM110_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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
            DAR_PW_UP1: [
                {
                    "name": "UPSDB 1",/* -- @@value name UPSDB 1 ----*/
                    "code": "DAR_PW_UP1",
                    "description": "UPSDB 1 switchboard",/* -- @@value description UPSDB 1 ----*/
                    "images": "images/dar_upsdb_1.png",/* -- @@value image UPSDB 1 ----*/
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
            DAR_PW_DB1: [
                {
					"divs":[
						{"class1": "DB1Class1","channelName":"DAR_PW_DB1_OTB24_I00"},
						{"class1": "DB1Class2","channelName":"DAR_PW_DB1_OTB24_I01",'caption':"Volt: "},
						{"class1": "DB1Class3","channelName":"DAR_PW_DB1_OTB24_I02"},
						{"class1": "DB1Class4","channelName":"DAR_PW_DB1_OTB24_I03"},
						{"class1": "DB1Class5","channelName":"DAR_PW_DB1_OTB24_I04"}
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
            DAR_PW_PU2: [
                {
                    "name": "PDU 2",/* -- @@value ----*/
                    "code": "DAR_PW_PU2",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/UPSEmerson.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM106",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_PU2_PM106_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_PU2_PM106_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_PU2_PM106_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_PU2_PM106_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_PU2_PM106_V12", "value": 0 },/* -- @@@value L1 PDU 2 Vd(V)----*/
                                                { "channelName": "DAR_PW_PU2_PM106_V23", "value": 0 },/* -- @@@value L2 PDU 2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_PU2_PM106_V31", "value": 0 }/* -- @@@value L3 PDU 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_PU2_PM106_V1", "value": 0 },/* -- @@@value L1 PDU 2 Vp(V)-----*/
                                                { "channelName": "DAR_PW_PU2_PM106_V2", "value": 0 },/* -- @@@value L2 PDU 2 Vp(V)----*/
                                                { "channelName": "DAR_PW_PU2_PM106_V3", "value": 0 }/* -- @@@value L3 PDU 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_PU2_PM106_I1", "value": 0 },/* -- @@@value L1 PDU 2 I(A)----*/
                                                { "channelName": "DAR_PW_PU2_PM106_I2", "value": 0 },/* -- @@@value L2 PDU 2 I(A)----*/
                                                { "channelName": "DAR_PW_PU2_PM106_I3", "value": 0 }/* -- @@@value L3 PDU 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_PU2_PM106_kVA1", "value": 0 },/* -- @@@value L1 PDU 2 kVA----*/
                                                { "channelName": "DAR_PW_PU2_PM106_kVA2", "value": 0 },/* -- @@@value L2 PDU 2 kVA----*/
                                                { "channelName": "DAR_PW_PU2_PM106_kVA3", "value": 0 }/* -- @@@value L3 PDU 2 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_PU2_PM106_kW1", "value": 0 },/* -- @@@value L1 PDU 2 kW----*/
                                                { "channelName": "DAR_PW_PU2_PM106_kW2", "value": 0 },/* -- @@@value L2 PDU 2 kW----*/
                                                { "channelName": "DAR_PW_PU2_PM106_kW3", "value": 0 }/* -- @@@value L3 PDU 2 kW----*/
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
                    ]
                }
            ],
            DAR_PW_PU1: [
                {
                    "name": "PDU 1",/* -- @@value ----*/
                    "code": "DAR_PW_PU1",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/UPSEmerson.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM105",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_PU1_PM105_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_PU1_PM105_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_PU1_PM105_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_PU1_PM105_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_PU1_PM105_V12", "value": 0 },/* -- @@@value L1  Vd(V)----*/
                                                { "channelName": "DAR_PW_PU1_PM105_V23", "value": 0 },/* -- @@@value L2  Vd(V)-----*/
                                                { "channelName": "DAR_PW_PU1_PM105_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_PU1_PM105_V1", "value": 0 },/* -- @@@value L1  Vp(V)-----*/
                                                { "channelName": "DAR_PW_PU1_PM105_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_PU1_PM105_V3", "value": 0 }/* -- @@@value L3  Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_PU1_PM105_I1", "value": 0 },/* -- @@@value L1  I(A)----*/
                                                { "channelName": "DAR_PW_PU1_PM105_I2", "value": 0 },/* -- @@@value L2  I(A)----*/
                                                { "channelName": "DAR_PW_PU1_PM105_I3", "value": 0 }/* -- @@@value L3  I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_PU1_PM105_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_PU1_PM105_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_PU1_PM105_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_PU1_PM105_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_PU1_PM105_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_PU1_PM105_kW3", "value": 0 }/* -- @@@value L3 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(I)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_PU1_PM105_THDI1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_PU1_PM105_THDI2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_PU1_PM105_THDI3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(V)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_PU1_PM105_THDV1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_PU1_PM105_THDV2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_PU1_PM105_THDV3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
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
                        }
                        /*--------- /block Status ----------*/

                    ]
                }
            ],
            DAR_PW_UD2: [
                {
                    "name": "UDB 2",/* -- @@value ----*/
                    "code": "DAR_PW_UD2",
                    "description": "UDB 2 switchboard",/* -- @@value ----*/
                    "images": "images/dar_udb_2.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "Power Meter",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_UD2_PM103_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_UD2_PM103_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM103_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_UD2_PM103_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_UD2_PM103_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM103_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_UD2_PM103_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_UD2_PM103_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM103_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_UD2_PM103_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_UD2_PM103_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM103_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_UD2_PM103_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_UD2_PM103_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM103_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_UD2_PM103_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_UD2_PM103_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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
                                },
                                {
                                    "name": "Power Meter",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_UD2_PM104_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_UD2_PM104_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM104_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_UD2_PM104_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_UD2_PM104_V31", "value": 0 }/* -- @@@value L3  Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM104_V1", "value": 0 },/* -- @@@value L1  Vp(V)-----*/
                                                { "channelName": "DAR_PW_UD2_PM104_V2", "value": 0 },/* -- @@@value L2  Vp(V)----*/
                                                { "channelName": "DAR_PW_UD2_PM104_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM104_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_UD2_PM104_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_UD2_PM104_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM104_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_UD2_PM104_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_UD2_PM104_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UD2_PM104_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_UD2_PM104_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_UD2_PM104_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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
                        }
                    ]
                }
            ],
            DAR_PW_UD1: [
                {
                    "name": "UDB 1",/* -- @@value ----*/
                    "code": "DAR_PW_UD1",
                    "description": "UDB 1 switchboard",/* -- @@value ----*/
                    "images": "images/dar_udb_1.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "Power Meter",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_UD1_PM101_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_UD1_PM101_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM101_V12", "value": 0 },/* -- @@@value L1  Vd(V)----*/
                                                { "channelName": "DAR_PW_UD1_PM101_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_UD1_PM101_V31", "value": 0 }/* -- @@@value L3  Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM101_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_UD1_PM101_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_UD1_PM101_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM101_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_UD1_PM101_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_UD1_PM101_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM101_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_UD1_PM101_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_UD1_PM101_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM101_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_UD1_PM101_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_UD1_PM101_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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
                                },
                                {
                                    "name": "Power Meter",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_UD1_PM102_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_UD1_PM102_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM102_V12", "value": 0 },/* -- @@@value L1  Vd(V)----*/
                                                { "channelName": "DAR_PW_UD1_PM102_V23", "value": 0 },/* -- @@@value L2  Vd(V)-----*/
                                                { "channelName": "DAR_PW_UD1_PM102_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM102_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_UD1_PM102_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_UD1_PM102_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM102_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_UD1_PM102_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_UD1_PM102_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM102_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_UD1_PM102_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_UD1_PM102_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_UD1_PM102_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_UD1_PM102_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_UD1_PM102_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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
                        }
                        /*--------- /block Status ----------*/

                    ]
                }
            ],
            DAR_PW_EM1: [
                {
                    "name": "EMDB 1, 2, TTL",/* -- @@value ----*/
                    "code": "DAR_PW_EM1",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/dar_esdb_1_esdb_2_tll.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM108",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_EM1_PM108_kWh", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_EM1_PM108_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_EM1_PM108_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_EM1_PM108_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_EM1_PM108_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_EM1_PM108_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_EM1_PM108_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_EM1_PM108_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_EM1_PM108_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_EM1_PM108_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_EM1_PM108_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_EM1_PM108_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_EM1_PM108_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_EM1_PM108_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_EM1_PM108_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_EM1_PM108_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_EM1_PM108_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_EM1_PM108_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_EM1_PM108_kW3", "value": 0 }/* -- @@@value L3 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(I)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_EM1_PM108_THDI1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_EM1_PM108_THDI2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_EM1_PM108_THDI3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(V)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_EM1_PM108_THDV1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_EM1_PM108_THDV2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_EM1_PM108_THDV3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "PM109",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_EM2_PM109_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_EM2_PM109_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_EM2_PM109_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_EM2_PM109_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_EM2_PM109_V12", "value": 0 },/* -- @@@value L1  Vd(V)----*/
                                                { "channelName": "DAR_PW_EM2_PM109_V23", "value": 0 },/* -- @@@value L2  Vd(V)-----*/
                                                { "channelName": "DAR_PW_EM2_PM109_V31", "value": 0 }/* -- @@@value L3  Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_EM2_PM109_V1", "value": 0 },/* -- @@@value L1  Vp(V)-----*/
                                                { "channelName": "DAR_PW_EM2_PM109_V2", "value": 0 },/* -- @@@value L2  Vp(V)----*/
                                                { "channelName": "DAR_PW_EM2_PM109_V3", "value": 0 }/* -- @@@value L3  Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_EM2_PM109_I1", "value": 0 },/* -- @@@value L1  I(A)----*/
                                                { "channelName": "DAR_PW_EM2_PM109_I2", "value": 0 },/* -- @@@value L2  I(A)----*/
                                                { "channelName": "DAR_PW_EM2_PM109_I3", "value": 0 }/* -- @@@value L3  I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_EM2_PM109_kVA1", "value": 0 },/* -- @@@value L1  kVA----*/
                                                { "channelName": "DAR_PW_EM2_PM109_kVA2", "value": 0 },/* -- @@@value L2  kVA----*/
                                                { "channelName": "DAR_PW_EM2_PM109_kVA3", "value": 0 }/* -- @@@value L3  kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_EM2_PM109_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_EM2_PM109_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_EM2_PM109_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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
                        }
                        /*--------- /block Status ----------*/

                    ]
                }
            ],
            DAR_PW_AC1: [
                {
					"divs":[
						{"class1": "ACDB1Class1","channelName":"DAR_PW_DB1_OTB24_I00"},
						{"class1": "ACDB1Class2","channelName":"DAR_PW_DB1_OTB24_I01",'caption':"Volt: "},
						{"class1": "ACDB1Class3","channelName":"DAR_PW_DB1_OTB24_I02"},
						{"class1": "ACDB1Class4","channelName":"DAR_PW_DB1_OTB24_I03"},
						{"class1": "ACDB1Class5","channelName":"DAR_PW_DB1_OTB24_I04"},
					],
                    "name": "ACDB 1",/* -- @@value ----*/
                    "code": "DAR_PW_AC1",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/dar_acdb_1.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM107",
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
                        }
                        /*--------- /block Status ----------*/

                    ]
                }
            ],
            DAR_PW_TC1: [
                {
                    "name": "TCM",/* -- @@value ----*/
                    "code": "DAR_PW_TC1",
                    "description": "TCM switchboard",/* -- @@value ----*/
                    "images": "images/dar_tcm.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
					{
                                    "name": "PM115",
                                    "values":[
                                        {"name":"Freg", "channelName": "DAR_PW_TC1_PM115_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_TC1_PM115_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_TC1_PM115_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_TC1_PM115_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM115_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_TC1_PM115_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_TC1_PM115_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM115_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_TC1_PM115_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_TC1_PM115_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM115_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_TC1_PM115_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_TC1_PM115_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM115_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_TC1_PM115_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_TC1_PM115_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM115_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_TC1_PM115_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_TC1_PM115_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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
                                },
                                {
                                    "name": "PM116",
                                    "values":[
                                        {"name":"Freg", "channelName": "DAR_PW_TC1_PM116_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_TC1_PM116_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_TC1_PM116_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_TC1_PM116_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM116_V12", "value": 0 },/* -- @@@value L1  Vd(V)----*/
                                                { "channelName": "DAR_PW_TC1_PM116_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_TC1_PM116_V31", "value": 0 }/* -- @@@value L3  Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM116_V1", "value": 0 },/* -- @@@value L1  Vp(V)-----*/
                                                { "channelName": "DAR_PW_TC1_PM116_V2", "value": 0 },/* -- @@@value L2  Vp(V)----*/
                                                { "channelName": "DAR_PW_TC1_PM116_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM116_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_TC1_PM116_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_TC1_PM116_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM116_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_TC1_PM116_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_TC1_PM116_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_TC1_PM116_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_TC1_PM116_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_TC1_PM116_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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

                    ]
                }
            ],
            DAR_PW_UP2: [
                {
                    "name": "UPSDB 2",/* -- @@value ----*/
                    "code": "DAR_PW_UP2",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/dar_udb_2.png",/* -- @@value ----*/
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
                    ]
                }
            ],
            DAR_PW_AT1: [
                {
                    "name": "ATS 1",/* -- @@value ----*/
                    "code": "DAR_PW_AT1",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/dar_ats_1.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
					{
                                    "name": "PM117",
                                    "values":[
                                        {"name":"Freqq", "channelName": "DAR_PW_AT1_PM112_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_AT1_PM112_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_AT1_PM112_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_AT1_PM112_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
									"data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM112_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_AT1_PM112_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_AT1_PM112_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM112_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_AT1_PM112_V2", "value": 0 },/* -- @@@value L2  Vp(V)----*/
                                                { "channelName": "DAR_PW_AT1_PM112_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM112_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_AT1_PM112_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_AT1_PM112_I3", "value": 0 }/* -- @@@value L3I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM112_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_AT1_PM112_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_AT1_PM112_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM112_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM112_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM112_kW3", "value": 0 }/* -- @@@value L3 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(I)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM112_THDI1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM112_THDI2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM112_THDI3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(V)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM112_THDV1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM112_THDV2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM112_THDV3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        }
                                    ]
                                },
								{
                                    "name": "PM21",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_AT1_PM201_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_AT1_PM201_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_AT1_PM201_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_AT1_PM201_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM201_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_AT1_PM201_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_AT1_PM201_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM201_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_AT1_PM201_V2", "value": 0 },/* -- @@@value L2  Vp(V)----*/
                                                { "channelName": "DAR_PW_AT1_PM201_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM201_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_AT1_PM201_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_AT1_PM201_I3", "value": 0 }/* -- @@@value L3I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM201_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_AT1_PM201_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_AT1_PM201_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM201_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM201_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM201_kW3", "value": 0 }/* -- @@@value L3 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(I)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM201_THDI1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM201_THDI2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM201_THDI3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(V)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT1_PM201_THDV1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM201_THDV2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT1_PM201_THDV3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        }
                                    ]
                                }

					],
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

                    ]
                }
            ],
            DAR_PW_AT2: [
                {
                    "name": "ATS 2",/* -- @@value ----*/
                    "code": "DAR_PW_AT2",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/dar_ats_2.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
					{
                                    "name": "PM113",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_AT2_PM113_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_AT2_PM113_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_AT2_PM113_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_AT2_PM113_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM113_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_AT2_PM113_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_AT2_PM113_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM113_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_AT2_PM113_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_AT2_PM113_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM113_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_AT2_PM113_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_AT2_PM113_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM113_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_AT2_PM113_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_AT2_PM113_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM113_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM113_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM113_kW3", "value": 0 }/* -- @@@value L3 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(I)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM113_THDI1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM113_THDI2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM113_THDI3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(V)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM113_THDV1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM113_THDV2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM113_THDV3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        }
                                    ]
                                },
								{
                                    "name": "PM22",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_AT2_PM202_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_AT2_PM202_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_AT2_PM202_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_AT2_PM202_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM202_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_AT2_PM202_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_AT2_PM202_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM202_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_AT2_PM202_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_AT2_PM202_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM202_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_AT2_PM202_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_AT2_PM202_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM202_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_AT2_PM202_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_AT2_PM202_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM202_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM202_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM202_kW3", "value": 0 }/* -- @@@value L3 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(I)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM202_THDI1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM202_THDI2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM202_THDI3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        },
                                        {
                                            "name": "THD(V)",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_AT2_PM202_THDV1", "value": 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM202_THDV2", "value": 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { "channelName": "DAR_PW_AT2_PM202_THDV3", "value": 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        }
                                    ]
                                }

					],
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
                        }
                    ]
                }
            ],
            DAR_PW_BU1: [
                {
                    "name": "TBU 1",/* -- @@value ----*/
                    "code": "DAR_PW_BU1",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/dar_tbu_1.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM111",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_BU1_PM111_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_BU1_PM111_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_BU1_PM111_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_BU1_PM111_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_BU1_PM111_V12", "value": 0 },/* -- @@@value L1 Vd(V)----*/
                                                { "channelName": "DAR_PW_BU1_PM111_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_BU1_PM111_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_BU1_PM111_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_BU1_PM111_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_BU1_PM111_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_BU1_PM111_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_BU1_PM111_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_BU1_PM111_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_BU1_PM111_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_BU1_PM111_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_BU1_PM111_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_BU1_PM111_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_BU1_PM111_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_BU1_PM111_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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
                    ]
                }
            ],
            DAR_PW_BU2: [
                {
                    "name": "TBU 2",/* -- @@value ----*/
                    "code": "DAR_PW_BU2",
                    "description": "Switchboard",/* -- @@value ----*/
                    "images": "images/dar_tbu_2.png",/* -- @@value ----*/
                    "System" : "Power switchboard",
					"Parameters": [
                                {
                                    "name": "PM114",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_PW_BU2_PM114_Hz", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_PW_BU2_PM114_kWh", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_PW_BU2_PM114_kWh", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_PW_BU2_PM114_Hour", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_BU2_PM114_V12", "value": 0 },/* -- @@@value L1  Vd(V)----*/
                                                { "channelName": "DAR_PW_BU2_PM114_V23", "value": 0 },/* -- @@@value L2 Vd(V)-----*/
                                                { "channelName": "DAR_PW_BU2_PM114_V31", "value": 0 }/* -- @@@value L3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_PW_BU2_PM114_V1", "value": 0 },/* -- @@@value L1 Vp(V)-----*/
                                                { "channelName": "DAR_PW_BU2_PM114_V2", "value": 0 },/* -- @@@value L2 Vp(V)----*/
                                                { "channelName": "DAR_PW_BU2_PM114_V3", "value": 0 }/* -- @@@value L3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_PW_BU2_PM114_I1", "value": 0 },/* -- @@@value L1 I(A)----*/
                                                { "channelName": "DAR_PW_BU2_PM114_I2", "value": 0 },/* -- @@@value L2 I(A)----*/
                                                { "channelName": "DAR_PW_BU2_PM114_I3", "value": 0 }/* -- @@@value L3 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_BU2_PM114_kVA1", "value": 0 },/* -- @@@value L1 kVA----*/
                                                { "channelName": "DAR_PW_BU2_PM114_kVA2", "value": 0 },/* -- @@@value L2 kVA----*/
                                                { "channelName": "DAR_PW_BU2_PM114_kVA3", "value": 0 }/* -- @@@value L3 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_PW_BU2_PM114_kW1", "value": 0 },/* -- @@@value L1 kW----*/
                                                { "channelName": "DAR_PW_BU2_PM114_kW2", "value": 0 },/* -- @@@value L2 kW----*/
                                                { "channelName": "DAR_PW_BU2_PM114_kW3", "value": 0 }/* -- @@@value L3 kW----*/
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

                    ]
                }
            ],

            /* ----------------------------- /data Power switchboard  --------------------*/
            /* ----------------------------- /data WARNING_SYSTEM  --------------------*/
            "WARNING_SYSTEM" : [
                {
                    "name": "HSSD",
                    element: [
                        {
                            "name": "Fire",
                            "icon": "glyphicon glyphicon-fire",
                            "value": "",
                            "unit": "",
                            "status": { "channelName": "xxx", "value": 0 },/* -- @@@value HSSD Fire status----*/
                        },
                        {
                            "name": "Trouble",
                            "icon": "fa fa-exclamation-triangle",
                            "value": "",
                            "unit": "",
                            "status": { "channelName": "xxx", "value": 0 },/* -- @@@value HSSD Trouble status----*/
                        }
                    ]
                },
                {
                    "name": "LASER",
                    element: [
                        {
                            "name": "Fire",
                            "icon": "glyphicon glyphicon-fire",
                            "value": "",
                            "unit": "",
                            "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LASER Fire status----*/
                        },
                        {
                            "name": "Trouble",
                            "icon": "fa fa-exclamation-triangle",
                            "value": "",
                            "unit": "",
                            "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LASER Trouble status----*/
                        }
                    ]
                },
                {
                    "name": "LLD",
                    element: [
                        {
                            "name": "Leak",
                            "icon": "fa fa-tint",
                            "value": "",
                            "unit": "",
                            "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LLD Leak status----*/
                        },
                        {
                            "name": "",
                            "icon": "fa fa-map-marker",
                            "value": { "channelName": "xxx", "value": 0 },/* -- @@@value LLD m ----*/
                            "unit": 'm',
                            "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LLD m status----*/
                        },
                        {
                            "name": "Break",
                            "icon": "fa fa-chain-broken",
                            "value": "",
                            "unit": "",
                            "status": { "channelName": "xxx", "value": 0 },/* -- @@@value LLD Break status----*/
                        }
                    ]
                }
            ],
            /* ----------------------------- /data WARNING_SYSTEM  --------------------*/
            /* ----------------------------- data DAR_GS  --------------------*/
            DAR_GS: [
                {
                    "name": "Genset 1",/* -- @@value ----*/
                    url: "detail/DAR_GS",
                    code: "DAR_GS_BG1",
                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Genset 1----*/
                    progress: 0,
                    value1: { "channelName": "DAR_GS_BG1_I1", "value": 0, "unit": "A" },/* -- @@value Genset 1 (A)----*/
                    value2: { "channelName": "DAR_GS_BG1_L1VA", "value": 0, "unit": "kVA" }/* -- @@value Genset 1 (kVA)----*/
                },
                {
                    "name": "Genset 2",/* -- @@value ----*/
                    url: "detail/DAR_GS",
                    code: "DAR_GS_BG2",
                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Genset 2----*/
                    progress: 0,
                    value1: { "channelName": "DAR_GS_BG2_I1", "value": 0, "unit": "A" },/* -- @@value Genset 2 (A)----*/
                    value2: { "channelName": "DAR_GS_BG2_L1VA", "value": 0, "unit": "kVA" }/* -- @@value Genset 2 (kVA)----*/
                }
            ],
            DAR_GS_BG1: [
                {
                    "name": "Genset 1",/* -- @@value ----*/
                    "code": "DAR_GS_BG1",
                    "description": "1750 kVA",/* -- @@value ----*/
                    "images": "images/genset.png",/* -- @@value ----*/
                    "System" : "Generator set",/* -- @@value ----*/
					"Parameters": [
                                {
                                    "name": "Power Meter",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_GS_BG1_V12", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_GS_BG1_V12", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_GS_BG1_V12", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_GS_BG1_V12", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_GS_BG1_V12", "value": 0 },/* -- @@@value L1 Genset 1 Vd(V)----*/
                                                { "channelName": "DAR_GS_BG1_V23", "value": 0 },/* -- @@@value L2 Genset 1 Vd(V)-----*/
                                                { "channelName": "DAR_GS_BG1_V31", "value": 0 }/* -- @@@value L3 Genset 1 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_GS_BG1_V1", "value": 0 },/* -- @@@value L1 Genset 1 Vp(V)-----*/
                                                { "channelName": "DAR_GS_BG1_V2", "value": 0 },/* -- @@@value L2 Genset 1 Vp(V)----*/
                                                { "channelName": "DAR_GS_BG1_V3", "value": 0 }/* -- @@@value L3 Genset 1 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_GS_BG1_I1", "value": 0 },/* -- @@@value L1 Genset 1 I(A)----*/
                                                { "channelName": "DAR_GS_BG1_I2", "value": 0 },/* -- @@@value L2 Genset 1 I(A)----*/
                                                { "channelName": "DAR_GS_BG1_I3", "value": 0 }/* -- @@@value L3 Genset 1 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_GS_BG1_L1VA", "value": 0 },/* -- @@@value L1 Genset 1 kVA----*/
                                                { "channelName": "DAR_GS_BG1_L2VA", "value": 0 },/* -- @@@value L2 Genset 1 kVA----*/
                                                { "channelName": "DAR_GS_BG1_L3VA", "value": 0 }/* -- @@@value L3 Genset 1 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_GS_BG1_L1W", "value": 0 },/* -- @@@value L1 Genset 1 kW----*/
                                                { "channelName": "DAR_GS_BG1_L2W", "value": 0 },/* -- @@@value L2 Genset 1 kW----*/
                                                { "channelName": "DAR_GS_BG1_L3W", "value": 0 }/* -- @@@value L3 Genset 1 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                    "status": [
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Genset: Running",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Genset 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "System : Normal",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_GS_BG1_AlmO", "value": 0 },/* -- @@@value Genset 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
								/*--------- Status ----------*/
                                {
                                    "name": "Fuel: Full",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Genset 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        }
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_GS_BG2: [
                {
                    "name": "Genset 2",/* -- @@value ----*/
                    "code": "DAR_GS_BG2",
                    "description": "1750 kVA",/* -- @@value ----*/
                    "images": "images/genset.png",/* -- @@value ----*/
                    "System" : "Generator set",/* -- @@value ----*/
					"Parameters": [
                                {
                                    "name": "Power Meter",
                                    "values":[
                                        {"name":"Freq", "channelName": "DAR_GS_BG2_V12", "value": 0, "unit": "Hz"},/* -- @@value  pf----*/
                                        {"name":"pf", "channelName": "DAR_GS_BG2_V12", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "DAR_GS_BG2_V12", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "DAR_GS_BG2_V12", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_GS_BG2_V12", "value": 0 },/* -- @@@value L1 Genset 2 Vd(V)----*/
                                                { "channelName": "DAR_GS_BG2_V23", "value": 0 },/* -- @@@value L2 Genset 2 Vd(V)-----*/
                                                { "channelName": "DAR_GS_BG2_V31", "value": 0 }/* -- @@@value L3 Genset 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "DAR_GS_BG2_V1", "value": 0 },/* -- @@@value L1 Genset 2 Vp(V)-----*/
                                                { "channelName": "DAR_GS_BG2_V2", "value": 0 },/* -- @@@value L2 Genset 2 Vp(V)----*/
                                                { "channelName": "DAR_GS_BG2_V3", "value": 0 }/* -- @@@value L3 Genset 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "DAR_GS_BG2_I1", "value": 0 },/* -- @@@value L1 Genset 2 I(A)----*/
                                                { "channelName": "DAR_GS_BG2_I2", "value": 0 },/* -- @@@value L2 Genset 2 I(A)----*/
                                                { "channelName": "DAR_GS_BG2_I3", "value": 0 }/* -- @@@value L3 Genset 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_GS_BG2_L1VA", "value": 0 },/* -- @@@value L1 Genset 2 kVA----*/
                                                { "channelName": "DAR_GS_BG2_L2VA", "value": 0 },/* -- @@@value L2 Genset 2 kVA----*/
                                                { "channelName": "DAR_GS_BG2_L3VA", "value": 0 }/* -- @@@value L3 Genset 2 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "DAR_GS_BG2_L1W", "value": 0 },/* -- @@@value L1 Genset 2 kW----*/
                                                { "channelName": "DAR_GS_BG2_L2W", "value": 0 },/* -- @@@value L2 Genset 2 kW----*/
                                                { "channelName": "DAR_GS_BG2_L3W", "value": 0 }/* -- @@@value L3 Genset 2 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                    "status": [
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Genset: Running",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Genset 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "System : Normal",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "DAR_GS_BG2_AlmO", "value": 0 },/* -- @@@value Genset 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
								/*--------- Status ----------*/
                                {
                                    "name": "Fuel: Full",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Genset 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- /data DAR_GS  --------------------*/
            /* ----------------------------- data DAR_TF  --------------------*/
            DAR_TF: [
                {
                    "name": "Dry-transformer 1",/* -- @@value ----*/
                    url: "detail/DAR_TF",
                    code: "DAR_TF_DT1",
                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Dry-transformer 1 stauts---*/
                    progress: 0,
                    value1: { "channelName": "xxx", "value": 0, "unit": "A" },/* -- @@value Dry-transformer 1 (A)----*/
                    value2: { "channelName": "xxx", "value": 0, "unit": "kVA" }/* -- @@value Dry-transformer 1 (kVA)----*/
                },
                {
                    "name": "Dry-transformer 2",/* -- @@value ----*/
                    url: "detail/DAR_TF",
                    code: "DAR_TF_DT2",
                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Dry-transformer 2 stauts---*/
                    progress: 0,
                    value1: { "channelName": "xxx", "value": 0, "unit": "A" },/* -- @@value Dry-transformer 2 (A)----*/
                    value2: { "channelName": "xxx", "value": 0, "unit": "kVA" }/* -- @@value Dry-transformer 2 (kVA)----*/
                }
            ],
            DAR_TF_DT1: [
                {
                    "name": "Dry-transformer 1",/* -- @@value ----*/
                    "code": "DAR_TF_DT1",
                    "description": "DEUTZ 500kVA",/* -- @@value ----*/
                    "images": "images/UPSEmerson.png",/* -- @@value ----*/
                    "System" : "Transformer utility",/* -- @@value ----*/
					"Parameters": [
                                {
                                    "name": "Power Meter",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 1 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 1 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 1 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 1 Vp(V)-----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 1 Vp(V)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 1 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 1 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 1 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 1 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 1 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 1 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 1 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 1 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 1 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 1 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                    "status": [
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Dry-transformer: Running",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Dry-transformer 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "System : Normal",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Dry-transformer 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
								/*--------- Status ----------*/
                                {
                                    "name": "Fuel: Full",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Dry-transformer 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        }
                        /*--------- /block Status ----------*/

                    ]
                }
            ],
            DAR_TF_DT2: [
                {
                    "name": "Dry-transformer 2",/* -- @@value ----*/
                    "code": "DAR_TF_DT2",
                    "description": "DEUTZ 500kVA",/* -- @@value ----*/
                    "images": "images/UPSEmerson.png",/* -- @@value ----*/
                    "System" : "Transformer utility",/* -- @@value ----*/
					"Parameters": [
                                {
                                    "name": "Power Meter",
                                    "values":[
                                        {"name":"pf", "channelName": "xxx", "value": 0, "unit": ""},/* -- @@value  pf----*/
                                        {"name":"kWh", "channelName": "xxx", "value": 0, "unit": "kWh"},/* -- @@value  kVA----*/
                                        {"name":"Time", "channelName": "xxx", "value": 0, "unit": "min"},/* -- @@value Time----*/
                                    ],
                                    "data": [
                                        {
                                            "name": "Vd",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 2 Vd(V)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 2 Vd(V)-----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            "name": "Vp",
                                            "unit": "V",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 2 Vp(V)-----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 2 Vp(V)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            "name": "I",
                                            "unit": "A",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 2 I(A)----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 2 I(A)----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            "name": "kVA",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 2 kVA----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 2 kVA----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 2 kVA----*/
                                            ]
                                        },
                                        {
                                            "name": "kW",
                                            "unit": "",
                                            "values": [
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L1 Dry-transformer 2 kW----*/
                                                { "channelName": "xxx", "value": 0 },/* -- @@@value L2 Dry-transformer 2 kW----*/
                                                { "channelName": "xxx", "value": 0 }/* -- @@@value L3 Dry-transformer 2 kW----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                    "status": [
                        /*--------- block Status ----------*/
                        {
                            "name": "",
                            Parameter: 0,
                            "datas": [
                                /*--------- Status ----------*/
                                {
                                    "name": "Dry-transformer: Running",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Dry-transformer 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    "name": "System Normal",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Dry-transformer 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
								/*--------- Status ----------*/
                                {
                                    "name": "Fuel: Full",
                                    "icon": "fa-li fa fa-check-circle",
                                    "status": { "channelName": "xxx", "value": 0 },/* -- @@@value Dry-transformer 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        }
                        /*--------- /block Status ----------*/
                        
                    ]
                }
            ],
            /* ----------------------------- /data DR_TF  --------------------*/
            CONFIG_INFO:{l:1,s:8,u:43,co:44,ch:1502}
           
        }/*------/data-----*/
    }
});
