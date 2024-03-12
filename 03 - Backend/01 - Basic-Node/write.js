// Importamos la libreria fs
const fs = require("fs");

// Creamos un array de movies para añadirlo al archivo movies.json
/*
 * Creamos un array de movies donde cada movie tiene:
 * - title: nombre de la pelicula
 * - year: año de la pelicula
 * - availables: disponible en streaming o no
 */
const movies = [
    {
        "title": "Infinity Pool",  // Nombre de la pelicula
        "year": 2023,              // Año de la pelicula
        "availables": false       // Disponible en streaming o no
    },
    {
        "title": "Batman",         // Nombre de la pelicula
        "year": 2013,              // Año de la pelicula
        "availables": true         // Disponible en streaming o no
    },
    {
        "title": "Barbie",          // Nombre de la pelicula
        "year": 2023,              // Año de la pelicula
        "availables": false       // Disponible en streaming o no
    }
];

// Creamos nueva clave en json = view
// si la pelicula es de 2023 y no la he visto : false
// Si la pelicula es de otro año y si la he visto view : true
/*
 * Creamos un nuevo array donde se agrega la clave view
 * Si la pelicula es de 2023 y no la he visto view es false
 * Si la pelicula es de otro año y si la he visto view es true
 */
const dataUpdate = movies.map((movie, index) => {
    if (movie.year === 2023) {
        return {
            ...movie,
            view: false,  // Agrega view: false si la pelicula es de 2023 y no la he visto
        }
    } else {
        return {
            ...movie,
            view: true,  // Agrega view: true si la pelicula es de otro año y si la he visto
        }
    }
});

// Mostramos la logica
console.log("movies actualizadas", dataUpdate);

// Escribimos sobre el json
/*
 * Convierto el nuevo array dataUpdate a string con JSON.stringify
 * para escribirlo en el archivo movies.json
 */
const stringMovie = JSON.stringify(dataUpdate);

// Metodo erite file
/*
 * Escribimos en el archivo movies.json el nuevo array dataUpdate
 * Con el metodo writeFile de fs
 */
fs.writeFile("src/movies.json", stringMovie, () => {
    console.log("archivo actualizado con exito");
})