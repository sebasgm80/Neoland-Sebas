/*Ejercicio 1: Bucle for
Escribe un programa que pida al usuario un número entero y muestre por pantalla todos los números pares desde 0 hasta ese número. */
let num = 2;
for (let i = 0; i <= 20; i += 2) {
    console.log(i, " es par");
}
/*Ejercicio 2: Bucle while
Escribe un programa que muestre la tabla de multiplicar del número que el usuario teclee. La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.*/
let tabla = 5;
let i = 1;
while (i <= 10) {
    console.log(tabla, " x ", i++, " = ", tabla*i-tabla);
}
/*Escribe un programa que declare una variable llamada nombre y le asigne el valor de tu nombre. A continuación, imprime el valor de la variable por pantalla.*/
let nombre = "Sebas";
console.log(nombre);
/*Escribe un programa que declare dos variables llamadas edad y altura. A continuación, pide al usuario que introduzca sus datos en estas variables. Por último, imprime los valores de las variables por pantalla.*/
let edad = 43;
let altura = 1.78;
console.log("Edad",edad, "Altura", altura)
//---------------------------------------

// Aplicacíon para calcular medidas de cajones. Todas las medidas en milimetros del interior donde va el cajon.
// Los tableros seran de 16 milimetros de grueso.
// Largo del hueco de lado  a lado.
let largo = 1000;
// Altura del hueco 
let alto = 250;
// Profundidad del hueco
let profundidad = 540;
// Grueso del fondo del cajon
let trasera = 10;
//------------------
let l = (largo - 42);
let h1 = (alto - 15);
let h2 = (alto - 25 - trasera);
let z = (profundidad - (profundidad % 50 + 10));
let resultado = "Tableros frontal y trasero " + l + " x " + h2 + " x " + 16 +
                ", Tableros laterales " + z + " x " + h1 + " x " + 16 +
                ", Fondo del cajon " +(l + 16) + " x " + z + " x " + trasera;
console.log(resultado);

// calculadora sencilla. ( sumar, restar, mutiplicar, dividir )
// introducir datos.
let numero1 = 25;
let numero2 = 5;
let operador = "multiplicar";

if (operador === "sumar") {
    console.log(numero1 +  numero2);
} else  if (operador === "restar"){
    console.log(numero1 -  numero2);
}else if (operador === "multiplicar"){
console.log(numero1 * numero2);
}else if (operador === "dividir"){
    console.log(numero1 / numero2);
}
//------------------


