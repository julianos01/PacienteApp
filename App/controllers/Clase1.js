angular.module('appTest').controller('myctrl',function($scope){


        $scope.nombre = "Julian";
        $scope.Apellido = "Osorio";
        $scope.CambiarNombre = function (num1,num2) {
            $scope.nombre = num1;
            $scope.Apellido = num2;


        };

        $scope.GuardarProducto = function (Nombreej, Code) {
            $scope.Nombre = Nombreej;
            $scope.Codes = Code;
            $scope.listaproductos = [];



        };

        $scope.isshow = "false";
        $scope.ShowInput = function () {
            $scope.isshow = !$scope.isshow;
        };



        $scope.listpersonas = [
            { identificacion: '1', nombre: 'Julian' }, { identificacion: '2', nombre: 'Mariana' }, { identificacion: '3', nombre: 'Laura' },
             { identificacion: '4', nombre: 'Natalia' },
              { identificacion: '5', nombre: 'Jorge' },
               { identificacion: '6', nombre: 'Elizabeth' }, { identificacion: '7', nombre: 'Tatiana' }
        ];


        $scope.objProducto = { nombre: " " , codigo: " " };
        $scope.listProducto = [{ nombre: 'pera', codigo: 1 }];
        $scope.guardarProducto = function () {
            $scope.listProducto.push($scope.objProducto);
            $scope.objProducto = {};

        }


    });
