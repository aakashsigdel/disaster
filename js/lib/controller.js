angular.module('AssessmentApp', [])
	.controller('assessmentListCtrl', ['$scope', 'AssessmentService', function($scope, AssessmentService) {
		$scope.list = AssessmentService.getAssessmentData();
		$scope.id = '';
		$scope.setId = function(id) {
			$scope.id = id;
		}
		//console.log(AssessmentService.getAssessmentData());
		
	}])
	/*.controller('modalCtrl', ['$scope', 'AssessmentService',, function($scope, AssessmentService) {
		//$scope.list = AssessmentService.getAssessmentDatum(assesmentId);
		
		AssessmentService.getAssessmentDatum(assesmentId).then(function(response) {
			console.log(response.data);
		});*/
	//}])