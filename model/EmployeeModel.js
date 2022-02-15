const con = require("../middlewares/db.connect");

module.exports ={
    createEmployee: (data, res) => {
        console.log("Model - create employee");
        try{
            var sql = 
            "INSERT INTO employee ( \
                name \
                ) VALUES ?";
            var values = [[data.name]];
            console.log("after sql");
            con.query(sql, [values], function(err, result){
                console.log("inside con");
                if(err){
                    console.log(err);
                    response = {status: 401, error: "Invalid header !"};
                    return res.status(response.status).json(response);
                }
                 response = {
                    status: 200,
                    message: "Employee added succesfully",
                    name: data.name
                 }
                return res.status(response.status).json(response);
            })
        } catch (err) {
            response = { status: 400, error: err, name: "data error" };
            return res.status(response.status).json(response);
        }
    },

    getAllEmployee: (callback) => {
        console.log("Model - list employee");
            var sql = 
            "SELECT * FROM employee";
            con.query(sql,[], function(err, result){
                if(err){
                    callback(err);
                }
                return callback(null, result);
            })
    }
}