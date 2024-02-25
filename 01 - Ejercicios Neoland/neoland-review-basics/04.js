let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
function findArrayIndex(array, text) {
    for (const [index, element] of array.entries()) {
        if(element === text){
            return index
        }
    }
    return -1;
}
let posicion = findArrayIndex(animales, "Salamandra")
console.log(posicion)