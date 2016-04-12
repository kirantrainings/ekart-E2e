(
 function(){
     angular.module("eKart.common")
            .factory('countriesFact',['$http',function($http){
                return{
                    getCountries : function(){
                        return $http.get('AngularApp/app/data/countries.json');
                    }    
                };
            }]);
 }
)();