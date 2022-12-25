// Creamos un objeto Calculadora
/* eslint no-alert: off */
/* eslint no-restricted-globals: off */
const calculadora = {
  lastResult: 0,
  sumar(a, b) {
    this.lastResult = a + b;
    return this.lastResult;
  },
  restar(a, b) {
    this.lastResult = a - b;
    return this.lastResult;
  },
  multiplicar(a, b) {
    this.lastResult = a * b;
    return this.lastResult;
  },
  dividir(a, b) {
    if (b === 0) {
      return 'Lo siento, no se puede dividir entre cero.';
    }else{
      this.lastResult = a / b;
      return this.lastResult;
    }
  },
};

function pedirOperacion() {
  let operacion = prompt('Seleccione un operación matemática ( +, -, *, /)', '');
  operacion = String(operacion).trim();
  // Validación de la operación seleccionada.
  if (operacion !== 'null') {
    while (operacion.trim() !== '+' && operacion.trim() !== '-' && operacion.trim() !== '/' && operacion.trim() !== '*') {
      operacion = prompt('Tipo de operación no valido. Intente denuevo ( +, -, *, /)', '');
    }
  } else {
    operacion = 'Operación cancelada';
  }
  return operacion;
}

function pedirOperadores() {
  let numero1;
  let numero2;
  numero1 = prompt('Introduzca un número', '');
  numero1 = String(numero1).trim();
  while (Number.isNaN(Number(numero1)) && numero1 !== 'null' && numero1 !== 'R') {
    numero1 = prompt('Error,introduzca un número nuevamente', '');
    numero1 = String(numero1).trim();
  }
  if (numero1 === 'R') {
    numero1 = calculadora.lastResult;
  }
  if (!Number.isNaN(Number(numero1))) {
    numero2 = prompt('Introduzca otro número', '');
    numero2 = String(numero2).trim();
    while (Number.isNaN(Number(numero2)) && numero2 !== 'null' && numero2 !== 'R') {
      numero2 = prompt('Error,introduzca un número nuevamente', '');
      numero2 = String(numero2).trim();
    }
    if (numero2 === 'R') {
      numero2 = calculadora.lastResult;
    }
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
