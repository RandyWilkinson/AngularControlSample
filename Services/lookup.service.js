// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    var Services;
    (function (Services) {
        "use strict";
        var lookup = (function () {
            function lookup($http) {
                this.$http = $http;
            }
            lookup.prototype.lookupCode = function (criteria) {
                var result;
                if (criteria.desc.indexOf("test") > 0) {
                    result = "testCode";
                }
                return result;
            };
            lookup.$inject = ["$http"];
            return lookup;
        })();
        angular.module("app").service("app.services.lookup", lookup);
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
//# sourceMappingURL=lookup.service.js.map