
/* 
  Importamos los modulos necesarios.
  La funcion 'dotenv.config()' se encarga de leer el archivo '.env'
  y agregar las variables de entorno al objeto 'process.env'
*/
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

/* 
  Importamos la funcion 'connect' desde el archivo 'db.js'
  localizado en 'src/utils/db'. Esta funcion se encarga de establecer
  la conexion a la base de datos.
*/
const { connect } = require("./src/utils/db");

/* 
  Creamos la variable 'PORT' y le asignamos el valor del entorno
  de proceso 'process.env.PORT'
*/
const PORT = process.env.PORT;

/* 
  Creamos una instancia de 'express' para el servidor web
*/
const app = express();

/* 
  Establecemos la conexion a la base de datos. Si la conexion es exitosa,
  se mostrará un mensaje en la consola indicando que todo esta correcto.
*/
connect().then(() => {
  console.log("Conexión a la base de datos exitosa");
}).catch((err) => {
  console.error("Error al establecer la conexión a la base de datos: ", err);
});

/* 
  Lanzamos el servidor en el puerto especificado en 'process.env.PORT'
  y mostramos un mensaje en la consola indicando que el servidor esta escuchando
*/
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
