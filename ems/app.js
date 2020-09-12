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

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs")
app.use(logger("short"));

app.get("/", function(req, res){
    res.render("index", {
        title: "Home Page"
    });
});
http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!")
});