/*
============================================
; Title: Assignment 5.4
; Author: Dan Ross
; Date: 6 September 2020
; Description: EMS
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Assignment 5.4"));
console.log("");
//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var mongoose = require("mongoose");
var Employee = require('./models/employee');

//initialize express
var app = express();


// mLab connection
var mongoDB = "mongodb+srv://admin:6553rush@buwebdev-cluster-1.cnaxx.mongodb.net/test";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function(){
    console.log("Application connected to mLab MongoDB instance");
});

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//use statements
app.use(express.static(__dirname + '/public'));
app.use(logger("short"));
app.use(helmet.xssFilter());
// http calls
app.get("/", function(req, res){
    res.render("index", {
        title: "Home Page"
    });
});

//model
var employee  = new Employee({
    firstName: "Dan",
    lastName: "Ross"
})


// create/start Node server
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!")
});