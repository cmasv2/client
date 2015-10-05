define([], function () {
    return function () {
        /*----------------------------note--------------------------
         * Hi anh
         * Anh kiểm tra lại tên channel và đơn vị(unit) luôn nha anh 
         * từ khóa tìm kiếm để kiểm tra : @@@value
         * hình ảnh hay sơ đồ anh lưu vào thư mục images anh nhé
         * channel chưa có anh set channelName: "xxx"
		----------------------------/note--------------------------*/
        var data = {
            UPS_SYSTEM : [
                {
                    name: "UPS 1",/* -- @@value ----*/
                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 1 status----*/
                    url: "detail/UPS_SYSTEM",
                    id: "DAR_UP_T31",
                    progress: random(100),
                    value1: { channelName: "DAR_UP_T31_kVA", value: 0, unit: "kVA" },/* -- @@value UPS 1 kVA----*/
                    value2: { channelName: "DAR_UP_T31_min", value: 0, unit: "min" }/* -- @@value UPS 1 min----*/
                },
                {
                    name: "UPS 2",/* -- @@value ----*/
                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 2 status----*/
                    url: "detail/UPS_SYSTEM",
                    id: "DAR_UP_T32",
                    progress: random(100),
                    value1: { channelName: "DAR_UP_T32_kVA", value: 0, unit: "kVA" },/* -- @@value UPS 2 kVA----*/
                    value2: { channelName: "DAR_UP_T32_min", value: 0, unit: "min" }/* -- @@value UPS 2 min----*/
                },
                {
                    name: "UPS 3",/* -- @@value ----*/
                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 3 status----*/
                    url: "detail/UPS_SYSTEM",
                    id: "DAR_UP_T33",
                    progress: random(100),
                    value1: { channelName: "DAR_UP_T33_kVA", value: 0, unit: "kVA" },/* -- @@value UPS 3 kVA----*/
                    value2: { channelName: "DAR_UP_T33_min", value: 0, unit: "min" }/* -- @@value UPS 3 min----*/
                },
                {
                    name: "UPS 4",/* -- @@value ----*/
                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 4 status----*/
                    url: "detail/UPS_SYSTEM",
                    id: "DAR_UP_T34",
                    progress: random(100),
                    value1: { channelName: "DAR_UP_T34_kVA", value: 0, unit: "kVA" },/* -- @@value UPS 4 kVA----*/
                    value2: { channelName: "DAR_UP_T34_min", value: 0, unit: "min" }/* -- @@value UPS 4 min----*/
                }
            ],
            UPS_SYSTEM_DETAIL: [
                {
                    name: "UPS",/* -- @@value ----*/
                    description: "Uninterruptible power supply",/* -- @@value ----*/
                    images: "images/elec_sld.png"/* -- @@value image map UPS System----*/
                }
            ],
            /*------------------------------ data UPS 1 --------------------------*/
            DAR_UP_T31: [
                {
                    name: "UPS 1",/* -- @@value ----*/
                    id : "DAR_UP_T31",
                    description: "Liebert GXT3, 20 kVA RT",/* -- @@value ----*/
                    System: "UPS System",
                    images: "images/UPSEmerson.png",/* -- @@value image UPS 1 ----*/
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter:0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit General Alarm",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 1----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Normal AC Source Out Of Tolerance",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 1----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output Overload",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 1----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output Thermal Overload",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 1----*/
                                    value: 0,
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output In Short-Circuit",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 1----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Battery Low Warning",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 1----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "End Of Backup Time",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 1----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Battery End of Life",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 1----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ],
                    Parameters: [
                        {
                            name: "Input",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 1 Input kVA----*/
                            Time: { channelName: "DAR_UP_T31_min", value: 0, unit: "min" },/* -- @@value UPS 1 Input Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T31_VI12", value: 0 },/* -- @@value L1 UPS 1 Input Vd(V)----*/
                                        { channelName: "DAR_UP_T31_VI23", value: 0 },/* -- @@value L2 UPS 1 Input Vd(V)-----*/
                                        { channelName: "DAR_UP_T31_VI31", value: 0 }/* -- @@value L3 UPS 1 Input Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T31_VI1", value: 0 },/* -- @@value L1 UPS 1 Input Vp(V)-----*/
                                        { channelName: "DAR_UP_T31_VI2", value: 0 },/* -- @@value L2 UPS 1 Input Vp(V)----*/
                                        { channelName: "DAR_UP_T31_VI3", value: 0 }/* -- @@value L3 UPS 1 Input Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "DAR_UP_T31_I11", value: 0 },/* -- @@value L1 UPS 1 Input I(A)----*/
                                        { channelName: "DAR_UP_T31_I12", value: 0 },/* -- @@value L2 UPS 1 Input I(A)----*/
                                        { channelName: "DAR_UP_T31_I13", value: 0 }/* -- @@value L3 UPS 1 Input I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Input kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Input kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Input kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Input kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Input kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Input kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Input pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Input pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Input pf(V)----*/
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Bypass",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 1 Bypass kVA----*/
                            Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@value UPS 1 Bypass Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Bypass Vd(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Bypass Vd(V)-----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Bypass Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Bypass Vp(V)-----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Bypass Vp(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Bypass Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Bypass I(A)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Bypass I(A)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Bypass I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Bypass kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Bypass kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Bypass kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Bypass kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Bypass kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Bypass kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Bypass pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Bypass pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Bypass pf(V)----*/
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Output",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 1 Output kVA----*/
                            Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@value UPS 1 Output Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T31_VO12", value: 0 },/* -- @@value L1 UPS 1 Output Vd(V)----*/
                                        { channelName: "DAR_UP_T31_VO23", value: 0 },/* -- @@value L2 UPS 1 Output Vd(V)-----*/
                                        { channelName: "DAR_UP_T31_VO31", value: 0 }/* -- @@value L3 UPS 1 Output Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T31_VO1", value: 0 },/* -- @@value L1 UPS 1 Output Vp(V)-----*/
                                        { channelName: "DAR_UP_T31_VO2", value: 0 },/* -- @@value L2 UPS 1 Output Vp(V)----*/
                                        { channelName: "DAR_UP_T31_VO2", value: 0 }/* -- @@value L3 UPS 1 Output Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "DAR_UP_T31_I21", value: 0 },/* -- @@value L1 UPS 1 Output I(A)----*/
                                        { channelName: "DAR_UP_T31_I22", value: 0 },/* -- @@value L2 UPS 1 Output I(A)----*/
                                        { channelName: "DAR_UP_T31_I23", value: 0 }/* -- @@value L3 UPS 1 Output I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Output kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Output kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Output kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Output kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Output kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Output kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 1 Output pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 1 Output pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 1 Output pf(V)----*/
                                    ]
                                }
                            ]
                        }
                    ],
                    Battery: {
                        values: [
                            {
                                name: "Volt", unit: "V",
                                channelName: "xxx",/* -- @@value UPS 1 Battery Volt(V)----*/
                                value: 0
                            },
                            {
                                name: "Current", unit: "A",
                                channelName: "xxx",/* -- @@value UPS 1 Battery Current(A)----*/
                                value: 0
                            },
                            {
                                name: "Percent", unit: "%",
                                channelName: "xxx",/* -- @@value UPS 1 Battery Percent(%)----*/
                                value: 0
                            },
                            {
                                name: "Backup Time", unit: "min",
                                channelName: "xxx",/* -- @@value UPS 1 Battery Backup Time(min)----*/
                                value: 0
                            },
                            {
                                name: "Temperature", unit: "oC",
                                channelName: "xxx",/* -- @@value UPS 1 Battery Temperature(oC)----*/
                                value: 0
                            }
                        ]
                    }
                }],/*------------------------------ / data UPS 1 --------------------------*/
            /*------------------------------ data UPS 2 --------------------------*/
            DAR_UP_T32: [
                {
                    name: "UPS 2",/* -- @@value ----*/
                    id : "DAR_UP_T32",
                    description: "Liebert GXT3, 20 kVA RT",/* -- @@value ----*/
                    System: "UPS System",
                    images: "images/UPSEmerson.png",/* -- @@value image UPS 2 ----*/
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit General Alarm",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPS 2----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Normal AC Source Out Of Tolerance",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 2----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output Overload",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 2----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output Thermal Overload",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 2----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output In Short-Circuit",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 2----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Battery Low Warning",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 2----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "End Of Backup Time",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 2----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Battery End of Life",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 2----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ],
                    Parameters: [
                        {
                            name: "Input",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 2 Input kVA----*/
                            Time: { channelName: "DAR_UP_T32_min", value: 0, unit: "min" },/* -- @@value UPS 2 Input Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T32_VI12", value: 0 },/* -- @@value L1 UPS 2 Input Vd(V)----*/
                                        { channelName: "DAR_UP_T32_VI23", value: 0 },/* -- @@value L2 UPS 2 Input Vd(V)-----*/
                                        { channelName: "DAR_UP_T32_VI31", value: 0 }/* -- @@value L3 UPS 2 Input Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T32_VI1", value: 0 },/* -- @@value L1 UPS 2 Input Vp(V)-----*/
                                        { channelName: "DAR_UP_T32_VI2", value: 0 },/* -- @@value L2 UPS 2 Input Vp(V)----*/
                                        { channelName: "DAR_UP_T32_VI3", value: 0 }/* -- @@value L3 UPS 2 Input Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "DAR_UP_T32_I11", value: 0 },/* -- @@value L1 UPS 2 Input I(A)----*/
                                        { channelName: "DAR_UP_T32_I12", value: 0 },/* -- @@value L2 UPS 2 Input I(A)----*/
                                        { channelName: "DAR_UP_T32_I13", value: 0 }/* -- @@value L3 UPS 2 Input I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Input kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Input kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Input kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Input kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Input kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Input kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Input pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Input pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Input pf(V)----*/
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Bypass",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 2 Bypass kVA----*/
                            Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@value UPS 2 Bypass Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Bypass Vd(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Bypass Vd(V)-----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Bypass Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Bypass Vp(V)-----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Bypass Vp(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Bypass Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Bypass I(A)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Bypass I(A)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Bypass I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Bypass kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Bypass kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Bypass kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Bypass kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Bypass kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Bypass kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Bypass pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Bypass pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Bypass pf(V)----*/
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Output",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 2 Output kVA----*/
                            Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@value UPS 2 Output Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T32_VO12", value: 0 },/* -- @@value L1 UPS 2 Output Vd(V)----*/
                                        { channelName: "DAR_UP_T32_VO23", value: 0 },/* -- @@value L2 UPS 2 Output Vd(V)-----*/
                                        { channelName: "DAR_UP_T32_VO31", value: 0 }/* -- @@value L3 UPS 2 Output Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T32_VO1", value: 0 },/* -- @@value L1 UPS 2 Output Vp(V)-----*/
                                        { channelName: "DAR_UP_T32_VO2", value: 0 },/* -- @@value L2 UPS 2 Output Vp(V)----*/
                                        { channelName: "DAR_UP_T32_VO2", value: 0 }/* -- @@value L3 UPS 2 Output Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "DAR_UP_T32_I21", value: 0 },/* -- @@value L1 UPS 2 Output I(A)----*/
                                        { channelName: "DAR_UP_T32_I22", value: 0 },/* -- @@value L2 UPS 2 Output I(A)----*/
                                        { channelName: "DAR_UP_T32_I23", value: 0 }/* -- @@value L3 UPS 2 Output I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Output kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Output kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Output kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Output kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Output kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Output kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 2 Output pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 2 Output pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 2 Output pf(V)----*/
                                    ]
                                }
                            ]
                        }
                    ],
                    Battery: {
                        values: [
                            {
                                name: "Volt", unit: "V",
                                channelName: "xxx",/* -- @@value UPS 2 Battery Volt(V)----*/
                                value: 0
                            },
                            {
                                name: "Current", unit: "A",
                                channelName: "xxx",/* -- @@value UPS 2 Battery Current(A)----*/
                                value: 0
                            },
                            {
                                name: "Percent", unit: "%",
                                channelName: "xxx",/* -- @@value UPS 2 Battery Percent(%)----*/
                                value: 0
                            },
                            {
                                name: "Backup Time", unit: "min",
                                channelName: "xxx",/* -- @@value UPS 2 Battery Backup Time(min)----*/
                                value: 0
                            },
                            {
                                name: "Temperature", unit: "oC",
                                channelName: "xxx",/* -- @@value UPS 2 Battery Temperature(oC)----*/
                                value: 0
                            }
                        ]
                    }
                }],/*------------------------------ / data UPS 2 --------------------------*/
            /*------------------------------ data UPS 3 --------------------------*/
            DAR_UP_T33: [
                {
                    name: "UPS 3",/* -- @@value ----*/
                    id : "DAR_UP_T33",
                    description: "Liebert GXT3, 20 kVA RT",/* -- @@value ----*/
                    System: "UPS System",
                    images: "images/UPSEmerson.png",/* -- @@value image UPS 3 ----*/
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit General Alarm",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 3----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Normal AC Source Out Of Tolerance",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 3----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output Overload",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 3----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output Thermal Overload",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 3----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output In Short-Circuit",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 3----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Battery Low Warning",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 3----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "End Of Backup Time",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 3----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Battery End of Life",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 3----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ],
                    Parameters: [
                        {
                            name: "Input",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 3 Input kVA----*/
                            Time: { channelName: "DAR_UP_T33_min", value: 0, unit: "min" },/* -- @@value UPS 3 Input Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T33_VI12", value: 0 },/* -- @@value L1 UPS 3 Input Vd(V)----*/
                                        { channelName: "DAR_UP_T33_VI23", value: 0 },/* -- @@value L2 UPS 3 Input Vd(V)-----*/
                                        { channelName: "DAR_UP_T33_VI31", value: 0 }/* -- @@value L3 UPS 3 Input Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T33_VI1", value: 0 },/* -- @@value L1 UPS 3 Input Vp(V)-----*/
                                        { channelName: "DAR_UP_T33_VI2", value: 0 },/* -- @@value L2 UPS 3 Input Vp(V)----*/
                                        { channelName: "DAR_UP_T33_VI3", value: 0 }/* -- @@value L3 UPS 3 Input Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "DAR_UP_T33_I11", value: 0 },/* -- @@value L1 UPS 3 Input I(A)----*/
                                        { channelName: "DAR_UP_T33_I12", value: 0 },/* -- @@value L2 UPS 3 Input I(A)----*/
                                        { channelName: "DAR_UP_T33_I13", value: 0 }/* -- @@value L3 UPS 3 Input I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Input kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Input kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Input kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Input kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Input kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Input kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Input pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Input pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Input pf(V)----*/
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Bypass",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 3 Bypass kVA----*/
                            Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@value UPS 3 Bypass Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Bypass Vd(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Bypass Vd(V)-----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Bypass Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Bypass Vp(V)-----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Bypass Vp(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Bypass Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Bypass I(A)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Bypass I(A)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Bypass I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Bypass kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Bypass kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Bypass kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Bypass kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Bypass kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Bypass kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Bypass pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Bypass pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Bypass pf(V)----*/
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Output",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 3 Output kVA----*/
                            Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@value UPS 3 Output Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T33_VO12", value: 0 },/* -- @@value L1 UPS 3 Output Vd(V)----*/
                                        { channelName: "DAR_UP_T33_VO23", value: 0 },/* -- @@value L2 UPS 3 Output Vd(V)-----*/
                                        { channelName: "DAR_UP_T33_VO31", value: 0 }/* -- @@value L3 UPS 3 Output Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T33_VO1", value: 0 },/* -- @@value L1 UPS 3 Output Vp(V)-----*/
                                        { channelName: "DAR_UP_T33_VO2", value: 0 },/* -- @@value L2 UPS 3 Output Vp(V)----*/
                                        { channelName: "DAR_UP_T33_VO2", value: 0 }/* -- @@value L3 UPS 3 Output Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "DAR_UP_T33_I21", value: 0 },/* -- @@value L1 UPS 3 Output I(A)----*/
                                        { channelName: "DAR_UP_T33_I22", value: 0 },/* -- @@value L2 UPS 3 Output I(A)----*/
                                        { channelName: "DAR_UP_T33_I23", value: 0 }/* -- @@value L3 UPS 3 Output I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Output kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Output kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Output kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Output kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Output kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Output kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 3 Output pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 3 Output pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 3 Output pf(V)----*/
                                    ]
                                }
                            ]
                        }
                    ],
                    Battery: {
                        values: [
                            {
                                name: "Volt", unit: "V",
                                channelName: "xxx",/* -- @@value UPS 3 Battery Volt(V)----*/
                                value: 0
                            },
                            {
                                name: "Current", unit: "A",
                                channelName: "xxx",/* -- @@value UPS 3 Battery Current(A)----*/
                                value: 0
                            },
                            {
                                name: "Percent", unit: "%",
                                channelName: "xxx",/* -- @@value UPS 3 Battery Percent(%)----*/
                                value: 0
                            },
                            {
                                name: "Backup Time", unit: "min",
                                channelName: "xxx",/* -- @@value UPS 3 Battery Backup Time(min)----*/
                                value: 0
                            },
                            {
                                name: "Temperature", unit: "oC",
                                channelName: "xxx",/* -- @@value UPS 3 Battery Temperature(oC)----*/
                                value: 0
                            }
                        ]
                    }
                }],/*------------------------------ / data UPS 3 --------------------------*/
            /*------------------------------ data UPS 4 --------------------------*/
            DAR_UP_T34: [
                {
                    name: "UPS 4",/* -- @@value ----*/
                    id : "DAR_UP_T34",
                    description: "Liebert GXT3, 20 kVA RT",/* -- @@value ----*/
                    System: "UPS System",
                    images: "images/UPSEmerson.png",/* -- @@value image UPS 4 ----*/
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit General Alarm",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 4----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Normal AC Source Out Of Tolerance",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 4----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output Overload",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 4----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output Thermal Overload",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 4----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Output In Short-Circuit",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 4----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Battery Low Warning",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 4----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "End Of Backup Time",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 4----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Battery End of Life",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0},/* -- @@@value UPS 4----*/
                                    value: 0
                                },
                                /*--------- /Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ],
                    Parameters: [
                        {
                            name: "Input",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 4 Input kVA----*/
                            Time: { channelName: "DAR_UP_T34_min", value: 0, unit: "min" },/* -- @@value UPS 4 Input Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T34_VI12", value: 0 },/* -- @@value L1 UPS 4 Input Vd(V)----*/
                                        { channelName: "DAR_UP_T34_VI23", value: 0 },/* -- @@value L2 UPS 4 Input Vd(V)-----*/
                                        { channelName: "DAR_UP_T34_VI31", value: 0 }/* -- @@value L3 UPS 4 Input Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T34_VI1", value: 0 },/* -- @@value L1 UPS 4 Input Vp(V)-----*/
                                        { channelName: "DAR_UP_T34_VI2", value: 0 },/* -- @@value L2 UPS 4 Input Vp(V)----*/
                                        { channelName: "DAR_UP_T34_VI3", value: 0 }/* -- @@value L3 UPS 4 Input Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "DAR_UP_T34_I11", value: 0 },/* -- @@value L1 UPS 4 Input I(A)----*/
                                        { channelName: "DAR_UP_T34_I12", value: 0 },/* -- @@value L2 UPS 4 Input I(A)----*/
                                        { channelName: "DAR_UP_T34_I13", value: 0 }/* -- @@value L3 UPS 4 Input I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Input kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Input kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Input kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Input kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Input kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Input kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Input pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Input pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Input pf(V)----*/
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Bypass",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 4 Bypass kVA----*/
                            Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@value UPS 4 Bypass Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Bypass Vd(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Bypass Vd(V)-----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Bypass Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Bypass Vp(V)-----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Bypass Vp(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Bypass Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Bypass I(A)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Bypass I(A)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Bypass I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Bypass kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Bypass kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Bypass kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Bypass kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Bypass kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Bypass kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "V",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Bypass pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Bypass pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Bypass pf(V)----*/
                                    ]
                                }
                            ]
                        },
                        {
                            name: "Output",
                            kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@value UPS 4 Output kVA----*/
                            Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@value UPS 4 Output Time----*/
                            data: [
                                {
                                    name: "Vd",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T34_VO12", value: 0 },/* -- @@value L1 UPS 4 Output Vd(V)----*/
                                        { channelName: "DAR_UP_T34_VO23", value: 0 },/* -- @@value L2 UPS 4 Output Vd(V)-----*/
                                        { channelName: "DAR_UP_T34_VO31", value: 0 }/* -- @@value L3 UPS 4 Output Vd(V)-----*/
                                    ]
                                },
                                {
                                    name: "Vp",
                                    unit: "V",
                                    values: [
                                        { channelName: "DAR_UP_T34_VO1", value: 0 },/* -- @@value L1 UPS 4 Output Vp(V)-----*/
                                        { channelName: "DAR_UP_T34_VO2", value: 0 },/* -- @@value L2 UPS 4 Output Vp(V)----*/
                                        { channelName: "DAR_UP_T34_VO2", value: 0 }/* -- @@value L3 UPS 4 Output Vp(V)----*/
                                    ]
                                },
                                {
                                    name: "I",
                                    unit: "A",
                                    values: [
                                        { channelName: "DAR_UP_T34_I21", value: 0 },/* -- @@value L1 UPS 4 Output I(A)----*/
                                        { channelName: "DAR_UP_T34_I22", value: 0 },/* -- @@value L2 UPS 4 Output I(A)----*/
                                        { channelName: "DAR_UP_T34_I23", value: 0 }/* -- @@value L3 UPS 4 Output I(A)----*/
                                    ]
                                },
                                {
                                    name: "kVA",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Output kVA----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Output kVA----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Output kVA----*/
                                    ]
                                },
                                {
                                    name: "kW",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Output kW----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Output kW----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Output kW----*/
                                    ]
                                },
                                {
                                    name: "pf",
                                    unit: "",
                                    values: [
                                        { channelName: "xxx", value: 0 },/* -- @@value L1 UPS 4 Output pf(V)----*/
                                        { channelName: "xxx", value: 0 },/* -- @@value L2 UPS 4 Output pf(V)----*/
                                        { channelName: "xxx", value: 0 }/* -- @@value L3 UPS 4 Output pf(V)----*/
                                    ]
                                }
                            ]
                        }
                    ],
                    Battery: {
                        values: [
                            {
                                name: "Volt", unit: "V",
                                channelName: "xxx",/* -- @@value UPS 4 Battery Volt(V)----*/
                                value: 0
                            },
                            {
                                name: "Current", unit: "A",
                                channelName: "xxx",/* -- @@value UPS 4 Battery Current(A)----*/
                                value: 0
                            },
                            {
                                name: "Percent", unit: "%",
                                channelName: "xxx",/* -- @@value UPS 4 Battery Percent(%)----*/
                                value: 0
                            },
                            {
                                name: "Backup Time", unit: "min",
                                channelName: "xxx",/* -- @@value UPS 4 Battery Backup Time(min)----*/
                                value: 0
                            },
                            {
                                name: "Temperature", unit: "oC",
                                channelName: "xxx",/* -- @@value UPS 4 Battery Temperature(oC)----*/
                                value: 0
                            }
                        ]
                    }
                }],/*------------------------------ / data UPS 4 --------------------------*/
            /* ----------------------------- data Rectifier system --------------------*/
            REC_SYSTEM: [
                {
                    name: "REC 1",/* -- @@value ----*/
                    url: "detail/REC_SYSTEM",
                    id: "DAR_RE_RE1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value REC 1 status----*/
                    progress: 0,
                    value1: { channelName: "DAR_RE_RE1_psTotalLoadCurrent", value: 0, unit: "A" },/* -- @@value REC 1 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value REC 1 (kVA)----*/
                },
                {
                    name: "REC 2",/* -- @@value ----*/
                    url: "detail/REC_SYSTEM",
                    id: "DAR_RE_RE2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value REC 2 status----*/
                    progress: 0,
                    value1: { channelName: "DAR_RE_RE2_psTotalLoadCurrent", value: 0, unit: "A" },/* -- @@value REC 2 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value REC 2 (kVA)----*/
                },
                {
                    name: "REC 3",/* -- @@value ----*/
                    url: "detail/REC_SYSTEM",
                    id: "DAR_RE_RE3",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value REC 3 status----*/
                    progress: 0,
                    value1: { channelName: "DAR_RE_RE3_psTotalLoadCurrent", value: 0, unit: "A" },/* -- @@value REC 3 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value REC 3 (kVA)----*/
                },
                {
                    name: "REC 4",/* -- @@value ----*/
                    url: "detail/REC_SYSTEM",
                    id: "DAR_RE_RE4",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value REC 4 status----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_RE_RE4_psTotalLoadCurrent", value: 0, unit: "A" },/* -- @@value REC 4 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value REC 4 (kVA)----*/
                },
                {
                    name: "REC 5",/* -- @@value ----*/
                    url: "detail/REC_SYSTEM",
                    id: "DAR_RE_RE5",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value REC 5 status----*/
                    progress: 0,
                    value1: { channelName: "DAR_RE_RE5_psTotalLoadCurrent", value: 0, unit: "A" },/* -- @@value REC 5 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value REC 5 (kVA)----*/
                },
                {
                    name: "REC 6",/* -- @@value ----*/
                    url: "detail/REC_SYSTEM",
                    id: "DAR_RE_RE6",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value REC 6 status----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_RE_RE6_psTotalLoadCurrent", value: 0, unit: "A" },/* -- @@value REC 6 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value REC 6 (kVA)----*/
                },
                {
                    name: "REC 7",/* -- @@value ----*/
                    url: "detail/REC_SYSTEM",
                    id: "DAR_RE_RE7",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value REC 7 status----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_RE_RE7_psTotalLoadCurrent", value: 0, unit: "A" },/* -- @@value REC 7 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value REC 7 (kVA)----*/
                },
                {
                    name: "REC 8",/* -- @@value ----*/
                    url: "detail/REC_SYSTEM",
                    id: "DAR_RE_RE8",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value REC 8 status----*/
                    progress: 0,
                    value1: { channelName: "DAR_RE_RE8_psTotalLoadCurrent", value: 0, unit: "A" },/* -- @@value REC 8 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value REC 8 (kVA)----*/
                }
            ],
            REC_SYSTEM_DETAIL: [
                {
                    name: "RE",/* -- @@value ----*/
                    description: "Rectifier system",/* -- @@value ----*/
                    images: "images/elec_sld.png" /* -- @@value ----*/
                }
            ],
            /* ----------------------------- /data Rectifier system --------------------*/
            /* ----------------------------- data DAR_RE_RE1 --------------------*/
            DAR_RE_RE1: [
                {
                    name: "RECTIFIER 1",/* -- @@value ----*/
                    id : "DAR_RE_RE1",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "Rectifier System",
                    images: "images/UPSEmerson.png",/* -- @@value image REC 1----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "",
                            datas: [],
                            Parameter: [
                                {
                                    name: "#",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value REC 1 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  REC 1 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 1 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 1 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 1 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 1 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 1 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 1 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 1 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 1 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 1 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 1 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 1 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 1 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 1 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 1 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 1 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 1 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 1 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 1 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE1 --------------------*/
            /* ----------------------------- data DAR_RE_RE2 --------------------*/
            DAR_RE_RE2: [
                {
                    name: "RECTIFIER 2",/* -- @@value ----*/
                    id : "DAR_RE_RE3",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "Rectifier System",
                    images: "images/UPSEmerson.png",/* -- @@value image REC 2----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "",
                            datas: [],
                            Parameter: [
                                {
                                    name: "#",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value REC 2 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  REC 2 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 2 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 2 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 2 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 2 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 2 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 2 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 2 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 2 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 2 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 2 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 2 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 2 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 2 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 2 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 2 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE2--------------------*/
            /* ----------------------------- data DAR_RE_RE3 --------------------*/
            DAR_RE_RE3: [
                {
                    name: "RECTIFIER 3",/* -- @@value ----*/
                    id : "DAR_RE_RE3",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "Rectifier System",
                    images: "images/UPSEmerson.png",/* -- @@value image REC 3----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "",
                            datas: [],
                            Parameter: [
                                {
                                    name: "#",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value REC 3 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  REC 3 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 3 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 3 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 3 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 3 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 3 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 3 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 3 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 3 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 3 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 3 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 3 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 3 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 3 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 3 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 3 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 3 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 3 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 3 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE3 --------------------*/
            /* ----------------------------- data DAR_RE_RE4 --------------------*/
            DAR_RE_RE4: [
                {
                    name: "RECTIFIER 4",/* -- @@value ----*/
                    id : "DAR_RE_RE4",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "Rectifier System",
                    images: "images/UPSEmerson.png",/* -- @@value image REC 4----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "",
                            datas: [],
                            Parameter: [
                                {
                                    name: "#",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value REC 4 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  REC 4 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 4 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 4 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 4 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 4 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 4 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 4 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 4 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 4 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 4 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 4 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 4 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 4 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 4 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 4 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 4 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 4 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 4 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 4 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE4 --------------------*/
            /* ----------------------------- data DAR_RE_RE5 --------------------*/
            DAR_RE_RE5: [
                {
                    name: "RECTIFIER 5",/* -- @@value ----*/
                    id : "DAR_RE_RE5",
                    description: " DEUTZ 500kVA",
                    System: "Rectifier System",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value image REC 5----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "",
                            datas: [],
                            Parameter: [
                                {
                                    name: "#",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value REC 5 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  REC 5 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 5 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 5 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 5 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 5 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 5 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 5 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 5 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 5 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 5 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 5 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 5 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 5 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 5 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 5 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 5 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 5 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 5 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 5 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE5 --------------------*/
            /* ----------------------------- data DAR_RE_RE6 --------------------*/
            DAR_RE_RE6: [
                {
                    name: "RECTIFIER 6",/* -- @@value ----*/
                    id : "DAR_RE_RE6",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "Rectifier System",
                    images: "images/UPSEmerson.png",/* -- @@value image REC 6----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "",
                            datas: [],
                            Parameter: [
                                {
                                    name: "#",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value REC 6 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  REC 6 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 6 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 6 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 6 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 6 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 6 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 6 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 6 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 6 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 6 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 6 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 6 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 6 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 6 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 6 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 6 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 6 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 6 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 6 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE6 --------------------*/
            /* ----------------------------- data DAR_RE_RE7 --------------------*/
            DAR_RE_RE7: [
                {
                    name: "RECTIFIER 7",/* -- @@value ----*/
                    id : "DAR_RE_RE7",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "Rectifier System",
                    images: "images/UPSEmerson.png",/* -- @@value image REC 7----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "",
                            datas: [],
                            Parameter: [
                                {
                                    name: "#",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value REC 7 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  REC 7 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 7 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 7 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 7 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 7 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 7 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 7 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 7 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 7 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 7 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 7 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 7 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 7 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 7 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 7 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 7 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 7 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 7 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 7 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE7 --------------------*/
            /* ----------------------------- data DAR_RE_RE8 --------------------*/
            DAR_RE_RE8: [
                {
                    name: "RECTIFIER 8",/* -- @@value ----*/
                    id : "DAR_RE_RE8",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "Rectifier System",
                    images: "images/UPSEmerson.png",/* -- @@value image REC 8----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "",
                            datas: [],
                            Parameter: [
                                {
                                    name: "#",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value REC 8 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  REC 8 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 8 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 8 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 8 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 8 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 8 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 8 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 8 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 8 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 8 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 8 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 8 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 8 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 8 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 8 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 8 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 REC 8 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 REC 8 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 REC 8 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_RE_RE8 --------------------*/
            /* ----------------------------- data DHCX system --------------------*/
            DHCX_SYSTEM: [
                {
                    name: "DHCX 1",/* -- @@value ----*/
                    url: "detail/DHCX_SYSTEM",
                    id: "DAR_PI_DX1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1 status----*/
                    progress: 0,
                    value1: { channelName: "DAR_PI_DX1_RAT", value: 0, unit: "°C" },/* -- @@value DHCX 1 (°C)----*/
                    value2: { channelName: "DAR_PI_DX1_RAH", value: 0, unit: "%RH" }/* -- @@value DHCX 1 (%RH)----*/
                },
                {
                    name: "DHCX 2",/* -- @@value ----*/
                    url: "detail/DHCX_SYSTEM",
                    id: "DAR_PI_DX2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2 status----*/
                    progress: 0,
                    value1: { channelName: "DAR_PI_DX2_RAT", value: 0, unit: "°C" },/* -- @@value DHCX 2 (°C)----*/
                    value2: { channelName: "DAR_PI_DX2_RAH", value: 0, unit: "%RH" }/* -- @@value DHCX 2 (%RH)----*/
                },
                {
                    name: "DHCX 3",/* -- @@value ----*/
                    url: "detail/DHCX_SYSTEM",
                    id: "DAR_PI_DX3",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3 status----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PI_DX3_RAT", value: 0, unit: "°C" },/* -- @@value DHCX 3 (°C)----*/
                    value2: { channelName: "DAR_PI_DX3_RAH", value: 0, unit: "%RH" }/* -- @@value DHCX 3 (%RH)----*/
                },
                {
                    name: "DHCX 4",/* -- @@value ----*/
                    url: "detail/DHCX_SYSTEM",
                    id: "DAR_PI_DX4",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4 status----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PI_DX4_RAT", value: 0, unit: "°C" },/* -- @@value DHCX 4 (°C)----*/
                    value2: { channelName: "DAR_PI_DX4_RAH", value: 0, unit: "%RH" }/* -- @@value DHCX 4 (%RH)----*/
                },
                {
                    name: "DHCX 5",/* -- @@value ----*/
                    url: "detail/DHCX_SYSTEM",
                    id: "DAR_PI_DX5",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5 status----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PI_DX5_RAT", value: 0, unit: "°C" },/* -- @@value DHCX 5 (°C)----*/
                    value2: { channelName: "DAR_PI_DX5_RAH", value: 0, unit: "%RH" }/* -- @@value DHCX 5 (%RH)----*/
                },
                {
                    name: "DHCX 6",/* -- @@value ----*/
                    url: "detail/DHCX_SYSTEM",
                    id: "DAR_PI_DX6",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6 status----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PI_DX6_RAT", value: 0, unit: "°C" },/* -- @@value DHCX 6 (°C)----*/
                    value2: { channelName: "DAR_PI_DX6_RAH", value: 0, unit: "%RH" }/* -- @@value DHCX 6 (%RH)----*/
                },
                {
                    name: "DHCX 7",/* -- @@value ----*/
                    url: "detail/DHCX_SYSTEM",
                    id: "DAR_PI_DX7",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7 status----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PI_DX7_RAT", value: 0, unit: "°C" },/* -- @@value DHCX 7 (°C)----*/
                    value2: { channelName: "DAR_PI_DX7_RAH", value: 0, unit: "%RH" }/* -- @@value DHCX 7 (%RH)----*/
                },
                {
                    name: "DHCX 8",/* -- @@value ----*/
                    url: "detail/DHCX_SYSTEM",
                    id: "DAR_PI_DX8",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8 status----*/  
                    progress: 0,
                    value1: { channelName: "DAR_PI_DX8_RAT", value: 0, unit: "°C" },/* -- @@value DHCX 8 (°C)----*/
                    value2: { channelName: "DAR_PI_DX8_RAH", value: 0, unit: "%RH" }/* -- @@value DHCX 8 (%RH)----*/
                }
            ],
            DHCX_SYSTEM_DETAIL: [
                {
                    name: "PI",/* -- @@value ----*/
                    description: "Precision air-conditioning - Indoor unit",/* -- @@value ----*/
                    images: "images/elec_sld.png" /* -- @@value ----*/
                }
            ],
            /* ----------------------------- /data DHCX system --------------------*/
            /* ----------------------------- data DAR_PI_DX1 --------------------*/
            DAR_PI_DX1: [
                {
                    name: "DHCX 1",/* -- @@value ----*/
                    id : "DAR_PI_DX1",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "PI System",
                    images: "images/UPSEmerson.png",/* -- @@value image DHCX 1----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "System On (Fan)",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 1",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 2",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Dehumidification",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Humidification",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    name : "Room Temperature",
                                    icon: "fa-li fa fa-tint",
                                    status: {value: -1},
                                    value : { channelName: "xxx", value: 0, unit: "°C" }/* -- @@@value DHCX 1----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Room Humidity",
                                    icon: "fa-li fa fa-sun-o",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "%RH" }/* -- @@@value DHCX 1----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Run Hours",
                                    icon: "fa-li fa fa-calendar",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "days" }/* -- @@@value DHCX 1----*/
                                },
                                /*--------- Status ----------*/ 
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit on Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Low Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Low Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Clogged Filter Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Flooding Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Air Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Heater Overheating Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Water Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 1----*/
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
                    name: "DHCX 2",/* -- @@value ----*/
                    id : "DAR_PI_DX2",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "PI System",
                    images: "images/UPSEmerson.png",/* -- @@value image DHCX 2----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "System On (Fan)",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 1",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 2",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Dehumidification",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Humidification",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    name : "Room Temperature",
                                    icon: "fa-li fa fa-tint",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "°C" }/* -- @@@value DHCX 2----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Room Humidity",
                                    icon: "fa-li fa fa-sun-o",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "%RH" }/* -- @@@value DHCX 2----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Run Hours",
                                    icon: "fa-li fa fa-calendar",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "days" }/* -- @@@value DHCX 2----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit on Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Low Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Low Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Clogged Filter Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Flooding Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Air Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Heater Overheating Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Water Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- data DAR_PI_DX2 --------------------*/
            /* ----------------------------- data DAR_PI_DX3 --------------------*/
            DAR_PI_DX3: [
                {
                    name: "DHCX 3",/* -- @@value ----*/
                    id : "DAR_PI_DX3",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "PI System",
                    images: "images/UPSEmerson.png",/* -- @@value image DHCX 3----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "System On (Fan)",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 1",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 2",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Dehumidification",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Humidification",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    name : "Room Temperature",
                                    icon: "fa-li fa fa-tint",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "°C" }/* -- @@@value DHCX 3----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Room Humidity",
                                    icon: "fa-li fa fa-sun-o",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "%RH" }/* -- @@@value DHCX 3----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Run Hours",
                                    icon: "fa-li fa fa-calendar",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "days" }/* -- @@@value DHCX 3----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit on Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Low Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Low Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Clogged Filter Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Flooding Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Air Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Heater Overheating Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Water Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 3----*/
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
                    name: "DHCX 4",/* -- @@value ----*/
                    id : "DAR_PI_DX4",
                    description: " DEUTZ 500kVA",/* -- @@value ----*/
                    System: "PI System",
                    images: "images/UPSEmerson.png",/* -- @@value image DHCX 4----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "System On (Fan)",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 1",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 2",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Dehumidification",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Humidification",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    name : "Room Temperature",
                                    icon: "fa-li fa fa-tint",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "°C" }/* -- @@@value DHCX 4----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Room Humidity",
                                    icon: "fa-li fa fa-sun-o",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "%RH" }/* -- @@@value DHCX 4----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Run Hours",
                                    icon: "fa-li fa fa-calendar",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "days" }/* -- @@@value DHCX 4----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit on Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Low Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Low Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Clogged Filter Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Flooding Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Air Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Heater Overheating Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Water Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 4----*/
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
                    name: "DHCX 5",/* -- @@value name DHCX 5----*/
                    id : "DAR_PI_DX5",
                    description: " DEUTZ 500kVA",/* -- @@value description DHCX 5----*/
                    System: "PI System",
                    images: "images/UPSEmerson.png",/* -- @@value image DHCX 5----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "System On (Fan)",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 1",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 2",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Dehumidification",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Humidification",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    name : "Room Temperature",
                                    icon: "fa-li fa fa-tint",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "°C" }/* -- @@@value DHCX 5----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Room Humidity",
                                    icon: "fa-li fa fa-sun-o",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "%RH" }/* -- @@@value DHCX 5----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Run Hours",
                                    icon: "fa-li fa fa-calendar",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "days" }/* -- @@@value DHCX 5----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit on Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Low Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Low Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Clogged Filter Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Flooding Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Air Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Heater Overheating Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Water Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 5----*/
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
                    name: "DHCX 6",/* -- @@value name DHCX 6----*/
                    id : "DAR_PI_DX6",
                    description: " DEUTZ 500kVA",/* -- @@value description DHCX 6----*/
                    System: "PI System",
                    images: "images/UPSEmerson.png",/* -- @@value image DHCX 6----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "System On (Fan)",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 1",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 2",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Dehumidification",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Humidification",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    name : "Room Temperature",
                                    icon: "fa-li fa fa-tint",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "°C" }/* -- @@@value DHCX 6----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Room Humidity",
                                    icon: "fa-li fa fa-sun-o",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "%RH" }/* -- @@@value DHCX 6----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Run Hours",
                                    icon: "fa-li fa fa-calendar",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "days" }/* -- @@@value DHCX 6----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit on Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Low Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Low Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Clogged Filter Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Flooding Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Air Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Heater Overheating Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Water Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 6----*/
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
                    name: "DHCX 7",/* -- @@value name DHCX 7----*/
                    id : "DAR_PI_DX7",
                    description: " DEUTZ 500kVA",/* -- @@value description DHCX 7----*/
                    System: "PI System",
                    images: "images/UPSEmerson.png",/* -- @@value image DHCX 7----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "System On (Fan)",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 1",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 2",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Dehumidification",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Humidification",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    name : "Room Temperature",
                                    icon: "fa-li fa fa-tint",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "°C" }/* -- @@@value DHCX 7----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Room Humidity",
                                    icon: "fa-li fa fa-sun-o",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "%RH" }/* -- @@@value DHCX 7----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Run Hours",
                                    icon: "fa-li fa fa-calendar",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "days" }/* -- @@@value DHCX 7----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit on Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Low Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Low Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Clogged Filter Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Flooding Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Air Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Heater Overheating Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Water Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 7----*/
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
                    name: "DHCX 8",/* -- @@value name DHCX 8----*/
                    id : "DAR_PI_DX8",
                    description: " DEUTZ 500kVA",/* -- @@value description DHCX 8----*/
                    System: "PI System",
                    images: "images/UPSEmerson.png",/* -- @@value image DHCX 8----*/
                    Status: [
                          /*--------- block Status ----------*/
                        {
                            name : "System On (Fan)",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 1",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "El. Heater 2",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Dehumidification",
                                    icon: "fa-li fa fa-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Humidification",
                                    icon: "fa-li fa fa-circle-o",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                {
                                    name : "Room Temperature",
                                    icon: "fa-li fa fa-tint",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "°C" }/* -- @@@value DHCX 8----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Room Humidity",
                                    icon: "fa-li fa fa-sun-o",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "%RH" }/* -- @@@value DHCX 8----*/
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Run Hours",
                                    icon: "fa-li fa fa-calendar",
                                    status: { value: -1 },
                                    value : { channelName: "xxx", value: 0, unit: "days" }/* -- @@@value DHCX 8----*/
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Unit on Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Low Room Temperature Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "High Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                 /*--------- Status ----------*/
                                {
                                    name : "Low Room Humidity Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Clogged Filter Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Flooding Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Air Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Heater Overheating Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "Loss of Water Flow Alarm",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value DHCX 8----*/
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
            PW_SYSTEM: [
                {
                    name: "LV 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_LV1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value LV 1----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PW_LV1_PM117_kVA", value: 0, unit: "kVA" }/* -- @@value LV 1 ----*/
                },
                {
                    name: "LV 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_LV2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value LV 2----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PW_LV2_PM118_kVA", value: 0, unit: "kVA" }/* -- @@value LV 2 ----*/
                },
                {
                    name: "TBU 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_BU1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value TBU 1----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PW_BU1_PM111_kVA", value: 0, unit: "kVA" }/* -- @@value TBU 1 ----*/
                },
                {
                    name: "TBU 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_BU2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value TBU 1----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_BU2_PM114_kVA", value: 0, unit: "kVA" }/* -- @@value TBU 2 ----*/
                },
                {
                    name: "ATS 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_AT1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value ATS 1----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_AT1_PM112_kVA", value: 0, unit: "kVA" }/* -- @@value ATS 1 ----*/
                },
                {
                    name: "ATS 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_AT2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value ATS 2----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PW_AT2_PM113_kVA", value: 0, unit: "kVA" }/* -- @@value ATS 2 ----*/
                },
                {
                    name: "TCM",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_TC1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value TCM ----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_TC1_PM115_kVA", value: 0, unit: "kVA" }/* -- @@value TCM ----*/
                },
                {
                    name: "UPSDB 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_UP2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPSDB 2----*/ 
                    progress: 0,
                    value1: { channelName: "DAR_PW_UP2_PM110_kVA", value: 0, unit: "kVA" }/* -- @@value UPSDB 2 ----*/
                },
                {
                    name: "ACDB 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_AC1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value ACDB 1----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_AC1_PM107_kVA", value: 0, unit: "kVA" }/* -- @@value ACDB 1 ----*/
                },
                {
                    name: "EMDB 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_EM1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value EMDB 1----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_EM1_PM108_kVA", value: 0, unit: "kVA" }/* -- @@value EMDB 1 ----*/
                },
                {
                    name: "EMDB 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_EM2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value EMDB 2----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_EM2_PM109_kVA", value: 0, unit: "kVA" }/* -- @@value EMDB 2 ----*/
                },
                {
                    name: "UDB 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_UD1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value UDB 1----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_UD1_PM101_kVA", value: 0, unit: "kVA" }/* -- @@value UDB 1 ----*/
                },
                {
                    name: "UDB 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_UD2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value UDB 2----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_UD2_PM103_kVA", value: 0, unit: "kVA" }/* -- @@value UDB 2 ----*/
                },
                {
                    name: "PDU 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_PU1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value PDU 1----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_PU1_PM105_kVA", value: 0, unit: "kVA" }/* -- @@value PDU 1 ----*/
                },
                {
                    name: "PDU 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_PU2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value PDU 2----*/
                    progress: 0,
                    value1: { channelName: "DAR_PW_PU2_PM106_kVA", value: 0, unit: "kVA" }/* -- @@value PDU 2 ----*/
                },
                {
                    name: "DCDB 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_DB1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DCDB 1----*/
                    progress: 0,
                    value1: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value DCDB 1 ----*/
                },
                {
                    name: "UPSDB 1",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_UP1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value UPSDB 1----*/
                    progress: 0,
                    value1: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value UPSDB 1 ----*/
                },
                {
                    name: "ACDB 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_AC2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value ACDB 2----*/
                    progress: 0,
                    value1: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value ACDB 2 ----*/
                },
                {
                    name: "DCDB 2",/* -- @@value ----*/
                    url: "detail/PW_SYSTEM",
                    id: "DAR_PW_DB2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value DCDB 2----*/
                    progress: 0,
                    value1: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value DCDB 2 ----*/
                },
                0
            ],
            PW_SYSTEM_DETAIL: [
                {
                    name: "PW",/* -- @@value ----*/
                    description: "Power switchboard",/* -- @@value name Power switchboard ----*/
                    images: "images/elec_sld.png"/* -- @@value image map Power switchboard ----*/
                }
            ],
            DAR_PW_LV1: [
                {
                    name: "LV 1",/* -- @@value ----*/
                    id : "DAR_PW_LV1",
                    description: " Low Voltage 1",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Main CB: ON",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value LV 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "SPD CB: On",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value LV 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                
                            ]
                        },
                        /*--------- /block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: [
                                {
                                    name: "Power Meter",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value LV 1 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  LV 1 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 1 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 1 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 1 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 1 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 1 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 1 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 1 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 1 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 1 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 1 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 1 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 1 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 1 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 1 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 1 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 1 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 1 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 1 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                            datas: 0,
                        }
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_LV2: [
                {
                    name: "LV 2",/* -- @@value ----*/
                    id : "DAR_PW_LV2",
                    description: "Low Voltage 2",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Main CB: ON",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value LV 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "SPD CB: On",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value LV 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: [
                                {
                                    name: "Power Meter",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value LV 2 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  LV 2 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 2 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 2 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 2 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 2 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 2 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 2 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 2 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 2 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 2 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 2 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 2 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 2 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 LV 2 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 LV 2 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 LV 2 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                            datas: 0,
                        }
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_DB2: [
                {
                    name: "DCDB 2",/* -- @@value name DCDB 2 ----*/
                    id : "DAR_PW_DB2",
                    description: "DCDB 2 switchboard",/* -- @@value description DCDB 2 ----*/
                    images: "images/UPSEmerson.png",/* -- @@value image DCDB 2 ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
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
                        {
                            name : "",
                            Parameter: 0,
                            table: [
                                {
                                    name: "name",/* tên bảng  */
                                    th: [
                                        /*-----co the lặp đi lặp lại nhiều cột ở đây------*/
                                        /*-----th1------*/
                                        { name: "L1" }, /* cột 1 */
                                        /*-----/th1------*/
                                        /*-----th2------*/
                                        { name: "L2" },/* cột 2 */
                                        /*-----/th2------*/
                                        
                                    ],
                                    tr: [
                                        /*-----co the lặp đi lặp lại nhiều dòng ở đây ------*/
                                        /* --- dòng 1 -----*/
                                        {
                                            name: "name ",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- giá trị dòng 1 cột 1----*/
                                                { channelName: "xxx", value: 0 },/* -- giá trị dòng 1 cột 2-----*/
                                            ]
                                        },
                                        /* --- /dòng 1 -----*/
                                        /* --- dòng 2 -----*/
                                        {
                                            name: "name ",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- giá trị dòng 2 cột 1----*/
                                                { channelName: "xxx", value: 0 },/* -- giá trị dòng 2 cột 2-----*/
                                            ]
                                        },
                                        /* --- /dòng 2 -----*/
                                        
                                    ]
                                }
                            ],
                            datas: 0,
                        }
                        /*--------- /block table template Status end ----------*/
                         /* coppy end */
                        /* block table template Status end*/
                    ]
                }
            ],
            DAR_PW_AC2: [
                {
                    name: "ACDB 2",/* -- @@value name ACDB 2 ----*/
                    id : "DAR_PW_AC2",
                    description: "ACDB 2 switchboard",/* -- @@value description ACDB 2 ----*/
                    images: "images/UPSEmerson.png", /* -- @@value image ACDB 2 ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_UP1: [
                {
                    name: "UPSDB 1",/* -- @@value name UPSDB 1 ----*/
                    id : "DAR_PW_UP1",
                    description: "UPSDB 1 switchboard",/* -- @@value description UPSDB 1 ----*/
                    images: "images/UPSEmerson.png",/* -- @@value image UPSDB 1 ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_DB1: [
                {
                    name: "DCDB 1",/* -- @@value name DCDB 1 ----*/
                    id : "DAR_PW_DB1",
                    description: "DCDB 1 switchboard",/* -- @@value description DCDB 1 ----*/
                    images: "images/UPSEmerson.png",/* -- @@value image DCDB 1 ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_PU2: [
                {
                    name: "PDU 2",/* -- @@value ----*/
                    id : "DAR_PW_PU2",
                    description: "PDU 2 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
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
                    name: "PDU 1",/* -- @@value ----*/
                    id : "DAR_PW_PU1",
                    description: "PDU 1 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_UD2: [
                {
                    name: "UDB 2",/* -- @@value ----*/
                    id : "DAR_PW_UD2",
                    description: "UDB 2 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_UD1: [
                {
                    name: "UDB 1",/* -- @@value ----*/
                    id : "DAR_PW_UD1",
                    description: "UDB 1 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_EM2: [
                {
                    name: "EMDB 2",/* -- @@value ----*/
                    id : "DAR_PW_EM2",
                    description: "EMDB 2 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_EM1: [
                {
                    name: "EMDB 1",/* -- @@value ----*/
                    id : "DAR_PW_EM1",
                    description: "EMDB 1 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_AC1: [
                {
                    name: "ACDB 1",/* -- @@value ----*/
                    id : "DAR_PW_AC1",
                    description: "ACDB 1 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_TC1: [
                {
                    name: "TCM 1",/* -- @@value ----*/
                    id : "DAR_PW_TC1",
                    description: "TCM 1 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
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
                    name: "UPSDB2 2",/* -- @@value ----*/
                    id : "DAR_PW_UP2",
                    description: "UPSDB2 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
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
                    name: "ATS 1",/* -- @@value ----*/
                    id : "DAR_PW_AT1",
                    description: "ATS 1 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
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
                    name: "ATS 2",/* -- @@value ----*/
                    id : "DAR_PW_AT2",
                    description: "ATS2 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
                                    value : 0
                                },
                                /*--------- /end Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_PW_BU1: [
                {
                    name: "TBU 1",/* -- @@value ----*/
                    id : "DAR_PW_BU1",
                    description: "TBU 1 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
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
                    name: "TBU 2",/* -- @@value ----*/
                    id : "DAR_PW_BU2",
                    description: "TBU 2 switchboard",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Power switchboard",
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /* có thể lặp đi lặp lại để thêm nhiều status * /
                                 /* --------- stats Status ----------*/
                                {
                                    name : "status 1",/* -- @@@value ----*/
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value ----*/
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
            WARNING_SYSTEM: [
                {
                    name: "HSSD",
                    element: [
                        {
                            name: "Fire",
                            icon: "glyphicon glyphicon-fire",
                            value: "",
                            unit: "",
                            status: { channelName: "xxx", value: 0 },/* -- @@@value HSSD Fire status----*/
                        },
                        {
                            name: "Trouble",
                            icon: "fa fa-exclamation-triangle",
                            value: "",
                            unit: "",
                            status: { channelName: "xxx", value: 0 },/* -- @@@value HSSD Trouble status----*/
                        }
                    ]
                },
                {
                    name: "LASER",
                    element: [
                        {
                            name: "Fire",
                            icon: "glyphicon glyphicon-fire",
                            value: "",
                            unit: "",
                            status: { channelName: "xxx", value: 0 },/* -- @@@value LASER Fire status----*/
                        },
                        {
                            name: "Trouble",
                            icon: "fa fa-exclamation-triangle",
                            value: "",
                            unit: "",
                            status: { channelName: "xxx", value: 0 },/* -- @@@value LASER Trouble status----*/
                        }
                    ]
                },
                {
                    name: "LLD",
                    element: [
                        {
                            name: "Leak",
                            icon: "fa fa-tint",
                            value: "",
                            unit: "",
                            status: { channelName: "xxx", value: 0 },/* -- @@@value LLD Leak status----*/
                        },
                        {
                            name: "",
                            icon: "fa fa-map-marker",
                            value: { channelName: "xxx", value: 0 },/* -- @@@value LLD m ----*/
                            unit: 'm',
                            status: { channelName: "xxx", value: 0 },/* -- @@@value LLD m status----*/
                        },
                        {
                            name: "Break",
                            icon: "fa fa-chain-broken",
                            value: "",
                            unit: "",
                            status: { channelName: "xxx", value: 0 },/* -- @@@value LLD Break status----*/
                        }
                    ]
                }
            ],
            HS_SYSTEM: [],
            HS_SYSTEM_DETAIL: [
                {
                    name: "HS",/* -- @@value ----*/
                    description: "High sensitive smoke detection",/* -- @@value ----*/
                    images: "images/elec_sld.png" /* -- @@value ----*/
                }
            ],
            /* ----------------------------- /data WARNING_SYSTEM  --------------------*/
            /* ----------------------------- data GS_SYSTEM  --------------------*/
            GS_SYSTEM: [
                {
                    name: "Genset 1",/* -- @@value ----*/
                    url: "detail/GS_SYSTEM",
                    id: "DAR_GS_BG1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value Genset 1----*/
                    progress: 0,
                    value1: { channelName: "xxx", value: 0, unit: "A" },/* -- @@value Genset 1 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value Genset 1 (kVA)----*/
                },
                {
                    name: "Genset 2",/* -- @@value ----*/
                    url: "detail/GS_SYSTEM",
                    id: "DAR_GS_BG2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value Genset 2----*/
                    progress: 0,
                    value1: { channelName: "xxx", value: 0, unit: "A" },/* -- @@value Genset 2 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value Genset 2 (kVA)----*/
                }
            ],
            GS_SYSTEM_DETAIL: [
                {
                    name: "GS",/* -- @@value ----*/
                    description: "Generator set",/* -- @@value ----*/
                    images: "images/elec_sld.png"/* -- @@value ----*/
                }
            ],
            DAR_GS_BG1: [
                {
                    name: "Genset 1",/* -- @@value ----*/
                    id : "DAR_GS_BG1",
                    description: "DEUTZ 500kVA",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Generator set",/* -- @@value ----*/
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Genset: Running",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Genset 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "System: Normal",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Genset 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
								/*--------- Status ----------*/
                                {
                                    name : "Fuel: Full",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Genset 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: [
                                {
                                    name: "Power Meter",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value Genset 1 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  Genset 1 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 1 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 1 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 1 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 1 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 1 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 1 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 1 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 1 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 1 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 1 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 1 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 1 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 1 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 1 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 1 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 1 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 1 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 1 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                            datas: 0,
                        }
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_GS_BG2: [
                {
                    name: "Genset 2",/* -- @@value ----*/
                    id : "DAR_GS_BG2",
                    description: "DEUTZ 500kVA",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Generator set",/* -- @@value ----*/
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Genset: Running",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Genset 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "System: Normal",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Genset 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
								/*--------- Status ----------*/
                                {
                                    name : "Fuel: Full",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Genset 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: [
                                {
                                    name: "Power Meter",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value Genset 2 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  Genset 2 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 2 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 2 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 2 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 2 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 2 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 2 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 2 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 2 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 2 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 2 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 2 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 2 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Genset 2 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Genset 2 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Genset 2 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                            datas: 0,
                        }
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- /data GS_SYSTEM  --------------------*/
            /* ----------------------------- data TF_SYSTEM  --------------------*/
            TF_SYSTEM: [
                {
                    name: "Dry-transformer 1",/* -- @@value ----*/
                    url: "detail/TF_SYSTEM",
                    id: "DAR_TF_DT1",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value Dry-transformer 1 stauts---*/
                    progress: 0,
                    value1: { channelName: "xxx", value: 0, unit: "A" },/* -- @@value Dry-transformer 1 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value Dry-transformer 1 (kVA)----*/
                },
                {
                    name: "Dry-transformer 2",/* -- @@value ----*/
                    url: "detail/TF_SYSTEM",
                    id: "DAR_TF_DT2",
                    status: { channelName: "xxx", value: 0 },/* -- @@@value Dry-transformer 2 stauts---*/
                    progress: 0,
                    value1: { channelName: "xxx", value: 0, unit: "A" },/* -- @@value Dry-transformer 2 (A)----*/
                    value2: { channelName: "xxx", value: 0, unit: "kVA" }/* -- @@value Dry-transformer 2 (kVA)----*/
                }
            ],
            TF_SYSTEM_DETAIL: [
                {
                    name: "TF",/* -- @@value ----*/
                    description: "Transformer utility",/* -- @@value ----*/
                    images: "images/elec_sld.png"/* -- @@value ----*/
                }
            ],
            DAR_TF_DT1: [
                {
                    name: "Dry-transformer 1",/* -- @@value ----*/
                    id : "DAR_TF_DT1",
                    description: "DEUTZ 500kVA",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Transformer utility",/* -- @@value ----*/
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Dry-transformer: Running",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Dry-transformer 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "System: Normal",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Dry-transformer 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
								/*--------- Status ----------*/
                                {
                                    name : "Fuel: Full",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Dry-transformer 1----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: [
                                {
                                    name: "Power Meter",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value Dry-transformer 1 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  Dry-transformer 1 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 1 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 1 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 1 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 1 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 1 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 1 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 1 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 1 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 1 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 1 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 1 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 1 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 1 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 1 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 1 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 1 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 1 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 1 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                            datas: 0,
                        }
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            DAR_TF_DT2: [
                {
                    name: "Dry-transformer 2",/* -- @@value ----*/
                    id : "DAR_TF_DT2",
                    description: "DEUTZ 500kVA",/* -- @@value ----*/
                    images: "images/UPSEmerson.png",/* -- @@value ----*/
                    System: "Transformer utility",/* -- @@value ----*/
                    Status: [
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: 0,
                            datas: [
                                /*--------- Status ----------*/
                                {
                                    name : "Dry-transformer: Running",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Dry-transformer 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                                /*--------- Status ----------*/
                                {
                                    name : "System: Normal",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Dry-transformer 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
								/*--------- Status ----------*/
                                {
                                    name : "Fuel: Full",
                                    icon: "fa-li fa fa-check-circle",
                                    status: { channelName: "xxx", value: 0 },/* -- @@@value Dry-transformer 2----*/
                                    value : 0
                                },
                                /*--------- Status ----------*/
                            ]
                        },
                        /*--------- /block Status ----------*/
                        /*--------- block Status ----------*/
                        {
                            name : "",
                            Parameter: [
                                {
                                    name: "Power Meter",
                                    kWh: { channelName: "xxx", value: 0, unit: "kWh" },/* -- @@@value Dry-transformer 2 kVA----*/
                                    Time: { channelName: "xxx", value: 0, unit: "min" },/* -- @@@value  Dry-transformer 2 Running Time----*/
                                    datapar: [
                                        {
                                            name: "Vd",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 2 Vd(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 2 Vd(V)-----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 2 Vd(V)-----*/
                                            ]
                                        },
                                        {
                                            name: "Vp",
                                            unit: "V",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 2 Vp(V)-----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 2 Vp(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 2 Vp(V)----*/
                                            ]
                                        },
                                        {
                                            name: "I",
                                            unit: "A",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 2 I(A)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 2 I(A)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 2 I(A)----*/
                                            ]
                                        },
                                        {
                                            name: "kVA",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 2 kVA----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 2 kVA----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 2 kVA----*/
                                            ]
                                        },
                                        {
                                            name: "kW",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 2 kW----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 2 kW----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 2 kW----*/
                                            ]
                                        },
                                        {
                                            name: "pf",
                                            unit: "",
                                            valuespar: [
                                                { channelName: "xxx", value: 0 },/* -- @@@value L1 Dry-transformer 2 pf(V)----*/
                                                { channelName: "xxx", value: 0 },/* -- @@@value L2 Dry-transformer 2 pf(V)----*/
                                                { channelName: "xxx", value: 0 }/* -- @@@value L3 Dry-transformer 2 pf(V)----*/
                                            ]
                                        }
                                    ]
                                }
                            ],
                            datas: 0,
                        }
                        /*--------- /block Status ----------*/
                    ]
                }
            ],
            /* ----------------------------- /data TF_SYSTEM  --------------------*/
            /* ----------------------------- data LL_SYSTEM  --------------------*/
            LL_SYSTEM: [],
            LL_SYSTEM_DETAIL: [
                {
                    name: "LL",/* -- @@value ----*/
                    description: "Liquid leak detection",/* -- @@value ----*/
                    images: "images/elec_sld.png"/* -- @@value ----*/
                }
            ],
            /* ----------------------------- /data LL_SYSTEM  --------------------*/
        }/*------/data-----*/
        function random(val) {
            return Math.floor((Math.random() * val));
        }
        var dataMap = this;
        dataMap.getByKey = function (key) {
            for (var prop in data) {
                if (data.hasOwnProperty(prop)) {
                    if (prop = key)
                        return data[prop];
                }
            }
            return 0;
        }
        return dataMap;
    }
});
