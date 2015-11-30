// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    var Component;
    (function (Component) {
        "use strict";
        helloWorldDirective.$inject = ["$window"];
        function helloWorldDirective($window) {
            return {
                restrict: "E",
                templateUrl: "App/Components/helloWorldTemplate.html",
                link: link
            };
            function link(scope, element, attrs) {
                scope.message = "Hello Randy -" + attrs.text;
                scope.helloSize = "'font-size':'" + attrs.helloSize + "px'";
                var spanElement = element.find("span");
                var styleAttribute = "font-size:" + attrs.helloSize + "px";
                spanElement.attr("style", styleAttribute);
            }
        }
        angular.module("app").directive("helloWorld", helloWorldDirective);
    })(Component = App.Component || (App.Component = {}));
})(App || (App = {}));
//# sourceMappingURL=helloWorldDirective.js.map