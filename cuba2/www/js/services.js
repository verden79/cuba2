angular.module('starter.services', [])
.factory('User', function () {
    var us = [
       {
             id: 0,
             login: 'guest',
             passw: 'guest',
             name: '',

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
})
.factory('Language', function () {     // ������ ��� ����������� ����������
    
    var engLang = [{
        // �������� ���� english
        login: "login",
        passw: "password",
        button: "Enter",
        reg: "Registration",
        fg: "Forgot"
    }];
    var ruLang = [{
        // �������� ���� ������� ����
        login: "���",
        passw: "������",
        button: "�����",
        reg: "�����������",
        fg: "������"
    }];

   
});