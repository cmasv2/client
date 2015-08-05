define(["durandal/app", "durandal/viewlocator", "knockout", "viewmodels/header", "q"],
    function (app, viewLocator, ko, Header, Q) {
        return function () {

            var me = this;
            var baseViewModel = this;

            baseViewModel.content = ko.observable();

            var createView = function (def) {
                var defer = Q.defer();
                //viewLocator.useConvention("viewmodels", "viewmodels");
                require(["viewmodels/" + def.viewName], function (cls) {
                    defer.resolve(new cls(def.config));
                });
                return defer.promise;
            };

            var buildingViewTreeForNode = function (nodeConfig) {
                var defer = Q.defer();
                var viewsetName = nodeConfig.viewsetName;
                var viewName = nodeConfig.viewName;
                if (viewsetName) {
                    var items = nodeConfig.items;
                    var queue = [];
                    require(["viewmodels/" + viewsetName], function (cls) {
                        var viewset = new cls();
                        for (var i = 0; i < items.length; i++) {
                            if (items[i].type === "view") {
                                queue.push(createView(items[i]));
                            } else if (items[i].type === "viewset") {
                                queue.push(buildingViewTreeForNode(items[i]));
                            }
                        }
                        ;

                        Q.all(queue).then(function (views) {
                            for (var index in views) {
                                viewset[items[index].location](views[index]);
                            }
                            defer.resolve(viewset);
                        });

                    });
                }
                else if (viewName) {
                    createView(nodeConfig).done(function(cls){
                        defer.resolve(cls);
                    })
                }

                return defer.promise;
            };
            baseViewModel.loadContent = function (pageConfig) {
                buildingViewTreeForNode(pageConfig.content).then(function (content) {
                    me.content(content);
                });
            };
        }
    }
);