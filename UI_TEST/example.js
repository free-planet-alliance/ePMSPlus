angular.module('ui.bootstrap.demo', ['ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: '2015년 1월 7일(8h+1h)',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: '2015년 1월 6일(4h+1h)',
      content: 'Dynamic Group Body - 2'
    },
    {
      title: '2015년 1월 5일(7h+1h)',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
});