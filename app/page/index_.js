/**
 Create by Huy: codocmm@gmail.com ~ nqhuy2k6@gmail.com
 07/31/2015
 */
define(['durandal/app', 'plugins/router', 'knockout'], function (app, router, ko) {
    if (!app.buff)
        window.location = 'http://' + window.location.host;
    function getT(c) {
        var u = app.buff.find(app.buff.getByKey("LocationAll"), "code", c);
        return u ? u[0] : {name: "NaN", description: "NaN"};
    }

    var childRouter = router.createChildRouter().makeRelative({
        moduleId: 'page',
        fromParent: true
    }).map([
        {
            route: '',
            title: 'Dashboard',
            description: 'Dashboard',
            icon: 'fa-home',
            moduleId: 'pages/index',
            nav: false
        },
        {
            route: 'dashboard',
            title: 'Dashboard',
            description: 'Dashboard',
            icon: 'fa-home',
            moduleId: 'pages/dashboard',
            nav: false
        },
        {
            route: 'ups',
            title: getT("CMAS_UP").name,
            description: getT("CMAS_UP").description,
            icon: 'fa-power-off',
            nav: true,
            hash: '#page/detail/CMAS_UP'
        },
        {
            route: 'power',
            title: getT("CMAS_PW").name,
            description: getT("CMAS_PW").description,
            icon: 'fa-wrench',
            nav: true,
            hash: '#page/detail/CMAS_PW'
        },
        {
            route: 'transformer',
            title: getT("CMAS_FF").name,
            description: getT("CMAS_FF").description,
            icon: 'fa-magic',
            nav: true,
            hash: '#page/detail/CMAS_FF'
        },
        {
            route: 'Environmental',
            title: getT("CMAS_EV").name,
            description: getT("CMAS_EV").description,
            icon: 'fa-magic',
            nav: true,
            hash: '#page/detail/CMAS_EV'
        },
        {
            route: 'conditioning',
            title: getT("CMAS_AI").name,
            description: getT("CMAS_AI").description,
            icon: 'fa-magic',
            nav: true,
            hash: '#page/detail/CMAS_AI'
        },
        {
            route: 'Liquidleakdetection',
            title: getT("CMAS_LL").name,
            description: getT("CMAS_LL").description,
            icon: 'fa-fire',
            nav: true,
            hash: '#page/detail/CMAS_LL'
        },
        {
            route: 'explorer(/:sys)(/:id)(/:idc)',
            title: 'Explorer',
            description: 'Unit explorer',
            icon: 'fa-folder',
            moduleId: 'pages/unit-explorer',
            nav: false,
            hash: '#page/explorer/:sys/:id/:idc'
        },
        {
            route: 'trending',
            title: 'Trending',
            description: 'Trending',
            icon: 'fa-bar-chart',
            moduleId: 'pages/trending',
            nav: false
        },
        {
            route: 'alarm',
            title: 'Alarm',
            description: 'Alarm summary',
            icon: 'fa-bullhorn',
            moduleId: 'pages/alarm-summary',
            nav: false
        },
        {
            route: 'report',
            title: 'Report',
            description: ' REPORT',
            icon: 'fa-clipboard',
            moduleId: 'pages/report',
            nav: false
        },
        {
            route: 'config',
            title: 'Config',
            description: 'Config',
            icon: 'fa-cog',
            moduleId: 'pages/config',
            nav: false
        },
        {
            route: 'detail(/:sys)(/:id)(/:idc)',
            title: 'System',
            description: 'System Detail',
            icon: 'fa-cog',
            moduleId: 'pages/system-detail-notsub',
            nav: false,
            hash: '#page/detail/:sys/:id/:idc'
        }
    ]).buildNavigationModel();

    return {
        router: childRouter,
        childRouterModel: ko.computed(function () {
            return childRouter.navigationModel();
        })
    };
});