let puntuacionUsuario = 0;
let puntuacionMaquina = 0;

function jugar(eleccionUsuario) {
  const opciones = ['piedra', 'papel', 'tijera'];
  const eleccionComputadora = opciones[Math.floor(Math.random() * 3)];

  const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);

  document.getElementById('resultado').innerHTML = `Tu elección: ${eleccionUsuario}<br>Computadora eligió: ${eleccionComputadora}<br>Resultado: ${resultado}`;

  actualizarPuntuacion(resultado);
}

function determinarGanador(usuario, computadora) {
  if (usuario === computadora) {
    return 'Empate';
  }

  if (
    (usuario === 'piedra' && computadora === 'tijera') ||
    (usuario === 'papel' && computadora === 'piedra') ||
    (usuario === 'tijera' && computadora === 'papel')
  ) {
    puntuacionUsuario++;
    return '¡Ganaste!';
  } else {
    puntuacionMaquina++;
    return '¡Computadora gana!';
  }
}

function actualizarPuntuacion(resultado) {
  document.getElementById('usuario-puntuacion').innerHTML = `Usuario: ${puntuacionUsuario}`;
  document.getElementById('maquina-puntuacion').innerHTML = `Máquina: ${puntuacionMaquina}`;
}
