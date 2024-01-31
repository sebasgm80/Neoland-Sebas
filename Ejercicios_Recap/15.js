

function comprobarLetras(frase) {
    let esMayuscula = frase === frase.toUpperCase();
    let esMinuscula = frase === frase.toLowerCase();

    if(esMayuscula && esMinuscula) {
        console.log("La frase tiene las letras mayusculas y minusculas.");
    } else if (esMayuscula) {
        console.log("Todas las letras de la frase son mayusculas.");
    } else if (esMinuscula) {
        console.log("Todas las letras de la frase son minusculas.");
    } else {
        console.log("La frase tiene una combinacion de letras mayusculas y minusculas.");
    }
    console.log("Frase:", frase);
}

let frase1 = "Hola me llamo Sebas";
let frase2 = "hola me llamo sebas";
let frase3 = "HOLA ME LLAMO SEBAS";

comprobarLetras(frase1);
comprobarLetras(frase2);
comprobarLetras(frase3);