// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    var codeDescLookupController = (function () {
        function codeDescLookupController(lookupSvc) {
            this.lookupSvc = lookupSvc;
            this.activate();
        }
        codeDescLookupController.prototype.activate = function () {
            this.code = "test";
        };
        codeDescLookupController.prototype.searchClick = function (vm) {
            alert("criteria:" + vm.code + " -- " + vm.desc);
        };
        //#endregion
        codeDescLookupController.$inject = ["app.services.lookup"];
        return codeDescLookupController;
    })();
    App.codeDescLookupController = codeDescLookupController;
    angular.module("app").controller("codeDescLookup", codeDescLookupController);
})(App || (App = {}));
//# sourceMappingURL=codeDescLookup.controller.js.map