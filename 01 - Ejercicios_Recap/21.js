function fruta(nombre, color, peso) {
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
}
let melon = new fruta("Melon", "Verde", 2.5)
let fresa = new fruta("Fresa", "Rojo", 0.10)
console.log(melon, fresa);