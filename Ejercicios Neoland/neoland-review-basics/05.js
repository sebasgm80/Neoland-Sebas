const lanzarDado = (caras) => Math.floor(Math.random() * caras) + 1;

// Lanza el dado de 6 caras y muestra el resultado
const resultadoDelDado6Caras = lanzarDado(6);
console.log('El dado de 6 caras muestra:', resultadoDelDado6Caras);

// Lanza el dado de 10 caras y muestra el resultado
const resultadoDelDado10Caras = lanzarDado(10);
console.log('El dado de 10 caras muestra:', resultadoDelDado10Caras);

