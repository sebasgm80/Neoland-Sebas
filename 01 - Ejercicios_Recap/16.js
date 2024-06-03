let frasePalindromo = "Anita lava la tina";
let lowerCase = frasePalindromo.toLowerCase();
let sinEspacios = lowerCase.split(' ').join('');

let reverse = Array.from(sinEspacios).reverse();
let resultado = reverse.join('') === sinEspacios;

if (resultado) {
    console.log("La frase es un palíndromo");
} else {
    console.log("La frase no es un palíndromo");
}

