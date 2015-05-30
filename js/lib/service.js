angular.module('AssessmentApp')
	.factory('AssessmentService',['$http', function($http){
		return {
			getAssessmentData: function() {

				return {
					assessment: [{
						id: 101,
						district: 'Dolakha',
						vdc: 'Charimara',
						persons:[{name: 'Aakash Sigdel', sex: 'Male', age: 24, occupation: 'Farmer', caste: 'Sukla', risk: 'High'},
							{name: 'Bimal Gharti Magar', sex: 'Male', age: 22, occupation: 'Engineer', caste: 'Magar', risk: 'High'},
							{name: 'Suntali Ram Shah', sex: 'Female', age: 28, occupation: 'Doctor', caste: 'Sukla', risk: 'Medium'}
					]},
					{
						id: 102,
						district: 'Gorkha',
						vdc: 'RamDaiGaun',
						persons:[{name: 'Aakash Sigdel', sex: 'Male', age: 24, occupation: 'Farmer', caste: 'Sukla', risk: 'High'},
								{name: 'Bimal Gharti Magar', sex: 'Male', age: 22, occupation: 'Engineer', caste: 'Magar', risk: 'High'},
								{name: 'Suntali Ram Shah', sex: 'Female', age: 28, occupation: 'Doctor', caste: 'Sukla', risk: 'Medium'}
					]},
					{
						id: 103,
						district: 'Makwanpur',
						vdc: 'HilleChaurGaun',
						persons:[{name: 'Aakash Sigdel', sex: 'Male', age: 24, occupation: 'Farmer', caste: 'Sukla', risk: 'High'},
								{name: 'Bimal Gharti Magar', sex: 'Male', age: 22, occupation: 'Engineer', caste: 'Magar', risk: 'High'},
								{name: 'Suntali Ram Shah', sex: 'Female', age: 28, occupation: 'Doctor', caste: 'Sukla', risk: 'Medium'}
					]}]
				};
			}/*,
			getAssessmentDatum: function(assessmentId) {
				return $http.get('192.168.88.187:3000/api/assessment/' + id);
			}*/
		}		
			
	}]);