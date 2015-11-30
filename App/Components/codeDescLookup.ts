// Install the angularjs.TypeScript.DefinitelyTyped NuGet package
module App {
    "use strict";
    
    
    //interface IcodeDescLookup extends ng.IDirective {
    //    lookupService: App.Services.Ilookup;
    //    searchClick: any;
    //}


    interface IcodeDescLookupAttributes extends ng.IAttributes {
        code: string;
        desc: string;
        label: string;
    }

    //var codeDescControllerInjector = ['$scope', codeDescLookupController];         

    
    class codeDescLookup implements ng.IDirective {
        
        //Factory responsible for creating the directive instance
        //static $inject = ['lookup'];
        static instance(): ng.IDirective {
            return new codeDescLookup();
        };

        _lookup: App.Services.Ilookup = null;

        constructor(){
            //lookup: App.Services.Ilookup) {
            //this._lookup = lookup;
            //this.link = this._link.bind(this);
        };

        
        restrict= "E";

        templateUrl = "App/Components/codeDescLookupTemplate.html";
        //link: (vm: codeDescLookupController, element: ng.IAugmentedJQuery, attrs: IcodeDescLookupAttributes) => void;
        //scope = {
        //    code: "=",
        //    desc: "=",
        //    label: "="
        //};

        controller = codeDescLookupController;

        controlerAs = "vm";
        bindToController = true;
        
        

        _link(vm: codeDescLookupController, element: ng.IAugmentedJQuery, attrs: IcodeDescLookupAttributes) {
            vm.code = attrs.code;

        };

        
    }

    angular.module("app").directive("codeDescLookup", codeDescLookup.instance);
}