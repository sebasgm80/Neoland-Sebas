// Iteración #1 Variables

/* let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
z = h + y; */

// Iteración #2: Variables avanzadas

//1,1
/* const character = {name: "Jack Sparrow", age: 10};
let age = 25
console.log(character); */

//1,2
/* let firstName = "Jon";
let lastName = "Snow";
let age = 24;
console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos." );
 */

//1,3
/* const toy1 = {name: "Buss myYear", price: 19};
const toy2 = {name: "Rallo mcKing", price: 29};
console.log(); */

//1,4
/* let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000}; */

// Iteración #3: Operadores

//1,1
/* console.log(10 * 5);
console.log(10 / 2);
console.log(15 % 9);
let p = 10;
let j = 5;
let o = p + j;
console.log(o)
let c = 10;
let m = 5;
let i = c * m;
console.log(i) */

// Iteración #4: Arrays

//1,1
/* const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]) */    

//1,2
/* const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";
console.log(avengers) */

//1,3
/* const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length) */

//1,4
/* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty","Summer");
console.log(rickAndMortyCharacters[4]) */

//1,5
/* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]);
console.log(rickAndMortyCharacters[4]); */

//1,6
/* const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters) */

// Iteración #5: Condicionales

/* const number1 = 10;
const number2 = 20;
const number3 = 2;

if(number2 / number1 === 2){
    console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
    console.log("number1 es estrictamente distinto a number2");

}

if (number3 !== number1) {
    console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
    console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 === number1, number1 * 2 === number2) {
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (number2 / number2 === number1, number1 / 5 === number3) {
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
} */

// Iteración #6: Bucles

//1,1

/* for (let i = 0; i <= 9; i++) {
    console.log(i)
} */

//1,2
/* for (let i = 0; i <= 9; i++) {
    console.log(i % 2 === 0 )
} */

//1,3
for (let i = 0; i <= 10; i++) {
    if (i === 10) {
        console.log("Dormido");
    } else {
        console.log("Intentando dormir");
    }
}
