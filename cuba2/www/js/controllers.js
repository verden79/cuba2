angular.module('starter.controllers', [])


.controller("EnterController", function ($scope, $ionicModal,User) {
    //$ionicModal.fromTemplateUrl('views/recipes.html', { scope: $scope })
    //.then(function (modal) {
    //    $scope.modal = modal;
    //});
    
    $scope.message = User.all[0].txt;
    $scope.user = User.all[0];


    $scope.checkuser = function (log,pas) {
        // User.check
       // if (log == 'test' && pas == 'test') $scope.message = "Hello user!";
       // else $scope.message = "Wrong user!";
        // var name = $scope.user.login;
        $scope.message = User.check(log,pas);
        
        console.log($scope.message);
    }
    

    //$scope.inmenu = function () {
    //    $scope.modal.show();
    //};

})

.controller("MenuController" ,function($scope){
  $scope.menus = [
   ];
  $scope.pers = { name: "Aleksey Pirogov" , balls : 0};
    
})

.controller("ProfileController", function ($scope) {
    $scope.user = { name: "Irina" };
    $scope.imgs = [
        "images/profile/fotoprofile.png",
        "images/profile/fotoprofile1.png",
        "images/profile/fotoprofile2.png",
        "images/profile/fotoprofile3.png",
        "images/profile/fotoprofile4.png"
    ];
    $scope.options = {
        loop: false,
        effect: 'scroll',
        speed: 500,
    };

    $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    $scope.$on("$ionicSlides.slideChangeStart", function (event, data) {
        console.log('Slide change is beginning');
    });

    $scope.$on("$ionicSlides.slideChangeEnd", function (event, data) {
        // note: the indexes are 0-based
        $scope.activeIndex = data.activeIndex;
        $scope.previousIndex = data.previousIndex;
    });



})

.controller("PageController", function ($scope) {

})


.controller("HeadController", function ($scope) {
})
