/**
 * Created by Dominika on 2016-11-07.
 */
angular.module('myApp')
    .service('AlbumService', ['$http', function ($http) {
        function getAll(callback) {
            return $http.get('resources/json/photos.json').then(function (response) {
                callback(response.data);

            }, function (errResponse) {
                console.log("Sth went wrong, photos 0 size : ", errResponse);
                callback([]);
            });
        }

        return {
            getPictures: function (callback) {
                getAll(callback);
            },
            getPicturesById: function (id, callback) {
                return $http.get('resources/json/photos/p' + id + '.json').then(function (response) {
                    callback(response.data);

                }, function (errResponse) {
                    console.log("Sth went wrong, photos 0 size : ", errResponse);
                    callback([]);
                });
            },
            getDataById: function (id, callback) {
                var picArr = [];
                getAll(function (data) {
                    picArr = data;
                    var i;
                    for (i = 0; i < picArr.length; i++) {
                        if (picArr[i].id == id)
                            callback(picArr[i]);
                    }
                });
            }
        }
    }]);