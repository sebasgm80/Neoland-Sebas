// Iteración #1: Mix for e includes

/* const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
let categories = [];
for (const movie of movies) {
    for (const category of movie.categories) {
        if (!categories.includes(category)) {
            categories.push(category)
        }
    }
}
console.log(categories)
 */

// Iteración #2: Mix Fors

/* const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
for (const user of users) {
    let totalVolume = 0
    for (const sound in user.favoritesSounds) {
        totalVolume += user.favoritesSounds[sound].volume
    }
    console.log(totalVolume / 3)
}
 */

// Iteración #3: Mix Fors

/* const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
const soundCount = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (soundCount[sound]) {
      soundCount[sound] += 1;
    } else {
      soundCount[sound] = 1;
    }
  }
}

console.log(soundCount); */

// Iteración #4: Métodos findArrayIndex

//Sugerencia de función:
/* const textos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
function findArrayIndex(array, text) {
    return array.indexOf(text);
}
console.log(findArrayIndex(textos, "Mosquito")) */


// Iteración #5: Función rollDice

/* function rollDice(numFaces) {
  return Math.floor(Math.random() * numFaces) + 1;
}
console.log(rollDice(6)); 
console.log(rollDice(24)); */

// Iteración #6: Función swap
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
  return array;
}
const myArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
console.log(swap(myArray, 1, 3)); 

