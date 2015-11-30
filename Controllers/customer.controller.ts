// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    interface Icustomer {
        title: string;
        activate: () => void;
    }

    class customer implements Icustomer {
        title: string = "customer";

        static $inject: string[] = ["$location"];

        constructor(private $location: ng.ILocationService) {
            this.activate();
        }

        activate() {

        }
    }

    angular.module("app").controller("customer", customer);
}