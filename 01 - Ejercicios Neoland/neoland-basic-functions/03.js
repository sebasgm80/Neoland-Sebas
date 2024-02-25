const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(arr) {
    let sum = arr[0];
    for (let number of arr) {
            sum += number;
    }
    return sum;
}
let sumaTotal = sumAll(numbers);
console.log(sumaTotal);
