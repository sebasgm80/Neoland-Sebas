function swap(array, index1, index2) {
   [array[index1], array[index2]] = [array[index2], array[index1]];
   return array;
}

let miArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

swap(miArray, 1, 3);
console.log("Array resultante", miArray);