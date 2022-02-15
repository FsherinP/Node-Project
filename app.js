// var express = require("express");
// var app = express();
// app.use(express.json);
// app.use(express.static("public"));
// const route = require("./routers/router");

// const con = require("./middlewares/db.connect");

// con.getConnection(function(err) {
//     if(err) throw err;
//     console.log("Databse is connected !");
// });

// app.use(route);

// app.use(express.urlencoded({
//     extended: true
// }));

// app.get("/", function(req, res) {
//     res.send(
//         "Welcome to sample nodejs project" + con.config.connectionConfig.host
//     );
// });

// app.server = app.listen(
//     process.env.APP_PORT,
//     process.env.APP_ADDRESS,
//     function(){
//         var host = server.address().address;
//         var port = server.address().port;
//         console.log("Listening at http://%s:%s", host, port);
//     },
// );


var express = require("express");
var app = express();
// require("./config");
const routes = require("./routers/router");
app.use(express.json());
app.use(express.static("public"));


const con = require("./middlewares/db.connect");

con.getConnection(function (err) {
  if (err) throw err;
  console.log("Database is connected...");
});
var cors = require('cors')
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // For legacy browser support
}
// app.use(bodyParser.json)
app.use(express.urlencoded({
  extended: true
}));

app.use(cors(corsOptions));
app.use(routes);


app.get("/", function (req, res) {
  res.send(
    "Welcome to System console... <br>Host: " +
      con.config.connectionConfig.host +
      "<br>Port: " +
      con.config.connectionConfig.port +
      "<br>Database: " +
      con.config.connectionConfig.database +
      "<br>User: " +
      con.config.connectionConfig.user
  );
});


var server = app.listen(
  // global.env.APP_DEV_CONSOLE_PORT,
  process.env.APP_PORT,
  process.env.APP_ADDRESS,
  function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("System console: listening at http://%s:%s", host, port);
  }
);


