"use strict";
let siguiente;
alert("Bienvenido, presione aceptar para continuar.");


//Bucle do while para interacturar con el usuario
//Se ira pidiendo datos al usuario mediante alerts, acto seguido debera escoger una operación y luego se imprimira por pantalla un nuevo mensaje.
do {
     let operacion = prompt("Operación matematica deseada ", "");

     while (operacion.trim() !== "+" && operacion.trim() !== "-" && operacion.trim() !== "/" && operacion.trim() !== "*") {
          
          operacion = prompt("El tipo de operacion introducido no es valido. Intente denuevo", "");
     
     }

     let numeros = prompt("Introduzca dos números", "").trim();
     let numero1 = numeros.substring(0, numeros.indexOf(" "));
     let numero2 = numeros.substring(numeros.lastIndexOf(" "));

     while (isNaN(numero1) === true || isNaN(numero2) === true || numero1.trim().length == 0) {
          numeros = prompt("Error los números introducidos no son validos.Intenta denuevo ", "").trim();
          numero1 = numeros.substring(0, numeros.indexOf(" "));
          numero2 = numeros.substring(numeros.lastIndexOf(" "));

     }

     numero1 = Number(numero1);
     numero2 = Number(numero2);
     
     switch (operacion) {
          case "+":
               alert("Suma : " + (numero1 + numero2));
               break;
          case "-":
               alert("Resta : " + (numero1 - numero2));
               break;
          case "*":
               alert("Multiplicación : " + (numero1 * numero2));
               break;
          case "/":
               alert("Division : " + (numero1 / numero2));
               break;
     }
     
     siguiente = confirm("¿Desea continuar?");

} while (siguiente);



