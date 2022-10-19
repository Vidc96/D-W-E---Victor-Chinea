"use strict";


//Funciones
function saludar() {
    alert('¡Hola!, presione aceptar para continuar.');
}

function pedir_operacion() {
    let operacion = prompt("Operación matemática deseada (+,-,*,/): ", "");
    //Validación de la operación seleccionada.
    while (operacion.trim() !== "+" && operacion.trim() !== "-" && operacion.trim() !== "/" && operacion.trim() !== "*") {

        operacion = prompt("El tipo de operación introducido no es valido. Intente denuevo", "");
    }
    //devuelve el valor de la operacion.
    return operacion;
}

let operando = function pedir_operador() {

    let numero1 = prompt("Introduzca un número","").trim();
    while (isNaN(numero1)) {
        numero1 = prompt("Error,introduzca un número nuevamente", "").trim();
    }
    let numero2 = prompt("Introduzca otro número","").trim();
    while (isNaN(numero2)) {
        numero2 = prompt("Error,introduzca un número nuevamente", "").trim();
    }
    let operandos = numero1 + " " + numero2;
    return operandos;
}

let sumar = (a, b) => a + b;
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => {
    if (b == 0) {
        alert("Lo siento, no se puede dividir entre cero.");
        return "error";
    }
    else {
        let resultado = a / b;
        return resultado;
    }
}
saludar();
do {
    
    let operacion = pedir_operacion();

    let operandos = operando();
    
    let numero1 = operandos.substring(0, operandos.indexOf(" "));
    let numero2 = operandos.substring(operandos.indexOf(" ") + 1);
    
    switch (operacion) {
        
        case "+":
            alert(sumar(parseInt(numero1), parseInt(numero2)));
            break;
        case "-":
            alert(restar(parseInt(numero1), parseInt(numero2)));
            break;
        case "*":
            alert(multiplicar(parseInt(numero1), parseInt(numero2)));
            break;
        case "/":
            alert(dividir(parseInt(numero1), parseInt(numero2)));
    }

} while (confirm("¿Desea continuar con otra operación?"));







