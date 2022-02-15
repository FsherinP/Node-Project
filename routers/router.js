const express = require("express");
const router = express.Router();

var { createEmployee, listAllEmployees } = require("../controller/EmployeeController")

router.post("/employee", createEmployee);
router.get("/employee", listAllEmployees);

module.exports = router;