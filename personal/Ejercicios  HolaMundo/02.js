let resolucion = ["HD", "FHD", "WQHD", "4K", "8K"];

function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return resolucion[4];
    } else if (ancho >= 3840 && alto >= 2160) {
        return resolucion[3];
    } else if (ancho >= 2560 && alto >= 1140) {
        return resolucion[2];
    } else if (ancho >= 1920 && alto >= 1080) {
        return resolucion[1];
    } else if (ancho >= 1280 && alto >= 720) {
        return resolucion[0];
    } else {
        return "SD";
    }
}

let nombre = nombreResolucion(2000, 1250);
console.log(nombre);
