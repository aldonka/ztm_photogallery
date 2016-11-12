angular.module('myApp')
    .controller('PhotoalbumCtrl', ['$scope', '$rootScope', 'AlbumService', 'DetailsResource', function ($scope, $rootScope, AlbumService, DetailsResource) {
        $scope.pics = [];

        DetailsResource.getAll(function (response) {
            $scope.pics = response;
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