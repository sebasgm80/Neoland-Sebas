// Hacemos la funcion de utilidades para comprobar si el gender que ha metido el cliente
// es correcto
// Si es uno de los 3 gender devuelve true, si no false

const enumOk = (gender) => {
    const enumGender = ["hombre", "mujer", "otros"];
    if (enumGender.includes(gender)){
        return{
            check: true,
            gender
        }
    } else {
        return{
            check: false
        }
    }
}

// Exportamos la funcion
module.exports = { enumOk }