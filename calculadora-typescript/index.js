"use strict";
// function saludar(): void {
//     console.log("¡Hola, mundo!");
//   }
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//   saludar();
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}
function solicitarOperacion() {
    console.log('Seleccione la operación:');
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicación');
    console.log('4. División');
    console.log('5. Salir');
    rl.question('Ingrese el número de la operación deseada: ', (opcion) => {
        switch (parseInt(opcion)) {
            case 1:
                solicitarOperandos(sumar);
                break;
            case 2:
                solicitarOperandos(restar);
                break;
            case 3:
                solicitarOperandos(multiplicar);
                break;
            case 4:
                solicitarOperandos(dividir);
                break;
            case 5:
                rl.close();
                break;
            default:
                console.log('Opción no válida');
                solicitarOperacion();
                break;
        }
    });
}
function solicitarOperandos(operacion) {
    rl.question('Ingrese el primer número: ', (num1) => {
        rl.question('Ingrese el segundo número: ', (num2) => {
            const numero1 = parseFloat(num1);
            const numero2 = parseFloat(num2);
            try {
                const resultado = operacion(numero1, numero2);
                console.log(`El resultado es: ${resultado}`);
            }
            catch (error) {
                console.log(error.message);
            }
            solicitarOperacion();
        });
    });
}
console.log('Bienvenido a la Calculadora');
solicitarOperacion();
