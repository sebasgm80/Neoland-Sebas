// Ejercicios if, else if.
let numero1 = 54;
let numero2 = 20;
if (numero1 > numero2) {
    (console.log(`El numero mayor es ${numero1}`));
} else if (numero1 < numero2) {
    console.log(`El numero mayor es ${numero2}`);
} else {
    console.log(`Los dos numeros son iguales`);
}

let precio = 110;
if (precio >= 100) {
    let descuento = precio * 0.1;
    let precioFinal = precio - descuento;
    console.log(`El precio final es ${precioFinal} `);
} else {
    console.log(`El precio final es ${precio}`);
}

let numero = 7;
if (numero === 1) {
    console.log(`Es lunes`);
} else if (numero === 2) {
    console.log(`Es martes`);
} else if (numero === 3) {
    console.log(`Es miercoles`);
} else if (numero === 4) {
    console.log(`Es jueves`);
} else if (numero === 5) {
    console.log(`Es viernes`);
} else if (numero === 6) {
    console.log(`Es sabado`)
} else {
    console.log(`Es domingo`);
}

let num = 0;
while (num < 10) {
    num = num + 1;
    console.log(num);
}


