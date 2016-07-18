'used strict';

var app = angular.module('appTest', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('Clase1', {
            templateUrl: 'App/views/Clase1.html',
            controller: 'myctrl',
            url: '/Clase1'
            })

        .state('PacienteView', {
            templateUrl: 'App/views/Paciente.html',
            controller: 'PacienteController',
            url: '/PacienteView'
        })

        .state('PacientesNew', {
            templateUrl: 'App/views/PacientesNew.html',
            controller: 'PacienteController',
            url: '/PacientesNew'
        });

        $urlRouterProvider.otherwise('/PacienteView');
    });
