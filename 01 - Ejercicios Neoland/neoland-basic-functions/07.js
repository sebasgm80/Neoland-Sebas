const nameFinder = [
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
function finderName(arr, nombre) {
    let posicion = arr.indexOf(nombre);
    let existe = posicion !== -1;
    return {
      existe,
       posicion: existe ? posicion : undefined
    };
}
const resultado = finderName(nameFinder, 'Bruce');
console.log(resultado);