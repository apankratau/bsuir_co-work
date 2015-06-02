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

var module = angular.module('userApp',['restangular','ui.router'])
	

var guestCtrl = module.
	controller('mailFullCtrl', function($scope, $log, Restangular) {	 
	});

	module.config(function($stateProvider, $urlRouterProvider) {
		  
		  // For any unmatched url, redirect to /state1
		  $urlRouterProvider.otherwise("/mail");
		   
		  //Set up the states
		  var mailFull = {
		      name: 'mailFull',
		      url: '/#/mailfull',
		      templateUrl: 'views/mailFull.html',
		      data: {}
		  }
		  $stateProvider
		    .state(mailFull)
	});

	var module = angular.module('userApp',['restangular','ui.router'])
	

var guestCtrl = module.
	controller('mailListCtrl', function($scope, $log, Restangular) {	 
	});

	module.config(function($stateProvider, $urlRouterProvider) {
		  
		  // For any unmatched url, redirect to /state1
		  $urlRouterProvider.otherwise("/mail");
		   
		  //Set up the states
		  var mailList = {
		      name: 'mailList',
		      url: '/#/maillist',
		      templateUrl: 'views/mailList.html',
		      data: {}
		  }
		  $stateProvider
		    .state(mailList)
	});