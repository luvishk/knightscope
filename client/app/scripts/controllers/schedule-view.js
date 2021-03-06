/*

Edit controller gets the data for selected machine from the backend

*/

'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ScheduleViewCtrl
 * @description
 * # ScheduleViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
.controller('ScheduleViewCtrl', function (
    $scope,
    $routeParams,
    Schedule
    ) {
    $scope.viewSchedule = true;
    $scope.schedule = Schedule.one($routeParams.id).get().$object;
    console.log($scope.schedule);
});
