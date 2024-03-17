const enumOk = (fuel, type) => {
  const enumFuel = ["gasolina", "diesel", "electrico", "hibrido"];
  const enumType = ["urbano", "sedan", "suv", "coupe", "deportivo", "pickup", "furgoneta", "monovolumen"];

  if (type === "fuel") {
    if (enumFuel.includes(fuel)) {
      console.log("entro en el true");
      return { check: true, fuel };
    } else {
      return {
        check: false,
      };
    }
  } else if (type === "type") {
    if (enumType.includes(fuel)) {
      console.log("entro en el true");
      return { check: true, type: fuel };
    } else {
      return {
        check: false,
      };
    }
  } else {
    return {
      check: false,
      message: "Tipo no válido",
    };
  }
};

module.exports = enumOk;
