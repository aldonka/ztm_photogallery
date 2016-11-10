/**
 * Created by Dominika on 2016-11-07.
 */
angular.module('myApp')
    .controller('PhotoCtrl', ['$scope', '$rootScope', '$routeParams', 'AlbumService', function ($scope, $rootScope, $routeParams, AlbumService) {
        $scope.id = $routeParams.id;
        $scope.planet = {};
        AlbumService.getDataById($scope.id, function (planet) {
            $scope.planet = planet;
            $scope.mainPic = planet.resource;
        });
AlbumService.getPicturesById($scope.id, function(photosOfPlanet){
    $scope.photos = photosOfPlanet;
    console.log($scope.photos.tags);
});
        $scope.changeMainPic = function (newMainPic) {
            $scope.mainPic = newMainPic;
        }
    }]);
