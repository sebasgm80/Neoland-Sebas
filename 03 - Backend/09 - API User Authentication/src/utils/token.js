// importamos la libreria JWT y dotenv
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

// Creamos la funcion para generar el token
// La usaremos dentro del controlador del user en la funcion de login

const generateToken = (id, email) => {
    // Si no hay id o email creamos un error con un mensaje diciendo que no hay id del usuario o email
    if (!id || !email) {
        throw new Error("No se ha encontrado el id de usuario o el email de usuario");
    }

    // Si hemos recibido bien el id o email regristamos la peticion del token con el metodo sing
    // Que necesita sing? La info para generar el token, la palabra secreta, expiracion del token
    // La palabra secreta la generamos nosotros(En authMiddleware y la ponemos en el .env)

    return jwt.sign({id, email}, process.env.JWT_SECRET,{expiresIn: "1d"});
};

// Despues de generar el token hacemos la decodificacion del mismo
// para ver si sigue siendo valido y sacamos la Informacion que nos ha permitido generarlo

// Funcion para verificar el token del user
// La usaremos dentro del middleware de auth

const verifyToken = (token) => {
    // Si no hay token mandamos un error de que no hay el mismo
    if (!token) {
        throw new Error("No se ha encontrado el token");
    }
    // La funcion verify de jwt devuelve directamente el token decodificado con su email y su id
    return jwt.verify(token, process.env.JWT_SECRET);
}

// Exportamos las funciones
module.exports = {generateToken, verifyToken};