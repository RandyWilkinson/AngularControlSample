// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var customer = (function () {
        function customer($location) {
            this.$location = $location;
            this.title = "customer";
            this.activate();
        }
        customer.prototype.activate = function () {
        };
        customer.$inject = ["$location"];
        return customer;
    })();
    angular.module("app").controller("customer", customer);
})(App || (App = {}));
//# sourceMappingURL=customer.controller.js.map