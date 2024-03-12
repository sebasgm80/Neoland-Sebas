// Hacemos la funcion en utilidades para comprobar si el gender que a puesto
// el cliente entra dentro de los gender que puedo usar en el modelo Character
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

module.exports = enumOk;