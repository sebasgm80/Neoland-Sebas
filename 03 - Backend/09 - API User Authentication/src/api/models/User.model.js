// Importaciones de librerias

const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("mongoose");

// Creamos nuevo esquema de datos para el user

const userSchema = new mongoose.Schema(
    // Definicion de datos y tipos de datos para el user
    {
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            validate: [validator.isEmail, "Email inválido"],
            // En caso de no ser un email valido
            // Mandamos un error
        },
        name: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
            validate: [validator.isStrongPassword]
        },
        gender: {
            type: String,
            enum: ["hombre", "mujer", "otros"],
            required: true,
        },
        rol: {
            type: String,
            enum: ["admin", "user", "superadmin"],
        },
        confirmationCode: {
            type: String,
            required: true,
        },
        check: {
            type: Boolean,
            default: false,
        },
        image: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

// Funcion para encriptar la contraseña y guardar el modelo
// La funcion no sera un arrow, serra normal para manegarla con el this
// Hacemos la funcion de presave para guardar el codigo antes de crear el esquema de datos

userSchema.pre("save", async function (next) {
    try {
        // Encriptamos la contraseña
        // Le decimos que encripte la contraseña 10 vueltas
        // Guardamos el modelo o lanza un error
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next("error en el hash de la contraseña", error);
    }
});

// Creamos el modelo de datos del user

const User = mongoose.model("User", userSchema);

// Exportamos el modelo

module.exports = User;
