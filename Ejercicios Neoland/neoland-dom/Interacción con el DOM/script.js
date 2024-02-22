//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector('.showme');
console.log(button.textContent);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado = document.querySelector('#pillado');
console.log(pillado.textContent);

//1.3 Usa querySelector para mostrar por consola todos los parrafos dentro de <p></p>
const parrafos = document.querySelectorAll('p');
parrafos.forEach(parrafo => {
    console.log(parrafo.textContent);
});

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons = document.querySelectorAll('.pokemon');
pokemons.forEach(pokemon => {
    console.log(pokemon.textContent);
});

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMe = document.querySelectorAll('[data-function="testMe"]');
testMe.forEach(test => {
    console.log(test.textContent);
});

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const testMe2 = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(testMe2.textContent);