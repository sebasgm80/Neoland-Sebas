let jugadores = [
    {nombre: "Ana", puntos: [21,3,5,78,25], temporada: false},
    {nombre: "Pedro", puntos: [55,66,77,55,66], temporada: true},
    {nombre: "Juan", puntos: [12,83,40,65,10], temporada: true},
    {nombre: "Marta", puntos: [24,90,36,78,20], temporada: true},
]
function mejorJugador(jugadores) {
    let mejor = { nombre: "", media: 0, inscrito: false };

    jugadores.forEach((jugador) => {
        const media = jugador.puntos.reduce((total, puntaje) => total + puntaje, 0) / jugador.puntos.length;

        if (media > mejor.media) {
        mejor = { nombre: jugador.nombre, media, inscrito: jugador.temporada };
    }
    });

    return mejor;
}


const resultado = mejorJugador(jugadores);
console.log(resultado);