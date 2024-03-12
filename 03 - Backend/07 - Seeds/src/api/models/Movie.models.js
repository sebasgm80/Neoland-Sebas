// Traemos mongoose para gestionar la DB
const mongoose = require("mongoose");

// Creamos el esquema con la definicion de datos
const movieSchema = new mongoose.Schema(
    {
        title: { type: String},
        poster: { type: String},
        year: { type: Number},
        released: { type: Boolean},
    },
    {
        timestamps: true
    }
);

// Convertimos este esquema en datos de un modelo
const Movie = mongoose.model("Movie", movieSchema);

// Exportamos el modelo Movie para su uso en otros modulos
module.exports = Movie;