const enumOk = require("../../utils/enumOk");
const Car = require("../models/Car.model");
const Company = require("../models/Company.model");
const User = require("../models/User.model");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */

//CRUD ---> CREATE (post) , READ (get), UPDATE (put, patch), DELETE (delete)
//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------

const create = async (req, res, next) => {
  // Capturar la URL de la imagen que se sube a Cloudinary
  let catchImg = req.file?.path;

  try {
    // Actualizar los índices de la colección Car
    await Car.syncIndexes();

    // Instanciar un nuevo objeto Car con los datos recibidos en la solicitud
    const newCar = new Car(req.body);

    // Verificar si se recibió una imagen y asignar la URL al campo image del nuevo objeto Car
    if (req.file) {
      newCar.image = catchImg;
    } else {
      // Si no se recibió una imagen, asignar una imagen por defecto
      newCar.image = "https://res.cloudinary.com/dsurhcayl/image/upload/v1710525755/NoImage_ulnz0i.jpg";
    }

    try {
      // Guardar la instancia del nuevo objeto Car en la base de datos
      const saveCar = await newCar.save();

      // Verificar si se guardó correctamente y enviar una respuesta adecuada
      if (saveCar) {
        return res.status(200).json(saveCar); // Devolver el objeto guardado con código de estado 200
      } else {
        return res.status(404).json("No se ha podido guardar el elemento en la DB ❌"); // Mensaje de error si no se guardó correctamente
      }
    } catch (error) {
      return res.status(404).json("Error al guardar el coche en la base de datos"); // Error al guardar el coche en la base de datos
    }
  } catch (error) {
    // Si hubo un error, borrar la imagen en Cloudinary (si existe)
    req.file?.path && deleteImgCloudinary(catchImg);

    // Devolver el error y mensaje correspondiente
    return res.status(404).json({
      messege: "Error en la creación del elemento",
      error: error,
    }) && next(error);
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------get by id --------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const carById = await Car.findById(id);
    if (carById) {
      return res.status(200).json(carById);
    } else {
      return res.status(404).json("no se ha encontrado el car");
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
//! ---------------------------------------------------------------------
//? -------------------------------get all ------------------------------
//! ---------------------------------------------------------------------

const getAll = async (req, res, next) => {
  try {
    const allCars = await Car.find().populate("companys");
    /** el find nos devuelve un array */
    if (allCars.length > 0) {
      return res.status(200).json(allCars);
    } else {
      return res.status(404).json("no se han encontrado cars");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar - lanzado en el catch",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------get by name --------------------------
//! ---------------------------------------------------------------------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    /// nos devuelve un array de elementos
    const carByName = await Car.find({ name });
    if (carByName.length > 0) {
      return res.status(200).json(carByName);
    } else {
      return res.status(404).json("no se ha encontrado");
    }
  } catch (error) {
    return res.status(404).json({
      error: "error al buscar por nombre capturado en el catch",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------UPDATE -------------------------------
//! ---------------------------------------------------------------------

const update = async (req, res, next) => {
  await Car.syncIndexes();
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;
    const carById = await Car.findById(id);
    if (carById) {
      const oldImg = carById.image;

      const customBody = {
        _id: carById._id,
        image: req.file?.path ? catchImg : oldImg,
        name: req.body?.name ? req.body?.name : carById.name,
      };

      if (req.body?.fuel || req.body?.type) {
        const resultEnum = enumOk(req.body?.fuel, req.body?.type);
        customBody.fuel = resultEnum.check
          ? req.body?.fuel
          : carById.fuel;
          customBody.type = resultEnum.check
          ? req.body?.type
          : carById.type;
      }

      try {
        await Car.findByIdAndUpdate(id, customBody);
        if (req.file?.path) {
          deleteImgCloudinary(oldImg);
        }

        //** ------------------------------------------------------------------- */
        //** VAMOS A TESTEAR EN TIEMPO REAL QUE ESTO SE HAYA HECHO CORRECTAMENTE */
        //** ------------------------------------------------------------------- */

        // ......> VAMOS A BUSCAR EL ELEMENTO ACTUALIZADO POR ID

        const carByIdUpdate = await Car.findById(id);

        // ......> me cojer el req.body y vamos a sacarle las claves para saber que elementos nos ha dicho de actualizar
        const elementUpdate = Object.keys(req.body);

        /** vamos a hacer un objeto vacion donde meteremos los test */

        let test = {};

        /** vamos a recorrer las claves del body y vamos a crear un objeto con los test */

        elementUpdate.forEach((item) => {
          if (req.body[item] === carByIdUpdate[item]) {
            test[item] = true;
          } else {
            test[item] = false;
          }
        });

        if (catchImg) {
          carByIdUpdate.image === catchImg
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }

        /** vamos a ver que no haya ningun false. Si hay un false lanzamos un 404,
         * si no hay ningun false entonces lanzamos un 200 porque todo esta correcte
         */

        let acc = 0;
        for (clave in test) {
          test[clave] == false && acc++;
        }

        if (acc > 0) {
          return res.status(404).json({
            dataTest: test,
            update: false,
          });
        } else {
          return res.status(200).json({
            dataTest: test,
            update: true,
          });
        }
      } catch (error) {}
    } else {
      return res.status(404).json("este car no existe");
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------DELETE -------------------------------
//! ---------------------------------------------------------------------

const deleteCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndDelete(id);
    if (car) {
      // lo buscamos para vr si sigue existiendo o no
      const finByIdCar = await Car.findById(id);

      try {
        const test = await Company.updateMany(
          { cars: id },
          { $pull: { cars: id } }
        );
        console.log(test);

        try {
          await User.updateMany(
            { carsFav: id },
            { $pull: { carsFav: id } }
          );

          return res.status(finByIdCar ? 404 : 200).json({
            deleteTest: finByIdCar ? false : true,
          });
        } catch (error) {
          return res.status(404).json({
            error: "error catch update User",
            message: error.message,
          });
        }
      } catch (error) {
        return res.status(404).json({
          error: "error catch update Company",
          message: error.message,
        });
      }
    }
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

module.exports = {
  create,
  getById,
  getAll,
  getByName,
  update,
  deleteCar,
};
