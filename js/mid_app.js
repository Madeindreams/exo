var mid = angular.module('mid', [
  'ngRoute'
]).
////////////////////////////////////////////////////////// ROUTE
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/index", {templateUrl: "test.html", 
                  controller: "pageCtrl",
                  css: "CSS/article.css"}).

	when("/pages/:id", {templateUrl: "test2.html", controller: "pageCtrl"}).
    when("/moment", {templateUrl: "moment-lone.html", controller: "momentCtrl"}).
    when("/vis", {templateUrl: "vis-lone.html", controller: "visCtrl"}).
    when("/thermo", {templateUrl: "thermo-lone.html", controller: "visCtrl"}).
    when("/three", {templateUrl: "three.html", controller: "pageCtrl"}).
	otherwise({redirectTo: 'index'});
}]);
//////////////////////////////////////////////// CSS BINDING
mid.directive('head', ['$rootScope','$compile',
    function($rootScope, $compile){
        return {
            restrict: 'E',
            link: function(scope, elem){
                var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                elem.append($compile(html)(scope));
                scope.routeStyles = {};
                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                    if(current && current.$$route && current.$$route.css){
                        if(!angular.isArray(current.$$route.css)){
                            current.$$route.css = [current.$$route.css];
                        }
                        angular.forEach(current.$$route.css, function(sheet){
                            delete scope.routeStyles[sheet];
                        });
                    }
                    if(next && next.$$route && next.$$route.css){
                        if(!angular.isArray(next.$$route.css)){
                            next.$$route.css = [next.$$route.css];
                        }
                        angular.forEach(next.$$route.css, function(sheet){
                            scope.routeStyles[sheet] = sheet;
                        });
                    }
                });
            }
        };
    }
]);
////////////////////////////////////////////////////////////PAGE CONTROLLER
 mid.controller('pageCtrl', function($scope, $routeParams) {
    $scope.pages =  [

{id: 0, 
 name: "Index",
 file: "mid-index.html", 
 titre: "MadeInDreams",
 author: "Ian Dorion",
 h1: "Headline",
 prev: "A few lines about my document."

},

{
	id: 1, 
 name: "Sample",
 file: "mid-sample.html", 
 titre: "MadeInDreams",
 author: "Ian Dorion",
 h1: "Headline",
 prev: "A few lines about this document."
}

];

});

/////////////////////////////////////////////FOOT CTRL
 mid.controller('footCtrl', function($scope){
$scope.icons = [

{id: 1, name: "Nodejs", file: "node_ico.png", titre: "Nodejs"},
{id: 2, name: "AngularJS", file: "angular_ico.png", titre: "Angular Javascript"},
{id: 0, name: "PHP", file: "php.jpg", titre: "PHP"},
{id: 3, name: "HTML5", file: "html5_ico.png", titre: "HTML5"},
{id: 4, name: "JavaScript", file: "js_ico.png", titre: "JavaScript"},
{id: 5, name: "CSS3", file: "css3_ico.png", titre: "css3"},
{id: 6, name: "MongoDB", file: "mongo_ico.png", titre: "Mongo Database"},
{id: 10, name: "MySQL", file: "mysql.png", titre: "MySQL"},
{id: 7, name: "Bootstrap", file: "bootstrap_ico.png", titre: "Bootstrap"},
{id: 8, name: "JQuery", file: "jquery_ico.png", titre: "JQuery"},
{id: 9, name: "Arduino", file: "arduino_ico.png", titre: "Arduino"},
{id: 10, name: "RaspberryPi", file: "pi_ico.png", titre: "Raspberry Pi"}
];
});//Ctrl

 mid.controller('articleCtrl', function($scope){
$scope.articles = [
{id: 1, title: "Bienvenue sur mon île virtuelle", content: "Ce site web et son contenu sont la propriété intellectuelle de M. Ian Dorion, alias MadeInDreams"},
{id: 2, title: "Un site Angulaire", content: "La nouvelle version du site tourne avec AngularJS."},
];
});//Ctrl