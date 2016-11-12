/**
 * Created by Dominika on 2016-11-07.
 */
angular.module('myApp')
    .controller('PhotoCtrl', ['$scope', '$rootScope', '$routeParams', 'AlbumService', 'DetailsResource', function ($scope, $rootScope, $routeParams, AlbumService, DetailsResource) {
        $scope.id = $routeParams.id;
        $scope.planet = {};
        DetailsResource.getPicturesById({planetId : $routeParams.id}, function (detailsOfPlanet) {
            $scope.details = detailsOfPlanet;
            console.log("Tmp" + JSON.stringify($scope.details) + " Dane: " + JSON.stringify(detailsOfPlanet));
        });
        AlbumService.getDataById($scope.id, function (planet) {
            $scope.planet = planet;
            $scope.mainPic = planet.resource;
        });

        $scope.changeMainPic = function (newMainPic) {
            $scope.mainPic = newMainPic;
        };
    }]);
