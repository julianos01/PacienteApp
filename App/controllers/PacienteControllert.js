angular.module('appTest')
.controller('PacienteController', function ($scope, PacienteService,$state) {
    var init = function () {
        PacienteService.getAllPacientes().then(function (result) {
            $scope.listPacientes = result.data;
            console.log(result);
        }).catch(function (error) {
            console.log(error);
        });
    };
    init();
    $scope.listPacientes = [];
    $scope.Mensajes = "";
    $scope.objPaciente = {
        
 
            "ListaId_TipoIdentificacion": 1,
            "Identificacion": "",
            "Nombres": "",
            "Apellidos": "",
            "Direccion": "Calle 24 # 30A-42",
            "Telefono": "2420049",
            "Email": "Leon@correo.com",
            "Edad": 35,
            "ListaId_Genero": 7,
            "ListaId_CiudadResidencia": 11,
            "FechaNacimiento": "1981-05-02T00:00:00",
            "ListaId_EPS": 13,
            "ListaId_TipoAfiliacion": 15
            
        

    };

    

    $scope.Eliminar = function (Identificacion) {
        PacienteService.eliminarPaciente(Identificacion).then(function (result) {
            $scope.Mensajes = result.data;
            init();
        }).catch(function (error) {
            console.log(error);
        });

    };

    $scope.guardarpaciente=function (){
         PacienteService.guardarpaciente($scope.objPaciente).then(function (result) {
             $scope.Mensajes = result.data;
             $state.go('PacienteView');
           
         }).catch(function (error) {
             console.log(error);
         });

    };

});

