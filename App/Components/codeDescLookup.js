// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    //var codeDescControllerInjector = ['$scope', codeDescLookupController];         
    var codeDescLookup = (function () {
        function codeDescLookup() {
            this._lookup = null;
            this.restrict = "E";
            this.templateUrl = "App/Components/codeDescLookupTemplate.html";
            //link: (vm: codeDescLookupController, element: ng.IAugmentedJQuery, attrs: IcodeDescLookupAttributes) => void;
            //scope = {
            //    code: "=",
            //    desc: "=",
            //    label: "="
            //};
            this.controller = App.codeDescLookupController;
            this.controlerAs = "vm";
            this.bindToController = true;
            //lookup: App.Services.Ilookup) {
            //this._lookup = lookup;
            //this.link = this._link.bind(this);
        }
        //Factory responsible for creating the directive instance
        //static $inject = ['lookup'];
        codeDescLookup.instance = function () {
            return new codeDescLookup();
        };
        ;
        ;
        codeDescLookup.prototype._link = function (vm, element, attrs) {
            vm.code = attrs.code;
        };
        ;
        return codeDescLookup;
    })();
    angular.module("app").directive("codeDescLookup", codeDescLookup.instance);
})(App || (App = {}));
//# sourceMappingURL=codeDescLookup.js.map