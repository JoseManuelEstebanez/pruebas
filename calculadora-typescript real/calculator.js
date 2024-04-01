document.addEventListener('DOMContentLoaded', function () {
    var display = document.getElementById('display');
    var buttons = document.querySelectorAll('.number, .operator');
    var btnEqual = document.getElementById('btnEqual');
    var btnClear = document.getElementById('btnClear');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            display.value += button.dataset.value;
        });
    });
    btnEqual.addEventListener('click', function () {
        try {
            display.value = calculate(display.value);
        }
        catch (error) {
            display.value = 'Error';
        }
    });
    btnClear.addEventListener('click', function () {
        display.value = '';
    });
    function calculate(expression) {
        // Utiliza expresiones regulares para separar la expresión en números y operadores
        var numbers = expression.split(/[-+*/]/).map(Number);
        var operators = expression.split(/\d+/).filter(Boolean);
        // Realiza las operaciones matemáticas
        var result = numbers[0];
        for (var i = 0; i < operators.length; i++) {
            var operator = operators[i];
            var number = numbers[i + 1];
            switch (operator) {
                case '+':
                    result += number;
                    break;
                case '-':
                    result -= number;
                    break;
                case '*':
                    result *= number;
                    break;
                case '/':
                    if (number === 0) {
                        throw new Error('No se puede dividir por cero');
                    }
                    result /= number;
                    break;
                default:
                    throw new Error('Operador no válido');
            }
        }
        return result.toString();
    }
});
