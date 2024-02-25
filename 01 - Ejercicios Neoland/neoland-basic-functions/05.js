const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let numeros = mixedElements.filter(Element => typeof Element === "number");
let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
let string = mixedElements.filter(Element => typeof Element === "string");
let str = string.reduce((acumulador, string) => acumulador + string.length, 0);

console.log(suma, str);
