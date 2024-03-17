// Funcion state para saber el esatdo del user, logueado o no

// Los estados son funcionales, se utilizan y se reinician (vuelve a su estado inicial)

// Siempre teinen dos funciones
// 1 get que devuelve el mismo dato seteado (el dato que tiene en su momento)
// 2 set devuelve el mismo dato reiniciado (el dato en su estado inicial)

// Lo usamos  haciendo un test sobre el registro (envio del email)
// en su estado inicial, el estado del envio es false por que todavia no se ha enviado nada

let testEmailSend = false;

// Funcion GET y SET

const setTestEmailSend = (dataBoolean) => {
    // seteado del estado actual
    // dataBoolean es false
    testEmailSend = dataBoolean;
}

const getTestEmailSend = () => {
    // reiniciado del estado inicial
    // dataBoolean es false
    return testEmailSend;
}

// Exportamos la funcion
module.exports = { getTestEmailSend, setTestEmailSend }