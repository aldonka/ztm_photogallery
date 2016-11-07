/**
 * Created by Dominika on 2016-11-07.
 */
angular.module('myApp')
    .service('AlbumService', ['$http', function ($http) {
        function getAll(callback) {
            return $http.get('resources/json/photos.json').then(function (response) {
                console.log(" size : ", response.data.length);
                callback(response.data);

            }, function (errResponse) {
                console.log("Sth went wrong, photos 0 size : ", errResponse);
                callback([]);
            });
        }

        return {
            getPictures: function (callback) {
                getAll(callback)
                // $http.get('resources/json/photos.json').then(function(response){
                //     console.log(" size : ", response.data.length);
                //     callback(response.data);
                //
                // }, function (errResponse) {
                //     console.log("Sth went wrong, photos 0 size : ", errResponse);
                //     callback([]);
                // });
            },
            getPictureById: function (id, callback) {
                var picArr = [];
                getAll(function (data) {
                    picArr = data;
                    callback(picArr[id]);
                });
            }
        }
    }]);