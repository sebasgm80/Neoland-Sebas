// Importacion de finciones
const { upload } = require("../../middleware/files.middleware");
const {
    create,
    getById,
    getAll,
    getByName,
    update,
    deleteCharacter
} = require("../controllers/Character.controllers");

// Importacion de routes
const CharacterRoutes = require("express").Router();

// Entre la ruta y la funcion del controlador (create) está el middleware de la subida (upload) de files de cloudinary
// Upload tiene un método single que lo que hace es subir una imagen en concreto y lo sube con la clave image que es clave del modelo
// lo que hace es que en el body recibe una clave que se llama image y en esa clave el middleware upload lo sube a cloudinary
// nos devuelve el path de ese file subido (la url de la imagen de cloudinary =  req.file.path)

// Hacemos la ruta con el metodo, el endpoint y la funcion que queramos ejecutar en la ruta >>> extra upload de cloudinary
CharacterRoutes.post("/", upload.single("image"), create);
CharacterRoutes.get("/:id", getById);
CharacterRoutes.get("/", getAll);
CharacterRoutes.get("/byName/:name", getByName);
CharacterRoutes.patch("/:id", upload.single("image"), update);
CharacterRoutes.delete("/:id", deleteCharacter);

// Exportacion
module.exports = CharacterRoutes;
