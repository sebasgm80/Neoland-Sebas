// Importamos la libreria fs (Biblioteca de Node.js que nos permite interactuar con el sistema de archivos)
const fs = require("fs");

// Creamos array vacio y para meter las peliculas (Arreglo vacio donde se almacenaran las peliculas)
const movies = [];

// Crear metodo para leer el archivo movies.json (Leemos el archivo movies.json con fs.readFile, el error lo guardamos en error y la data en data)
fs.readFile("src/movies.json", (error, data) => {
    // Logica de error y data, usamos operador ternario (Si hay un error lo mostramos, de lo contrario parseamos la data como JSON y lo agregamos al array de peliculas)
    error ? console.log(error) : movies.push(JSON.parse(data));
    // Funcion leeer el archivo (Funcion que muestra por consola las peliculas)
    printData();
});

// Mostramos en la consola las peliculas (Funcion que muestra por consola las peliculas)
const printData = () => {
    console.log(movies); // Mostramos en la consola el array de peliculas
}