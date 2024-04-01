// Función para sumar dos números
function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
    if (b === 0) {
        return 'Error: No se puede dividir por cero';
    }
    return a / b;
}

// Exportamos las funciones para que puedan ser utilizadas desde otros archivos
module.exports = {
    sumar,
    restar,
    multiplicar,
    dividir
};
//   export default {
//     sumar,
//     restar,
//     multiplicar,
//     dividir
//   };
