// Requerimos protocolo http
const http = require("http");

// creamos servidor
const app = http.createServer((req, res) => {
    // Solicitamos la url den la respuesta y crar method
    // La url es la ruta de la solicitud, por ejemplo, /alumnos
    const url = req.url;
    console.log(url);
    // El metodo es el tipo de solicitud http (GET, POST, PUT, DELETE, etc)
    const method = req.method;

    //creamos funcion con objeto y response
    // Esta funcion sera utilizada para la respuesta de la coleccion de alumnos
    const getAlumnos = (res) => {
        // Tenemos la coleccion de alumnos
        const alumnos = [
            {
                nombre: "David",
                edad: 34,
            },
            {
                nombre: "Elena",
                edad: 30,
            },
            {
                nombre: "Laura",
                edad: 34,
            }
        ];
        // Convertir a string
        const dataString = JSON.stringify(alumnos);

        // Seteamos los headers
        // Establecemos el tipo de contenido a JSON
        res.setHeader("Content-Type", "application/json");
        
        // Finalizar respouesta
        // Enviamos la respuesta con la coleccion de alumnos
        res.end(dataString);
    }
    // Configuramos los endpoints /dia y /noche
    // Utilizamos un switch case para responder de acuerdo a la url solicitada
    switch (url) {
        case "/dia":
            // Respondemos con el saludo correspondiente
            res.end("<h1>Buenos dias</h1>");
            break;

        case "/noche":
            res.end("<h1>Buenas noches</h1>");
            break;

        default:
            break;
    }
    // Configuramos el endpoint /alumnos
    // Si el metodo es GET y la url es /alumnos, llamamos a la funcion getAlumnos
    if(method === "GET" && url === "/alumnos"){
        // Respuesta
        getAlumnos(res);
    }
});

// crear puerto y escuchar el servidor
app.listen(8080, () => {
    // Mensaje de salida, indicando en que puerto esta escuchando el servidor
    console.log("Servidor escuchando en el puerto http://localhost:8080/dia");
})