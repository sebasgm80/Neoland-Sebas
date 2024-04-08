// Arrows
// 1.1 

const suma = (a = 10, b = 5) => {
    const resultado = a + b;
    console.log("La suma es:", resultado);
    return resultado;
  };
  
  suma(); // Resultado: La suma es: 15
  suma(20); // Resultado: La suma es: 25
  suma(7, 3); // Resultado: La suma es: 10
//--------------------------------------------

// Destructuring
// 2.1
const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 };

// Destructuring del objeto
const { title, gender, year } = game;

// Imprimir variables por consola
console.log("Título:", title);
console.log("Género:", gender);
console.log("Año:", year);
//--------------------------------------------

// 2.2
const fruits = ['Banana', 'Strawberry', 'Orange'];

// Destructuring del array
const [firstFruit, secondFruit, thirdFruit] = fruits;

// Imprimir variables por consola
console.log("Primer fruta:", firstFruit);
console.log("Segunda fruta:", secondFruit);
console.log("Tercera fruta:", thirdFruit)
//---------------------------------------------

// 2.3
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

// Destructuring del objeto
const {name, race} = animalFunction();

// Imprimir variables por consola
console.log("Nombre:", name);
console.log("Raza:", race);
//---------------------------------------------

// 2.4
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

// Destructuring del objeto
const {name: carName, itv: [year1, year2, year3]} = car;

// Imprimir variables por consola
console.log("Nombre del coche:", carName);
console.log("Años de ITV:", year1, year2, year3);
console.log("Año de ITV:", year1);
console.log("Año de ITV:", year2);
console.log("Año de ITV:", year3);
//---------------------------------------------

// Spread Operator
// 3.1

const pointsList = [32, 54, 21, 64, 75, 43]

// Spread Operator
const pointsListCopy = [...pointsList];

// Imprimir variables por consola
console.log("Copia de puntosList:", pointsListCopy);
//---------------------------------------------

// 3.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

// Spread Operator
const toyCopy = {...toy};

// Imprimir variables por consola
console.log("Copia de toy:", toyCopy);
//---------------------------------------------

// 3.3

const pointsLis1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

// Spread Operator
const pointsList3 = [...pointsLis1, ...pointsLis2];

// Imprimir variables por consola
console.log("PuntosList3:", pointsList3);
//---------------------------------------------

// 3.4

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

// Spread Operator
const toyMerge = {...toy1, ...toyUpdate};

// Imprimir variables por consola
console.log("toyMerge:", toyMerge);
//---------------------------------------------

// 3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// Spread Operator delete position 2
const newColors = [...colors.slice(0, 2), ...colors.slice(3)];

// Imprimir variables por consola
console.log("NuevasColores:", newColors);
//---------------------------------------------

// Map
// 4.1
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

// Map
const usersName = users.map(user => user.name);

// Imprimir variables por consola
console.log("NombresUsuarios:", usersName);
//---------------------------------------------

// 4.2
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

// Map
// Utilizar map() para devolver una lista de nombres
const userList = users1.map(user => {
    // Si el nombre comienza con 'A', cambiarlo a 'Anacleto'
    if (user.name.startsWith('A')) {
        return { ...user, name: 'Anacleto' };
    }
    return user;
  }).map(user => user.name); // Extraer solo los nombres

    console.log("Lista de nombres:", userList);
  //---------------------------------------------

  // 4.3
    const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
  // Utilizar map() para devolver una lista de nombres modificados
  const modifiedCities = cities.map(city => {
    // Si isVisited es true, añadir ' (Visitado)' al nombre
    if (city.isVisited) {
      return { ...city, name: city.name + ' (Visitado)' };
    }
    return city;
  }).map(city => city.name); // Extraer solo los nombres
  
  console.log("Lista de ciudades modificadas:", modifiedCities);
//---------------------------------------------

// Filter
// 5.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// Filter
const puedeConducir = ages.filter(age => age >= 18);

// Imprimir variables por consola
  console.log("Puede conducir:", puedeConducir);