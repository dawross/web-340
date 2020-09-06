/*
============================================
; Title: Exercise 5.2
; Author: Dan Ross
; Date: 5 September 2020
; Description: EJS Templates
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 5.2"));
console.log("");

var express = require("express");
var http = require("http");
var path = require("path");
const { response } = require("express");
app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
var tool = [
    "Danny",
    "Maynard",
    "Adam",
    "Justin"
];
app.get("/", function(req, res){
    res.render("index", {
        names: tool
    });
});
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});