// Requerimos el módulo http de Node.js
const http = require("http");

// Creamos un servidor HTTP utilizando el módulo http de Node.js.
// El servidor se crea pasando una función de callback que se ejecutará cada vez que llegue una petición.
// Esta función recibe dos parámetros, la petición y la respuesta.
const app = http.createServer((req, res) => {
    // Configuramos el código de estado de la respuesta.
    // En este caso, lo establecemos en 200, indicando que la petición fue procesada correctamente.
    res.statusCode = 200;

    // Configuramos el tipo de contenido en la respuesta.
    // En este caso, establecemos que el contenido es de tipo HTML.
    res.setHeader("Content-Type", "text/html");

    // Finalmente, enviamos la respuesta al cliente.
    // En este caso, enviamos una cadena de texto que contiene un encabezado HTML.
    res.end("<h1>Hola mundo</h1>");
});

// Asignamos un puerto al servidor y le indicamos que comience a escuchar las conexiones.
// El puerto en este caso es el 8080.
app.listen(8080, () => {});

// Mostramos en la consola un mensaje indicando que el servidor está escuchando en el puerto 8080.
console.log("Server listening on port http://localhost:8080");