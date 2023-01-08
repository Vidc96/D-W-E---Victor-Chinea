// Creamos un objeto Calculadora
/* eslint no-alert: off */
/* eslint no-restricted-globals: off */
// Creamos la clase Calcualdora
class Calculadora {
  // Constructor de la clase
  constructor(lastResult) {
    // Propiedades
    this.lastResult = lastResult;
  }

  // Métodos
  sumar(a, b) {
    this.lastResult = a + b;
    return this.lastResult;
  }

  restar(a, b) {
    this.lastResult = a - b;
    return this.lastResult;
  }

  multiplicar(a, b) {
    this.lastResult = a * b;
    return this.lastResult;
  }

  dividir(a, b) {
    if (b === 0) {
      return 'Lo siento, no se puede dividir entre cero.';
    }
    this.lastResult = a / b;
    return this.lastResult;
  }
}
// Objeto calculadora
const calculadora = new Calculadora(0);

function pedirOperacion() {
  let operacion = prompt('Seleccione un operación matemática ( +, -, *, /)', '');
  operacion = String(operacion).trim();
  try {
    if (operacion === 'null') {
      operacion = 'Operación cancelada';
    } else if (operacion.trim() !== '+' && operacion.trim() !== '-' && operacion.trim() !== '/' && operacion.trim() !== '*') {
      // Creamos un error si, la operación introducida no sea la correcta.
      throw new Error();
    }
  } catch (error) {
    // Mensaje de error y reinicia la función
    alert('Error, intente de nuevo!');
    pedirOperacion();
  }
  return operacion;
}

function pedirOperadores() {
  let numero1;
  let numero2;
  let numerosValidos = false;
  numero1 = prompt('Introduzca un número', '');
  numero1 = String(numero1).trim();
  try {
    // Creamos el error si hay un error en la introducción del primer operando.
    if (Number.isNaN(Number(numero1)) && numero1 !== 'null' && numero1 !== 'R') throw new Error();
    if (numero1 === 'R') numero1 = calculadora.lastResult;
  } catch (error1) {
    // Mensaje de error y reinicia la función
    alert('Error,introduzca un número nuevamente', '');
    pedirOperadores();
  }
  if (numero1 !== 'null') {
    do {
      numero2 = prompt('Introduzca otro número', '');
      numero2 = String(numero2).trim();
      try {
        // Creamos el error si hay un error en la introducción del segundo operando.
        if (Number.isNaN(Number(numero2)) && numero2 !== 'null' && numero2 !== 'R') throw new Error();
        if (numero2 === 'R') numero2 = calculadora.lastResult;
        numerosValidos = true;
      } catch (error2) {
        // Mensaje de error.
        // no se reinicia la función ya que se perderia el valor del primer operando
        alert('Error,introduzca otro número nuevamente', '');
        numerosValidos = false;
      }
    } while (numerosValidos === false);
  }
  let operandos;
  if (numero1 !== 'null' && numero2 !== 'null') {
    operandos = `${numero1} ${numero2}`;
  } else {
    operandos = 'operandos cancelados';
  }
  return operandos;
}

// Funcionamiento
alert('¡Bienvenido, usuario!');
let calculadoraEncendida = false;

do {
  const operacion = pedirOperacion();
  if (operacion !== 'Operación cancelada') {
    calculadoraEncendida = true;
    const operandos = pedirOperadores();
    if (operandos !== 'operandos cancelados') {
      const numero1 = operandos.substring(0, operandos.indexOf(' '));
      const numero2 = operandos.substring(operandos.indexOf(' ') + 1);
      switch (operacion) {
        case '+':
          alert(calculadora.sumar(Number(numero1), Number(numero2)));
          break;
        case '-':
          alert(calculadora.restar(Number(numero1), Number(numero2)));
          break;
        case '*':
          alert(calculadora.multiplicar(Number(numero1), Number(numero2)));
          break;
        case '/':
          alert(calculadora.dividir(Number(numero1), Number(numero2)));
        // no default
      }
    }
    calculadoraEncendida = confirm('¿Siguiente operación?');
  } else {
    calculadoraEncendida = false;
  }
} while (calculadoraEncendida);
