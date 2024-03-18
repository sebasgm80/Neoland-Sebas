const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Definición del esquema de Company
const CompanySchema = new Schema(
  {
    name: { type: String, required: true, unique: true }, // Nombre de la compañía (requerido y único)
    year: { type: Number, required: true }, // Año de fundación de la compañía (requerido)
    image: { type: String, required: false }, // URL de la imagen de la compañía (requerida)
    cars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }], // Referencia a los coches asociados a la compañía
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Referencia a los usuarios que han dado like a la compañía
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }] // Referencia a los comentarios asociados a la compañía
  },
  {
    timestamps: true, // Habilita los campos de createdAt y updatedAt automáticamente
  }
);

// Creación del modelo Company a partir del esquema definido
const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
