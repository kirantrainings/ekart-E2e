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

