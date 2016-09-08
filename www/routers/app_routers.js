/* global angular */
(function(){
    "use strict";
    angular.module("myApp").config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("menu/home");
        $stateProvider
        .state("menu", {
            url: "/menu",
            templateUrl: "views/menu.html",
            abstract: true,
            controller: "initCtrl"
        })
        
        .state("menu.home",{
            url: "/home",
            views:{
                'menuContent':{
                    templateUrl:"views/home.html"    
                }
            }
            
        })
        
        .state("menu.perfil",{
            url: "/perfil",
            views:{
                'menuContent':{
                    templateUrl:"views/perfil.html"    
                }
            }
            
        })

        .state("menu.activities",{
            url: "/activities",
            templateUrl:"scripts/activities/activities.html" 
            
        });
        
    });
})();