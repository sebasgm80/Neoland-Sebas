let colores = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];
colores.sort(function(a, b) {
    return b.toLowerCase().localeCompare(a.toLowerCase());
});
console.log(colores);