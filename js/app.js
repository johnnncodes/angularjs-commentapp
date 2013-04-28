'use strict';

/* Components */
angular.module('components', [])
  .directive('todoBlur', function () {
      return function (scope, elem, attrs) {
          elem.bind('blur', function () {
              scope.$apply(attrs.todoBlur);
          });
      };
  });

/* App Module */
angular.module('comments', ['LocalStorageModule', 'components']).
    config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/comments', { templateUrl: 'partials/comments-partial.html', controller: CommentsCtrl }).
        otherwise({redirectTo: '/comments'});
}]);

/* Controller */
function CommentsCtrl($scope, localStorageService) {

    var comments = $scope.comments = JSON.parse(localStorageService.get('comments'));

    $scope.$watch('comments', function () {
         localStorageService.add('comments', JSON.stringify($scope.comments));
    }, true);

    $scope.addComment = function () {
        var newComment = {
            "name": $scope.name,
            "comment": $scope.comment,
            "email": $.md5($scope.email)
        };

        if ( ! $scope.comments) {
           $scope.comments = [];
        }

        $scope.comments.push(newComment);
    };

    $scope.deleteComment = function (comment) {
        $scope.comments.splice($scope.comments.indexOf(comment), 1);
    };

    $scope.deleteAllComments = function () {
        $scope.comments = '';
    };

    $scope.editComment = function (index, comment) {
        var $comment = $('#comment-' + index);
        $comment.addClass("edit");
        $comment.find('input').focus();

        $(document).on('keypress', function(e){
            if (e.which === 13) {
                $comment.find('input').blur();
                $comment.removeClass("edit");
            }
       });

    };

    $scope.storageType = 'Local storage';
    if (!localStorageService.isSupported()) {
        $scope.storageType = 'Cookie';
    }

}


