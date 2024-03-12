// Requerimos express, creamos el puerto y el servidor
// Se requiere la libreria express, se crea el puerto en PORT y el servidor en app
const express = require("express");
const PORT = 8080; // Se define el puerto en el que el servidor va a escuchar
const app = express(); // Se crea el servidor

// Creamos enrutado con express con el metodo router
// Se crea un enrutador para manejar las rutas
const router = express.Router();

// Usamos metodo get nos pide un path con el endpoint y una callback
// Se agrega una ruta GET a "/saludo" que devuelve "<h1>Hola mundo!!</h1>"
router.get("/saludo", (req, res, next) => {
    // Que nos devuelva un saludo
    res.send("<h1>Hola mundo!!</h1>");
})

// Hacemos la peticion de movies
// Se agrega una ruta GET a "/movies" que devuelve una coleccion de pelis
router.get("/movies", (req, res, next) => {
    // Coleccion de pelis
    const movie = ["Coco", "Batman", "Titanic"]
    // Que nos devuelva un saludo
    res.send(movie);
})

// Configuramos el uso del router
// Se agrega el enrutador a la aplicacion en "/api/v1"
app.use("/api/v1", router);

// Escuchamos el servidor
// El servidor comienza a escuchar en el puerto definido
app.listen(PORT, () => {
    // Se indica en la consola el puerto en el que esta escuchando el servidor
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}/api/v1/movies`);
})