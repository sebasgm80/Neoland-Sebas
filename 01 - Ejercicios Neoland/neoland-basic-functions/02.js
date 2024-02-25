const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(arr) {
    let max = arr[0];
    for (avenger of arr) {
        max = max < avenger ? max : avenger;
    }    
    return max;
}
let avengerFinal = findLongestWord(avengers)
console.log(avengerFinal);