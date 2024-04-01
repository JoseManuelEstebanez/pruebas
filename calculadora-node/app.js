// Importar las dependencias
const express = require('express');
const calculadora = require('./calculadora');

/*
import express from 'express';
import { sumar } from './calculadora';
*/

// Crear una instancia de la aplicación Express
const app = express();

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
z
// Definir una ruta principal
// Definir una ruta principal
app.get('/', (req, res) => {
    // Realizar la operación de la calculadora
    const resultadoCalculadora = calculadora.sumar(5, 3); // Por ejemplo, suma de 5 y 3
    // Renderizar una vista EJS y pasar el resultado de la calculadora
    res.render('index', { mensaje: '¡Hola desde Express!', resultadoCalculadora});
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
