angular.module('starter.services', [])
.factory('User', function () {
    var us = [
       {
             id: 0,
             login: 'guest',
             passw: 'guest',
             txt: 'Hello Guest'
       },

       {
            id: 1,
            login: 'igor',
            passw: 'igor',
            txt: 'Hello Igor'
        },
        {
            id: 2,
            login: 'serg',
            passw: 'serg',
            txt: 'Hello Serg'
        },
         {
            id: 2,
            login: 'Irina',
            passw: 'ira',
            txt: ''
        }
   
    ]
    return {
        all: us,
        check: function (log,pas) {
            for (i = 0; i < us.length; i++) {
                if (log == us[i].login && pas == us[i].passw ) return us[i].txt;
            }
           
            return "No users";
        }
    };
});