angular.module('appTest').service('PacienteService', function ($http) {

   
    var url = "http://192.168.1.7/";
    this.getAllPacientes = function () {
        var result = $http.get(url + "ApiMobileCedesistemas/api/Paciente");
        return result;
    }

    this.eliminarPaciente = function (Identificacion) {
        var result = $http.delete(url + "api/Paciente/"+Identificacion);
        return result;
    }

    this.guardarpaciente = function (objPaciente) {
        var result = $http.post(url + "api/Paciente", objPaciente);
        return result;
    }


});