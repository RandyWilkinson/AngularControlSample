var App;
(function (App) {
    "use strict";
    // Create the module and define its dependencies.
    angular.module("app", [
        // Angular modules 
        "ngAnimate",
        "ngRoute" // routing
    ])
        .controller("CustomersController", function ($scope) {
        $scope.searchText = 'o';
        $scope.people = [{ name: 'shirlty', location: 'Stockton' }, { name: 'Bob', location: 'Chico' }, { name: 'Shiva', location: 'Texas' }];
    });
})(App || (App = {}));
//# sourceMappingURL=app.js.map