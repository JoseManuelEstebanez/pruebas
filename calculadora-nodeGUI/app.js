// Importar las dependencias
const express = require('express');
const app = express();
const path = require('path');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para analizar los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Ruta principal para mostrar el formulario
app.get('/', (req, res) => {
    res.render('index');
});

// Ruta para manejar la solicitud POST del cálculo
app.post('/calcular', (req, res) => {
    try {
        const { num1, num2, operacion } = req.body;
        let resultado;

        switch (operacion) {
            case '+':
                resultado = parseFloat(num1) + parseFloat(num2);
                break;
            case '-':
                resultado = parseFloat(num1) - parseFloat(num2);
                break;
            case '*':
                resultado = parseFloat(num1) * parseFloat(num2);
                break;
            case '/':
                if (parseFloat(num2) !== 0) {
                    resultado = parseFloat(num1) / parseFloat(num2);
                } else {
                    throw new Error('No se puede dividir por cero');
                }
                break;
            default:
                throw new Error('Operación no válida');
        }

        res.send(resultado.toString());
    } catch (error) {
        console.error('Error al calcular:', error.message);
        res.status(500).send('Error al calcular: ' + error.message);
    }
});



// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
