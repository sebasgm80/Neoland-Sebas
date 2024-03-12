const express = require("express");
const PORT = 8080;
const app = express();

// Routing con express
const router = express.Router();

// Creamos los endpoints
// Creamos el método y la ruta, en la ruta configuramos el parámetro (:name)
// Creamos la función que controla el endpoint (req, res, next)
// Mostraremos el resultado en la consola.
// Ruta con param :name
router.get("/buscar/:name", (req, res, next) => {
    // Extraemos el parámetro :name mediante desestructuración {name} que no es un elemento fijo
    const { name } = req.params;
    // Mostramos el resultado en la consola
    console.log("Este es el parámetro name", name);
    // Creamos una colección de nombres
    const alumnos = ["Manolo", "Pedro", "Maria", "Lucia"];
    // Creamos un contador de array en 0
    let acc = 0;
    // Recorremos el array y comparamos si hay ese nombre
    alumnos.forEach((item) => {
        // Transformamos los nombres a minusculas
        item.toLocaleLowerCase() === name.toLocaleLowerCase() && acc++;
    })
    // Devolvemos la condición y el nombre o el error
    return acc
    ? res.status(200).json(`El alumno ${name} está en la lista 👍🏻`)
    : res.status(404).json(`El alumno ${name} no está en la lista 🙅🏻`);
})
    
// Hacemos una ruta con query (usamos el mismo ejemplo que antes)
// http://localhost:8080/queryBuscar?name=pedro
router.get("/queryBuscar", (req, res, next) => {
    // Extraemos el query name mediante desestructuración {name} que no es un elemento fijo
    const { name } = req.query;
    // Comprobamos si hay un valor y si hay un valor ejecutamos el if, si no lo hay ejecutamos el error
    if (name) {
        console.log("Este es el query name:", name);
        // Creamos una colección de nombres
        const alumnos = ["Manolo", "Pedro", "Maria", "Lucia"];
        // Creamos un contador de array en 0
        let acc = 0;
        // Recorremos el array y comparamos si hay ese nombre
        alumnos.forEach((item) => {
            // Transformamos los nombres a minusculas
            item.toLocaleLowerCase() === name.toLocaleLowerCase() && acc++;
        })
        // Devolvemos la condición y el nombre o el error
        return acc
        ? res.status(200).json(`El alumno ${name} está en la lista 👍🏻`)
        : res.status(404).json(`El alumno ${name} no está en la lista 🙅🏻`);
    }else{
        // En caso de que no haya un valor devolvemos el error
        return res.status(404).json("No se ha introducido ningún valor correcto");
    }
    
})

// Utilizamos el Router con app.use
app.use("/api/v1", router);

// Escuchamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}/api/v1/buscar/`);
})
