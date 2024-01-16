// Operadores logicos
let planet = "Tierra";
isInnePlanet = true; ("La Tierra es un planeta interno");
hasAtmosphere = true; ("la Tierra tiene atmosfera");
let isHabitable = (isInnePlanet && hasAtmosphere)
console.log(isHabitable);

// Variables
let myFavoriteHero = "Hulk";
x = 50;
h = 5;
y = 10;
z = h + y;

const character = {name: "Jack Frost", age: 10};
character.age = 250;
console.log(character);

// bucles
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let numero = 30;
while (numero <= 40) {
    console.log(numero);
    numero++;
}

let numberList = [2, 7, 12, 23, 34, 45, 56, 67, 78];
for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
        console.log(numberList[i] + " es par");
    }   
}

// bucle for
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(i + j);
    }
}
// Números pares e impares
let numbers = [2, 7, 12, 23, 34, 45, 56, 67, 78];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + " es par");
    } else {
        console.log(numbers[i] + " es impar");
    }
}
// bucle while
let numeros = 1;
while (numeros <= 10) {
    console.log(numeros);
    numeros++;
}