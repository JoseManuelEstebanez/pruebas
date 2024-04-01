document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const buttons = document.querySelectorAll('.number, .operator') as NodeListOf<HTMLButtonElement>;
    const btnEqual = document.getElementById('btnEqual') as HTMLButtonElement;
    const btnClear = document.getElementById('btnClear') as HTMLButtonElement;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            display.value += button.dataset.value;
        });
    });

    btnEqual.addEventListener('click', () => {
        try {
            display.value = calculate(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    });

    btnClear.addEventListener('click', () => {
        display.value = '';
    });

    function calculate(expression: string): string {
        // Utiliza expresiones regulares para separar la expresión en números y operadores
        const numbers = expression.split(/[-+*/]/).map(Number);
        const operators = expression.split(/\d+/).filter(Boolean);
        
        // Realiza las operaciones matemáticas
        let result = numbers[0];
        for (let i = 0; i < operators.length; i++) {
            const operator = operators[i];
            const number = numbers[i + 1];
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
