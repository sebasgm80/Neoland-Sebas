// Helper es para manejar los errores en los catch de nuestras funciones del controlador

// Tenemos una funcion setError con los parametros code y message
// Creamos una nueva instancia de error {new Error}
// y la manejamos mediante code y message

// Code es el codigo de error
// Message es el mensaje de error que trae la consola

// La funcion setError devuelve el error, la nueva instancia de error que nos hemos creado para manejar el error

// error = {
//   code: error.code,
//   message: error.message
//   }

// Exportamos la funcion para usarla dodne queramos, en este caso en las funciones del controlador
// IMPORTANTE!!!! en la llamada de esta funcion dentro del catch hay que poner los parametrosque pide la funcion

const setError = (code, message) => {
    const error = new Error();
    error.code = code;
    error.message = message;
    return error;
};

// Exportamos la funcion
module.exports = { setError };