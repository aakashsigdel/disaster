angular.module('AssesmentApp')
	.controller('reportCtrl', ['$scope', 'Service', function($scope, Service) {
		$scope.getAssesmentDatum = function(assesmentId) {
			return Service.getAssesmentDatum(assesmentId);
		}

		$scope.getAssesmentData = function() {
			return Service.getAssesmentData();
		}
	}]),
	controller('assesmentListCtrl' ['$scope', 'Service', function($scope, Service) {
		$scope.getAssesmentData = function() {
			return Service.getAssesmentData();
		}
	}])