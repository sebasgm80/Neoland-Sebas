/**
 * crea alegoritmo que tome un array de
 * objetos y devuelva un array de pares
*/
let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id: 2,
    name: "Nicolas",
}, {
    id: 3,
    name: "Nicolas",
}];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);