const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoAtlasConnection = require('./db');
mongoAtlasConnection();
const routesController = require('./RoutesController/todos')
app.use(bodyParser.json())
app.use("/todoparent",routesController)

/*app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})*/


/*app.get("/test",function(req,res){
    res.send("Hello World")

})*/


app.listen(8001)