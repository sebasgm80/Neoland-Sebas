let longitud = 7;

function crearArray(n) {
    let array = [];
    for (let i = 1; i <= longitud; i++) {
        array.push(i);
    }
    return array;
}

let resultado = crearArray(longitud);
console.log(resultado);