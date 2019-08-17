var http = require("http");
var express = require('express');
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var app = express();
const route=require("./routes/route")
//var connection=require("./utils/connection")
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use("/",route)
var server = app.listen(3000,  "localhost",  ()=> {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
});
console.log("restapi mysql example....")

