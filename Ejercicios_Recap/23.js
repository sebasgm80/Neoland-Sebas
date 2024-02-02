estudiantes = {
    Bea: 5,
    Ana : 7,
    Sebas : 7,
    Manolo : 4,
}
let sumaVotos = 0;
for (const estudiante in estudiantes) {        
    sumaVotos += estudiantes[estudiante];    
}
let media = sumaVotos / Object.keys(estudiantes).length;
let nuevaMedia = Math.round(media *1.1);

let estadoEstudiantes = {};
for (let estudiante in estudiantes) {
    let voto = estudiantes[estudiante];
    let estado = voto >= nuevaMedia ? `Aprobado con ${voto}` : `Suspenso con ${voto}`;
    estadoEstudiantes[estudiante] = estado;
};

console.log(estadoEstudiantes);