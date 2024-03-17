// Math.floor redondea un numero entero, tambien funciona con numeros negativos
// Math.random genera un numero entre 0 y 1
// El resultado de Math.random() lo multipliamos por esa operaciony le sumamos el ultimo valor
// para que siempre tenga los mismos digitos el min que hayamos definido
// nuestro codigo nos saca un valor entre 9999999 u 1000000

const randomCode = () => {
    let code = Math.floor(Math.random() * (999999 - 100000) + 1000000);
    return code;
    
}
// hacemos un consol.log
console.log(randomCode())
// Exportamos la funcion
module.exports = { randomCode }