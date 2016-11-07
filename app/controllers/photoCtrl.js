/**
 * Created by Dominika on 2016-11-07.
 */
angular.module('myApp')
    .controller('PhotoCtrl', ['$scope', '$rootScope', 'AlbumService', function ($scope, $rootScope, AlbumService) {
        $scope.id = 1;
        $scope.data = {};
        AlbumService.getPictureById($scope.id, function (data) {
            $scope.data = data;
        });
    }]);
