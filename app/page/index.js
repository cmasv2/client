define(['durandal/app', 'plugins/router', 'knockout'], function (app, router, ko) {
    if (!app.buff)
        window.location = 'http://' + window.location.host;
    function getT(c){
        var u = app.buff.find(app.buff.getByKey("LocationAll"), "code", c);
        return u?u[0]:{name:"NaN",description:"NaN"};
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
            title: getT("DAR_UP").name,
            description: getT("DAR_UP").description,
            icon: 'fa-power-off', 
            nav: true,
            hash: '#page/detail/DAR_UP'
        },
        {
            route: 'Precision', 
            title: getT("DAR_PI").name,
            description: getT("DAR_PI").description,
            icon: 'fa-asterisk',
            nav: true,
            hash: '#page/detail/DAR_PI'
        },
        {
            route: 'Generator', 
            title: getT("DAR_GS").name,
            description: getT("DAR_GS").description,
            icon: 'fa-plug', 
            nav: true,
            hash: '#page/detail/DAR_GS'
        },
        {
            route: 'power', 
            title: getT("DAR_PW").name,
            description: getT("DAR_PW").description,
            icon: 'fa-wrench',
            nav: true,
            hash: '#page/detail/DAR_PW'
        },
        {
            route: 'smoke(/:sys)', 
            title: "demo",
            description: "demo",
            icon: 'fa-fire', 
            moduleId: 'pages/system-detail-notsub',
            nav: true,
            hash: '#page/smoke/DAR_HS'
        },
        {
            route: 'rectifier', 
            title: getT("DAR_RE").name,
            description: getT("DAR_RE").description,
            icon: 'fa-plug',
            nav: true,
            hash: '#page/detail/DAR_RE'
        },
        {
            route: 'transformer', 
            title: getT("DAR_TF").name,
            description: getT("DAR_TF").description,
            icon: 'fa-magic', 
            nav: true,
            hash: '#page/detail/DAR_TF'
        },
        {
            route: 'explorer(/:sys)(/:id)',
            title: 'Explorer',
            description: 'Unit explorer',
            icon: 'fa-folder', 
            moduleId: 'pages/unit-explorer', 
            nav: false,
            hash: '#page/explorer'
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
            route: 'detail(/:sys)(/:id)',
            title: 'System',
            description: 'System Detail',
            icon: 'fa-cog', 
            moduleId: 'pages/system-detail',
            nav: false,
            hash: '#page/detail/:sys/:id'
        }    
    ]).buildNavigationModel();
    
    return {
        router: childRouter,
        childRouterModel: ko.computed(function () {
            return childRouter.navigationModel();
        })
    };
});