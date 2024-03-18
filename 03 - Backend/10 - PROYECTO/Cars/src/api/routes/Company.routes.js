const {
  createCompany,
  toggleCar,
  deleteCompany
} = require("../controllers/Company.controllers");

const CompanyRoutes = require("express").Router();

CompanyRoutes.post("/", createCompany);
CompanyRoutes.patch("/add/:id", toggleCar);
CompanyRoutes.delete("/:id", deleteCompany);
module.exports = CompanyRoutes;
