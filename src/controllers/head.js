import angular from 'angular';

class HeadCtrl {
        constructor($anchorScroll, $location, $scope) {
            $scope.gotoAnchor = function(x) {
                var newHash = 'anchor' + x;
                if ($location.hash() !== newHash) {
                    // set the $location.hash to `newHash` and
                    // $anchorScroll will automatically scroll to it
                    $location.hash(x);
                } else {
                    // call $anchorScroll() explicitly,
                    // since $location.hash hasn't changed
                    $anchorScroll();
                }
            }
          }
}

HeadCtrl.$inject = ['$anchorScroll','$location','$scope'];
export default HeadCtrl;