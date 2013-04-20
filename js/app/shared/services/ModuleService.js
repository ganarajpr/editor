(function () {
    "use strict";

    var services = angular.module('shared.services');

    services.factory("shared.services.ModuleService", [
        function () {
            var modules = [];
            return {
                getAllModules : function(){
                    return modules;
                },
                addModule : function(moduleName){
                    var alreadyExists = false;
                    for (var i = 0; i < modules.length;i++) {
                         if(modules[i] === moduleName){
                             alreadyExists = true;
                             break;
                         }
                    }
                    if(!alreadyExists){
                        modules.push(moduleName);
                    }
                },
                removeModule : function(moduleName){
                    for (var i = 0; i < modules.length;i++) {
                        if(modules[i] === moduleName){
                            modules.splice(i,1);
                            break;
                        }
                    }
                }
            };
        }
    ]);
}());
