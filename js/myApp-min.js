var app=angular.module("myApp",["ngRoute"]);app.config(function(t,e){t.when("/",{templateUrl:"app/components/dashboard/dashboard.html",controller:"DashboardCtrl"}).when("/improjects",{templateUrl:"app/components/impprojects/improjects.html",controller:"IMProjectsCtrl"}).when("/myprojects",{templateUrl:"app/components/myprojects/myprojects.html",controller:"MyProjectsCtrl"}).when("/cwflibrary",{templateUrl:"app/components/cwflibrary/cwflibrary.html",controller:"CWFLibraryCtrl"}).when("/moilibrary",{templateUrl:"app/components/moilibrary/moilibrary.html",controller:"MOILibraryCtrl"}).when("/cwpaprojects",{templateUrl:"app/components/cwpaprojects/cwpaprojects.html",controller:"CWPAProjectsCtrl"}).when("/changelogs",{templateUrl:"app/components/changelogs/changelogs.html"}).when("/notifications",{templateUrl:"app/components/notifications/notifications.html"}).when("/cwpatestcases",{templateUrl:"app/components/cwpatestcases/cwpatestcases.html",controller:"CWPATestCasesCtrl"}).when("/productbp",{templateUrl:"app/components/productbp/productbp.html",controller:"ProductBPCtrl"}).when("/blue",{templateUrl:"blue.htm"})}),app.controller("MenuController",function(t,e){t.$on("$routeChangeSuccess",function(){$.each($(".menu .list li.active"),function(t,e){var o=$(e).find("a:eq(0)");o.addClass("toggled"),o.next().show()}),t.isActive=function(t){return t===e.path()}})});