let pairs = [
    [ 1, { name: 'Nicolas' } ],
    [ 2, { name: 'Nicolas' } ],
    [ 3, { name: 'Nicolas' } ],
];

function toCollection(arr) {
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);
