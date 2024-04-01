// function saludar(): void {
//     console.log("¡Hola, mundo!");
//   }
  
//   saludar();
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumar(a: number, b: number): number {
    return a + b;
}

function restar(a: number, b: number): number {
    return a - b;
}

function multiplicar(a: number, b: number): number {
    return a * b;
}

function dividir(a: number, b: number): number {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

function solicitarOperacion(): void {
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

function solicitarOperandos(operacion: Function): void {
    rl.question('Ingrese el primer número: ', (num1) => {
        rl.question('Ingrese el segundo número: ', (num2) => {
            const numero1 = parseFloat(num1);
            const numero2 = parseFloat(num2);
            try {
                const resultado = operacion(numero1, numero2);
                console.log(`El resultado es: ${resultado}`);
            } catch (error: any) {
                console.log(error.message);
            }
            solicitarOperacion();
        });
    });
}

console.log('Bienvenido a la Calculadora');
solicitarOperacion();

