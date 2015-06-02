var module = angular.module('userApp',['restangular','ui.router'])
	

var guestCtrl = module.
	controller('composeCtrl', function($scope, $log, Restangular) {	 
	});

module.config(function($stateProvider, $urlRouterProvider) {
		  
		  // For any unmatched url, redirect to /state1
		  $urlRouterProvider.otherwise("/mail");
		   
		  //Set up the states
		  var compose = {
		      name: 'compose',
		      url: '/#/newletter',
		      templateUrl: 'views/compose.html',
		      data: {}
		  }
		  $stateProvider
		    .state(compose)
});