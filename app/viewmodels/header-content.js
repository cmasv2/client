define(["durandal/app", "durandal/viewlocator", "knockout", "views/header", "q", "helper/loading"],
    function (app, viewLocator, ko, Header, Q, loading) {
        return function () {
            var me = this;
            var pageViewModel = this;

            pageViewModel.header = ko.observable();
            pageViewModel.content = ko.observable();
        }
    }
);