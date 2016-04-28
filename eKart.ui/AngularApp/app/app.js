//this is first line of code.
angular.module('eKart', [
                        "eKart.sales",
                        "eKart.login",
                        "eKart.register",
                        "eKart.navigation",
                        "eKart.cart",
                        "eKart.common",
                        "ui.router"
]);


angular.module('eKart').config(["$urlRouterProvider", "$stateProvider",
function ($urlRouterProvider, $stateProvider) {

    //define the routes
    var login = {
        name: "login",
        url: "/",
        controller:"loginCtrl",
        templateUrl: "AngularApp/app/login/login.tpl.html"
    };
    var register = {
        name: "register",
        url: "/register",
        templateUrl: "AngularApp/app/register/register.tpl.html"
    };
    var sales = {
        name: "sales",
        url: "/sales",
        controller:"salesCtrl",
        templateUrl: "AngularApp/app/sales/sales.tpl.html"
    };
    var cart = {
        name: "cart",
        url: "/cart",
        controller: "cartCtrl",
        templateUrl: "AngularApp/app/cart/cart.tpl.html"
    };

    //register the routes
    $stateProvider.state('login', login);
    $stateProvider.state('register', register);
    $stateProvider.state('sales', sales);
    $stateProvider.state('cart', cart);

    $urlRouterProvider.otherwise("/")
    
}]);


angular.module('eKart')
.run(['authenticateSvc', '$rootScope', '$state',
    function (authenticateSvc, $rootScope,$state) {
    
        $rootScope.$on('$stateChangeSuccess',
            function (event, toState, toParams, fromState, fromParams, options) {
              //  console.log(authenticateSvc.getUserDetails().isAuthenticated);
                console.log("route changed from");
                console.log(fromState);

                console.log("route Changed To");
                console.log(toState);
                var isAuthenticated=authenticateSvc.getUserDetails().isAuthenticated;
                if (toState.name != 'login' && isAuthenticated) {

                }
                else {
                    $state.go('login');
                }
            })

    }]);



