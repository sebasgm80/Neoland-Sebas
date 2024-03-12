
// Requerimos el paquete 'express' para el desarrollo de API's
const express = require("express");

// Creamos una constante para almacenar el puerto en el que escuchará el servidor.
// En este caso, el puerto es el 8080.
const PORT = 8080;

// Usamos 'express' para crear el servidor.
const app = express();

// Escuchamos al servidor en el puerto definido.
// Cuando el servidor esté escuchando, se imprimirá en consola el mensaje
// "Servidor escuchando en el puerto http://localhost:8080"
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})