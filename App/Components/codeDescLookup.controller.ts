// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";

    //interface IcodeDescLookupScope extends ng.IScope {
    //    code: string;
    //    desc: string;
    //    label: string;

    //}

    interface IcodeDescLookupController {
        code: string;
        desc: string;
        label: string;
        activate: () => void;
    }

    export class codeDescLookupController implements IcodeDescLookupController {
        //#region Properties
        code: string;
        desc: string;
        label: string;
        //#endregion

        static $inject: string[] = ["app.services.lookup"];
        constructor(private lookupSvc: Services.Ilookup) {
            this.activate();
        }

        activate() {
            this.code = "test";
        }

        searchClick(vm: codeDescLookupController) {
            alert("criteria:" + vm.code + " -- " + vm.desc);
        }
    }

    angular.module("app").controller("codeDescLookup", codeDescLookupController);
}