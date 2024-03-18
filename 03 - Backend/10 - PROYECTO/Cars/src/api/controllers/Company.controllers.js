const Car = require("../models/Car.model");
const Company = require("../models/Company.model");

/**+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 * ++++++++++++++++++++++++++-------C R U D--------+++++++++++++++++++++++++++++++++++
 * +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 */
//! ---------------------------------------------------------------------
//? -------------------------------POST create --------------------------
//! ---------------------------------------------------------------------

const createCompany = async (req, res, next) => {
  try {
    await Company.syncIndexes();

    /** hacemos una instancia del modelo  */
    const customBody = {
      name: req.body?.name,
      year: req.body?.year,
    };
    const newCompany = new Company(customBody);
    const savedCompany = await newCompany.save();

    // test en el runtime
    return res
      .status(savedCompany ? 200 : 404)
      .json(savedCompany ? savedCompany : "error al crear la compañía");
  } catch (error) {
    return res.status(404).json({
      error: "error catch create company",
      message: error.message,
    });
  }
};

//! ---------------------------------------------------------------------
//? ----------------------------add o delete un car  --------------
//! ---------------------------------------------------------------------

/// aqui metemos los coches en el array del modelo de company
const toggleCar = async (req, res, next) => {
  try {
    /** estee id es el id de la company que queremos actualizar */
    const { id } = req.params;
    const { cars } = req.body; // -----> idDeLosCars enviaremos esto por el req.body "12412242253,12535222232,12523266346"
    /** Buscamos la compañía por id para saber si existe */
    const companyById = await Company.findById(id);

    /** vamos a hacer un condicional para si existe hacer la actualización sino mandamos un 404 */
    if (companyById) {
      /** cargamos el string que traemos del body y lo convertimos en un array
       * separando las posiciones donde en el string había una coma
       * se hace mediante el método split
       */
      const arrayIdCars = cars.split(",");

      /** recorremos este array que hemos creado y vemos si tenemos que:
       * 1) ----> sacar el coche si ya lo tenemos en el back
       * 2) ----> meterlo en caso de que no lo tengamos metido en el back
       */
      Promise.all(
        arrayIdCars.map(async (car, index) => {
          if (companyById.cars.includes(car)) {
            //*************************************************************************** */

            //________ BORRAR DEL ARRAY DE COCHES EL COCHE DENTRO DE LA COMPAÑÍA___

            //*************************************************************************** */

            try {
              await Company.findByIdAndUpdate(id, {
                // dentro de la clave cars me vas a sacar el id del elemento que estoy recorriendo
                $pull: { cars: car },
              });

              try {
                await Car.findByIdAndUpdate(car, {
                  $pull: { companys: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update car",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update company",
                message: error.message,
              }) && next(error);
            }
          } else {
            //*************************************************************************** */
            //________ METER EL COCHE EN EL ARRAY DE COCHES DE LA COMPAÑÍA_____________
            //*************************************************************************** */
            /** si no lo incluye lo tenemos que meter -------> $push */

            try {
              await Company.findByIdAndUpdate(id, {
                $push: { cars: car },
              });
              try {
                await Car.findByIdAndUpdate(car, {
                  $push: { companys: id },
                });
              } catch (error) {
                res.status(404).json({
                  error: "error update car",
                  message: error.message,
                }) && next(error);
              }
            } catch (error) {
              res.status(404).json({
                error: "error update company",
                message: error.message,
              }) && next(error);
            }
          }
        })
      )
        .catch((error) => res.status(404).json(error.message))
        .then(async () => {
          return res.status(200).json({
            dataUpdate: await Company.findById(id).populate("cars"),
          });
        });
    } else {
      return res.status(404).json("esta compañía no existe");
    }
  } catch (error) {
    return (
      res.status(404).json({
        error: "error catch",
        message: error.message,
      }) && next(error)
    );
  }
};

const deleteCompany = async (req, res, next) => {
  try {
    // Se extrae el ID de la compañía de los parámetros de la solicitud
    const { id } = req.params;
    
    // Se intenta eliminar la compañía utilizando el método findByIdAndDelete de Mongoose
    const deletedCompany = await Company.findByIdAndDelete(id);
    
    // Si la compañía se elimina con éxito, se devuelve un mensaje indicando que se ha eliminado correctamente junto con los datos de la compañía eliminada
    if (deletedCompany) {
      return res.status(200).json({ message: "La compañía se ha eliminado correctamente", deletedCompany });
    } else {
      // Si la compañía no existe, se devuelve un mensaje indicando que la compañía no existe
      return res.status(404).json({ message: "La compañía no existe" });
    }
  } catch (error) {
    // Si ocurre algún error durante el proceso de eliminación, se devuelve un mensaje de error con el código de estado 500
    return res.status(500).json({
      error: "Error al eliminar la compañía",
      message: error.message,
    });
  }
};


module.exports = { createCompany, toggleCar, deleteCompany };
