
/* 
 * Requerimos el modulo express y dotenv. El modulo dotenv se encarga de cargar
 * las variables de entorno de un archivo llamado '.env' ubicado en el directorio
 * raíz del proyecto.
 */
const express = require("express");
const dotenv = require("dotenv");

/*
 * Configuramos dotenv. Esta función carga el archivo '.env' y lo asocia a
 * las variables de entorno del entorno actual.
 */
dotenv.config();

/*
 * Creamos el puerto usando el archivo '.env'. En el archivo '.env' se debe tener la
 * variable PORT, que es el puerto en el que escuchará el servidor.
 */
const PORT = process.env.PORT;

/*
 * Creamos el servidor web. Express es un framework web de Node.js que nos permite
 * crear aplicaciones web.
 */
const app = express();

/*
 * En esta zona se puede agregar toda la lógica del servidor. Después de agregar
 * la lógica, escuchamos al servidor en el puerto definido en el archivo '.env'.
 */
app.listen(PORT, () => {
  /*
   * Imprimimos un mensaje en la consola indicando que el servidor esta escuchando
   * en el puerto definido en el archivo '.env'.
   */
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})