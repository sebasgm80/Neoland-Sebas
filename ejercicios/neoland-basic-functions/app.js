// Iteración #1: Buscar el máximo
/* function sum(numberOne , numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
console.log(sum(20, 10)); */

// Iteración #2: Buscar la palabra más larga

/* const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longestWord = param[0];
  for (let i = 1; i < param.length; i++) {
    if (param[i].length > longestWord.length) {
      longestWord = param[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(avengers)); */

// Iteración #3: Calcular la suma

/* const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  let result = 0;
  for(let num of param){
    result += num;
  }
  return result;
}
console.log(sumAll(numbers)) */

// Iteración #4: Calcular el promedio

/* const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
 let result = 0;
 for(let num of param){
    result += num;
  
 }
 let ave = param.length;
 return result / ave;
}
console.log(average(numbers)); */

// Iteración #5: Calcular promedio de strings

/* const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const result = mixedElements.reduce((acc, el) => {
  if (typeof el === 'number') acc.sumNumbers += el;
  else if (typeof el === 'string') acc.sumStringLengths += el.length, acc.countStrings++;
  return acc;
}, { sumNumbers: 0, sumStringLengths: 0, countStrings: 0 });

console.log({
  sumNumbers: result.sumNumbers,
  averageStringLength: result.countStrings > 0 ? result.sumStringLengths / result.countStrings : 0
}); */

// Iteración #6: Valores únicos

/* const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  return array = [...new Set(param)];
}
console.log(removeDuplicates(duplicates)); */

// Iteración #7: Buscador de nombres
 
/* const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  return nameFinder.includes("Clint")
}
console.log(finderName(nameFinder)); */

// Iteration #8: Contador de repeticiones

/* const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function wordCounter(param) {
  return param.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
}
console.log(wordCounter(counterWords)); */