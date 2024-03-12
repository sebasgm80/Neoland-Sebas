// importaciones y configuraciones del dotenv
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//Haremos el sembrado de la semilla antes de la conexion a la DB
//Una vez devuelto el seed trerminado haya error o no se desconecta con el finally
//y me conecto de nuevo en el index/
//Despues de terminar se siembra
//No es lo mismo la conexion al seed que la conexion a la DB
const createSeed  = require("./src/utils/seeds/movie.seed");
createSeed();

// Conexion a la DB
// Importamos la funcion de configuracion de cloudinary que tenemos en el middleware
// Me conecto a cloudinary llamando la funcion
const connect = require("./src/utils/db");
setTimeout(() => connect(), 3000);

// Importamos la funcion de cloudinary para configurarla
const { configCloudinary } = require("./src/middleware/files.middleware");
configCloudinary();

// Creacion del servideor web
const app = express();

// Limites json y urlencoded
app.use(express.json({limit: "5mb"}));
app.use(express.urlencoded({limit: "5mb", extended:false}));

// Error del sevidor
app.use((req, res, next) => {
    const error = new Error("Error server");
    error.status = 500;
    return next(error);
})

// Escuchamos al servidor
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
})