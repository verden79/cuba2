angular.module('starter.controllers', [])


.controller("EnterController", function ($scope, $ionicModal,User) {
    //$ionicModal.fromTemplateUrl('#/menus/event.html', { scope: $scope })
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

.controller("EventController", function ($scope) {
    
    $scope.sh = {text:"ул. Крымский Вал, 9,1190049"};

    // относительно работы с картами
    //var _map;
    //$scope.afterMapInit = function (map) {
    //    _map = map;
    //};
    //$scope.del = function () {
    //    _map.destroy();
    //};
    $scope.geoObjects =
    {
        geometry: {
            type: 'Circle',
            coordinates: [37.60, 55.76],
            radius: 10000
        },
        properties: {
            balloonContent: "Радиус круга - 10 км",
            hintContent: "Подвинь меня"
        }
    };
    $scope.geoObjects = [
    {
        geometry: {
            type: 'LineString',
            coordinates: [
                [37.50, 55.80],
                [37.40, 55.70]
            ]
        },
        properties: {
            hintContent: "",
            balloonContent: ""
        }
    },
    {
        geometry: {
            type: 'LineString',
            coordinates: [
                [37.50, 55.80],
                [37.40, 55.80],
                [37.50, 55.70],
                [37.40, 55.70]
            ]
        },
        properties: {
            balloonContent: ""
        }
    }
    ];
})
