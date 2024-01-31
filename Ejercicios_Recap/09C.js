let array1 = [1, 2, [3, 4]];
let array2 = [1, 2, [3, 4, [5, 6]]];

let arraySimple1 = array2.flat();
let arraySimple2 = arraySimple1.flat();
console.log(arraySimple2);
