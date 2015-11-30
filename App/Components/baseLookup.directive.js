// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
var App;
(function (App) {
    "use strict";
    baseLookup.$inject = ["$window"];
    function baseLookup($window) {
        return {
            restrict: "EA",
            link: link
        };
        function link(scope, element, attrs) {
        }
    }
    var BaseLookup = (function () {
        function BaseLookup($location) {
            this.$location = $location;
            this.restrict = 'EA';
            this.scope = { highlightClassName: '@' };
            this.element = null;
            this.link = this._link.bind(this);
        }
        BaseLookup.instance = function ($location) {
            return new BaseLookup($location);
        };
        BaseLookup.prototype._link = function (scope, element) {
            var _this = this;
            //function setActive() {
            //    var path = _this.$location.path();
            //    var className = scope.highlightClassName || 'active';
            //    if (path) {
            //        angular.forEach(element.find('li'), (li) => {
            //            var anchor = li.querySelector('a');
            //            //Get href from href attribute or data-href in cases where href isn't used (such as login)
            //            var href = (anchor && anchor.href) ? anchor.href :
            //                anchor.getAttribute('data-href').replace('#', '');
            //            //Get value after hash
            //            var trimmedHref = href.substr(href.indexOf('#/') + 1, href.length);
            //            //Convert path to same length as trimmedHref
            //            var basePath = path.substr(0, trimmedHref.length);
            //            //See if trimmedHref and basePath match. If so, then highlight that item
            //            if (trimmedHref === basePath) {
            //                angular.element(li).addClass(className);
            //            } else {
            //                angular.element(li).removeClass(className);
            //            }
            //        });
            //    }
            //}
            //setActive();
            ////Monitor location changes
            //scope.$on('$locationChangeSuccess', setActive);
        };
        //Factory responsible for creating the directive instance
        BaseLookup.$inject = ['$location'];
        return BaseLookup;
    })();
    angular.module("app").directive("baseLookup", baseLookup);
})(App || (App = {}));
