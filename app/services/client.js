define(["../data/client"], function(client) {

    return function() {
        var me = this;

        me.getPages = function() {
            return client.pages;
        }

        me.getPageDefinitions = function(page) {
            return client.pageDefinitions[page];
        }
    }
});