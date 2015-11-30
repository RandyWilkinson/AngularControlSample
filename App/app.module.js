var App;
(function (App) {
    "use strict";
    // Create the module and define its dependencies.
    angular.module("app", [
        // Angular modules 
        "ngAnimate",
        "ngRoute" // routing
    ])
        .controller("CustomersController", function () {
        var vm = this;
        vm.searchText = 'o';
        vm.addStuff = function () {
            vm.people.push({ id: 5, name: 'newPerson', location: 'Stockton' });
        };
        vm.people = [{ id: 1, name: 'shirlty', location: 'Stockton' }, { id: 2, name: 'Bob', location: 'Chico' }, { id: 3, name: 'Shiva', location: 'Texas' }];
    });
})(App || (App = {}));
//# sourceMappingURL=app.module.js.map