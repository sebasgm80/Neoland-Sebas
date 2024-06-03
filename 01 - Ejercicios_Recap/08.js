let colores = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];
let numeros = [20, 14, 64, 28 ,12 ,74 ,59 ,84 ,54 ,32];
function newArray(arr1, arr2) {
    let ultimo = arr1.pop();
    let nueva = arr2.concat(ultimo)
    return nueva;
}
console.log(newArray(colores, numeros));