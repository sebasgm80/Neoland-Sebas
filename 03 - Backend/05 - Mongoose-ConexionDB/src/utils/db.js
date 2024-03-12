// Importamos mongoose y dotenv mas la configuracion
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Traemos la mongo uri
const MONGO_URI = process.env.MONGO_URI;

// Creamos funcion asincrona para conectarnos a la base de datos de mongodb
const connect = async() => {
    // Vamos a manejar la conexion y los errores con trau catch
    try {
        const db = await mongoose.connect(MONGO_URI, {
            // parsear la url de mongo, la mongo_uri
            useNewUrlParser: true,
            // unificar los caracteres especiales
            useUnifiedTopology: true
        });
        // imprimimos el nombre y el host de la base de datos
        const { name, host } = db.connection;
        console.log(`Conectada la DB con el HOST: ${host} y el name: ${name}`);
    } catch (error) {
        console.log("Hay un error en la conexión con la DB", error);
    }
};

// Exportamos la funcion connect
module.exports = { connect }