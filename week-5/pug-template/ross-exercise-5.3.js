/*
============================================
; Title: Exercise 5.3
; Author: Dan Ross
; Date: 5 September 2020
; Description: Pug Templates
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 5.3"));
console.log("");

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");
app.get("/", function(req, res){
    res.render("index", {
        message:"Dan Ross is testing the Pug template!"
    });
});
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!")
});

