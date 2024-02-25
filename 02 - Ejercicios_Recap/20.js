let a=[1,2,3,4];
let b=[1,2];
let arrayDiferente = a.filter(function(numero) {
    return !b.includes(numero);
});
console.log(arrayDiferente);