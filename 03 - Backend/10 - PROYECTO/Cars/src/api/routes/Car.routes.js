const { upload } = require("../../middleware/files.middleware");
const {
  create,
  getById,
  getAll,
  getByName,
  update,
  deleteCar,
} = require("../controllers/Car.controllers");

const CarRoutes = require("express").Router();

CarRoutes.post("/", upload.single("image"), create);
CarRoutes.get("/:id", getById);
CarRoutes.get("/", getAll);
CarRoutes.get("/byName/:name", getByName);
CarRoutes.patch("/:id", upload.single("image"), update);
CarRoutes.delete("/:id", deleteCar);

module.exports = CarRoutes;
