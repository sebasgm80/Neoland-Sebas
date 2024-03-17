//! --------- nos requerimos mongoose---
const mongoose = require("mongoose");

//! ----------nos traemos de mongoose la parte de los esquemas de datos

const Schema = mongoose.Schema;

//! --------- creamos los esquemas de datos

// Definir el modelo de datos:
// ------------> Le damos a cada clave del objeto el Type (tipo de dato)
// ------------> definimos otras propiedades que limitan la informacion que se puede incluir en esa clave
// ------------> que sea requerido, una longitud maxima y minima, etc etc

const CarSchema = new Schema(
  {
    name: { type: String, required: false, unique: false },
    type: {
      type: String,
      enum: ["urbano", "sedan", "suv", "coupe", "deportivo", "pickup", "furgoneta", "monovolumen"],
      required: false,
    },
    fuel: {
      type: String,
      enum: ["gasolina", "diesel", "electrico", "hibrido"],
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
    companys: [{ type: mongoose.Schema.Types.ObjectId, ref: "Companys" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

//! -------- con la definicion de datos y su esquema vamos a crear el modelo de datos

const Car = mongoose.model("Car", CarSchema);

//! -------- exportar el modelo para que lo utilicen los controladores

module.exports = Car;
