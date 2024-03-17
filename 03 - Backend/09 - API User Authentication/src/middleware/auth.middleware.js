// Importacions y configuraciones
// Modelo del User, funcion verifyToken del token.js, dotenv
const User = require("../api/models/User.model");
const { verifyToken } = require("../utils/token");
const dotenv = require("dotenv");
dotenv.config();

// El middleware esta entre el usuario y el backend
// porque va a utenticar que el login sea correcto y se pueda continuar
// Se usa para comprobar si un  persona intenta entrar en una ruta determinada
// esta autorizada para hacerl, el metodo se usa para comprobar esa autenticacion es un token
// generado por la libreria jsonwebtoken
// Necesitamos el modelo User  (Para coger los datos del user)
// y una funcion isAuth para saber si esta logueado o no

// Funcion de autenticacion

const isAuth = async (req, res, next) => {
    // Se hace una peticion y el token se envia por las headers (info que no se ve en la peticion)
    // Se envia como un Bearer Token, es necesario lo primero es aplicar el metodo Replace del Bearer
    // a un string vacio para luego jsonwebtokenme lo reconozca sin la palabra bearer

    const token = req.headers.authorization?.replace("Bearer ", "");
    
    // hacemos un if para comprobar si hay token o no y cree un error de no autorizado
    if (!token) {
        return next(new Error("No autorizado"));
    }

    // Con este codigo hago la verificacion con el token
    // Hay una funcion que esta en utils/token.js verifyToken()
    // Verifica nuestra clave de jwt la cual generamos nosotros
    // Y la metemos en el .env para traerla a la funcion
    // Ademas como hace la funcion verifyToken ya tenemos decodificado el token para poder comprobarlo
    try {
        // VerifyToken devuelve la informacion que le dimos para crear el token email y id
        // lo metemos en decoded lo que tiene dentro es un objeto con email y id
        const decoded = verifyToken(token, process.env.JWT_SECRET);
        // Decocodificamos para hacer una peticion al user (req.user) àra saber si el usuario esta logueado
        // Vamos a buscar el usuario por id gracias ha haber decodificado el token y hemos sacado el email, id
        // Una vez encontrado el usuario por id lo guardamos en req.user
        // req.user nos servira para saber si el usuario esta logueado o no
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return next(error);
    }
};

// Ver el user es admin o no

// Esta funcion coge al token creado en la funcion isAuth, recibe el token y lo verifica decodificandolo
// Despues encuentra el user por id y comprueba si tiene el rol de admin
// Si tiene el rol de admin continua la funcion next()
// Si no dara error y sale del back

const isAuthAdmin = async (req, res, next) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
        return next(new Error("No autorizado"));
    }
    try {
        const decoded = verifyToken(token, process.env.JWT_SECRET);
        // Cuando decodifico el token saco el id y el email
        console.log(decoded);
        req.user = await User.findById(decoded.id);
        // Pongo un requisito mas y es que sea admin
        if (req.user.rol !== "admin") {

            next();
        } else {
            return next(new Error("No autorizado como admin"));
        }
        next();
    } catch (error) {
        return next(error);
    }
};

// Exportamos las funciones
module.exports = { isAuth, isAuthAdmin };