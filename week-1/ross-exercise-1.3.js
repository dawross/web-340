/*
============================================
; Title: Exercise 1.3
; Author: Dan Ross
; Date: 8 August 2020
; Description: Modules
;===========================================
*/
//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 3.2"));
console.log("");
var url = require("url");
var parsedURL = url.parse("https://www.bellevue.edu/?name=ross");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
