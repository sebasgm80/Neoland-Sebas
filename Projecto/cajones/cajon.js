function mostrarResultado(idElemento, valor1, valor2, valor3) {
    document.getElementById(idElemento + "Resultado").innerText = idElemento + ": "+ valor1 + " - " + valor2 + " x " + valor3;
}

function calcular() {
    // Obtener los valores de los inputs
    let largo = document.getElementById("largo").value;
    let altura = document.getElementById("altura").value;
    let profundidad = document.getElementById("profundidad").value;
    let laterales = document.getElementById("laterales").value;// grueso travesaños
    let fondo = document.getElementById("fondo").value;
    let cajones = document.getElementById("cajones").value;

    // Aquí puedes realizar los cálculos con los valores obtenidos
    // En este ejemplo, simplemente los imprimimos en la consola
    console.log("Largo:", largo);
    console.log("Altura:", altura);
    console.log("Profundidad:", profundidad);
    console.log("Grueso laterales:", laterales);
    console.log("Grueso fondo:", fondo);
    console.log("Numero de cajones:", cajones);

    let largoCalculado1 = parseInt(largo) - 42; //medida de largo del frente
    let alturaCalculada1 = (parseInt(altura) / (parseInt(cajones)) - 25);// medida altura del lateral de los cajones centrales
    let alturaCalculada2 = (alturaCalculada1 - parseInt(fondo))-parseInt(laterales);// medida de altura del frente centrales
    let lateralCalculado1 =((parseInt(profundidad))-10)-((parseInt(profundidad)-10)%(50));// medida de largo de las guias
    let numeroFrentes = parseInt(cajones)*2//numero de cajones
    let gruesoTravesaños = parseInt(laterales)//grueso de los travesanos
    




    console.log("largo calculado:", largoCalculado1);
    console.log("altura calculada:", alturaCalculada1);
    console.log("altura calculada:", alturaCalculada2);
    console.log("lateral calculado:", lateralCalculado1);
    console.log("numero de frentes:", numeroFrentes);
    console.log("grueso de travesanos:", gruesoTravesaños);

    

    // Mostrar resultados en el HTML
    mostrarResultado("Frentes",numeroFrentes, (largoCalculado1 - gruesoTravesaños), (alturaCalculada2 - gruesoTravesaños));
    mostrarResultado("Laterales", numeroFrentes, (lateralCalculado1 - 10), (alturaCalculada1));
}

