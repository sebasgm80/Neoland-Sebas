const {
  createCompany,
  toggleCar,
} = require("../controllers/Company.controllers");

const CompanyRoutes = require("express").Router();

CompanyRoutes.post("/", createCompany);
CompanyRoutes.patch("/add/:id", toggleCar);
module.exports = CompanyRoutes;
