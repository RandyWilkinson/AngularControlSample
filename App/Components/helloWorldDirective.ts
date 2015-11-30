// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App.Component {
    "use strict";

    interface IhelloWorldDirective extends ng.IDirective {
    }

    interface IhelloWorldDirectiveScope extends ng.IScope {
        message: string;
        helloSize: string;
    }

    interface IhelloWorldDirectiveAttributes extends ng.IAttributes {
        text: string;
        helloSize: string;

    }

    helloWorldDirective.$inject = ["$window"];
    function helloWorldDirective($window: ng.IWindowService): IhelloWorldDirective {
        return {
            restrict: "E",
            templateUrl: "App/Components/helloWorldTemplate.html",
            link: link
        }

        function link(scope: IhelloWorldDirectiveScope, element: ng.IAugmentedJQuery, attrs: IhelloWorldDirectiveAttributes) {

            scope.message = "Hello Randy -" + attrs.text;
            scope.helloSize = "'font-size':'" + attrs.helloSize + "px'";
            var spanElement = element.find("span");
            var styleAttribute = "font-size:" + attrs.helloSize + "px";
            spanElement.attr("style", styleAttribute);

        }
    }

    angular.module("app").directive("helloWorld", helloWorldDirective);
}