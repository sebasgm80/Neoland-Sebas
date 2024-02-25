// Ejercicios while
let num = 0;
while (num < 10) {
    num ++;
    console.log(num);
}
//
let numero = 1;
let suma = 0;
while (numero <= 10) {
    suma+= numero;
    numero ++;
}
console.log(`La suma de los numero es ${suma}`);
//
let pares = 2;
let num1 = 0;
while (num1 <= 100) {
    num1 += pares;
    pares += 2;
}
console.log(num1);

let cuentaAtras = 10;
while (cuentaAtras > 0) {
    cuentaAtras = cuentaAtras - 1;
    console.log(`${cuentaAtras} Segundos`);
}