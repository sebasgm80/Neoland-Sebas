// Esta es la funcion para crear una contraseña aleatoria
// a partir de unos caracteres que le indico

const randomPassword = () => {
    // con un string elegimos caracteres especiales para meter en la contraseña de forma aleaotria
    const randomString = "*@!=&$";
    // La contraseña tiene que ser un string
    // Tenemos que meter todo el codigo del resultado de las funciones aleatorias
    // en un string interpolation con las comillas giradas `` tenemos varias encasulapciones
    // de bloques de codigo con los metodo Math.random, tostring y Slice con toUpperCase

    // 1 Hacer un Math.random con 4 digitos usando slice para crear un array con esos 4 digitos
    // 2 del string de caracteres especiales, le digo que coja minimo 1 caracter
    // 3 misma operacion en el punto 2
    // 4 misma operacion en el punto 1, pero me devuelve el string en mayuscula con el metodo toUpperCase
    // 5 en el string de caracteres especiales, le digo que coja minimo 1 caracter
    // 6 misma operacion en el punto 2 y 3
    // 7 Me devuelve la contraseña creada

    const passwordSecure =`${Math.random().toString(36).slice(-4)}${
        randomString[Math.floor(Math.random() * 5)]
    }${randomString[Math.floor(Math.random() * 5)]}${Math.random()
        .toString(36)
        .slice(-4)
        .toUpperCase()}${randomString[Math.floor(Math.random() * 5)]}${
        randomString[Math.floor(Math.random() * 5)]
    }`;
    return passwordSecure;
}

// Exportamos la funcion
module.exports = { randomPassword };