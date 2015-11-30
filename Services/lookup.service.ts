// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App.Services {
    "use strict";

    export interface ICriteria {
        desc: string;
    }

    export interface Ilookup {
        lookupCode: (ICriteria) => string;
    }
    
    class lookup implements Ilookup {
        static $inject: string[] = ["$http"];

        constructor(private $http: ng.IHttpService) {
        }

        lookupCode(criteria: ICriteria) {
            var result;
            if (criteria.desc.indexOf("test") > 0) {
                result = "testCode";
            }
            return result;
        }
    }

    angular.module("app").service("app.services.lookup", lookup);
}