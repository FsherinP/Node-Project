const { createEmployee, getAllEmployee } = require("../model/EmployeeModel");

module.exports = {
    createEmployee: (req, res) => {
        var data, response;
        console.log("Controller - create employee");
        if(req.get("Content-Type") != "application/json") {
            console.log("header");
            response = {status: 401, error: "Invalid header !"};
            return res.status(response.status).json(response);
        }
        try {
            console.log("try");
            data = req.body;
            createEmployee(data, res); 
        } catch (err) {
            console.log("catch");
            response = {status: 401, error: "Invalid json format !"};
            return res.status(response.status).json(response);
        }
    },

    listAllEmployees: (req, res) => {
        console.log("Controller - list employee");
        getAllEmployee((err, results) => {
            if(err) {
                return res.json({
                    success: 0,
                    error: err, 
                });
            }
            return res.json({
                success: 1,
                data: results,
            });
        });
    }

}