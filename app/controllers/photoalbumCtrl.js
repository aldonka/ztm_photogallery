angular.module('myApp')
    .controller('PhotoalbumCtrl', ['$scope', '$rootScope', 'AlbumService', function ($scope, $rootScope, AlbumService) {
        $scope.pics = [];
        AlbumService.getPictures(function (pics) {
            $scope.pics = pics;
        });

        $scope.title = "Galeria zdjeć";
        $scope.query = '';
        $scope.sortType = [
            {
                'label': 'Alfabetycznie',
                'value': 'title'
            }, {
                'label': 'Chronologicznie asc',
                'value': 'date'
            },{
                'label': 'Chronologicznie desc',
                'value': '-date'
            }
        ];
        $scope.order = $scope.sortType[1];
    }]);