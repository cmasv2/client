/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(["durandal/app", "plugins/router", "knockout","moment"], function (app, router, ko, Moment) {
    if (!app.buff)window.location = "http://" + window.location.host;
    function getT(c) {
        var u = app.buff.find(app.buff.getByKey("LocationAll"), "code", c);
        return u ? u[0] : {name: "NaN", description: "NaN"}
    }

    var childRouter = router.createChildRouter().makeRelative({moduleId: "page", fromParent: true}).map([{
        route: "",
        title: "Dashboard",
        description: "Dashboard",
        icon: "fa-home",
        moduleId: "pages/index",
        nav: false
    }, {
        route: "dashboard",
        title: "Dashboard",
        description: "Dashboard",
        icon: "fa-home",
        moduleId: "pages/dashboard",
        nav: false
    }, {
        route: "ups",
        title: getT("ITW_UP").name,
        description: getT("ITW_UP").description,
        icon: "fa-power-off",
        nav: true,
        hash: "#page/detail/ITW_UP"
    }, {
        route: "power",
        title: getT("ITW_PW").name,
        description: getT("ITW_PW").description,
        icon: "fa-wrench",
        nav: true,
        hash: "#page/detail/ITW_PW"
    }, {
        route: "transformer",
        title: getT("ITW_FF").name,
        description: getT("ITW_FF").description,
        icon: "fa-magic",
        nav: true,
        hash: "#page/detail/ITW_FF"
    }, {
        route: "Environmental",
        title: getT("ITW_EV").name,
        description: getT("ITW_EV").description,
        icon: "fa-magic",
        nav: true,
        hash: "#page/detail/ITW_EV"
    }, {
        route: "conditioning",
        title: getT("ITW_AI").name,
        description: getT("ITW_AI").description,
        icon: "fa-magic",
        nav: true,
        hash: "#page/detail/ITW_AI"
    }, {
        route: "Liquidleakdetection",
        title: getT("ITW_LL").name,
        description: getT("ITW_LL").description,
        icon: "fa-fire",
        nav: true,
        hash: "#page/detail/ITW_LL"
    }, {
        route: "explorer(/:sys)(/:id)(/:idc)",
        title: "Explorer",
        description: "Unit explorer",
        icon: "fa-folder",
        moduleId: "pages/unit-explorer",
        nav: false,
        hash: "#page/explorer/:sys/:id/:idc"
    }, {
        route: "trending",
        title: "Trending",
        description: "Trending",
        icon: "fa-bar-chart",
        moduleId: "pages/trending",
        nav: false
    }, {
        route: "alarm",
        title: "Alarm",
        description: "Alarm summary",
        icon: "fa-bullhorn",
        moduleId: "pages/alarm-summary",
        nav: false
    }, {
        route: "report",
        title: "Report",
        description: " REPORT",
        icon: "fa-clipboard",
        moduleId: "pages/report",
        nav: false
    }, {
        route: "config",
        title: "Config",
        description: "Config",
        icon: "fa-cog",
        moduleId: "pages/config",
        nav: false
    },  {
        route: "acm",
        title: "Access Controll Logs",
        description: "Access Controll Logs",
        icon: "fa-cog",
        moduleId: "pages/acm",
        nav: false
    }, {
        route: "detail(/:sys)(/:id)(/:idc)",
        title: "System",
        description: "System Detail",
        icon: "fa-cog",
        moduleId: "pages/system-detail",
        nav: false,
        hash: "#page/detail/:sys/:id/:idc"
    }]).buildNavigationModel();
    return {
        router: childRouter, childRouterModel: ko.computed(function () {
            return childRouter.navigationModel()
        })
    }
});