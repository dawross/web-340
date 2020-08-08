/*
============================================
; Title: Exercise 1.3
; Author: Dan Ross
; Date: 8 August 2020
; Description: Modules
;===========================================
*/

var url = require("url");
var parsedURL = url.parse("https://www.bellevue.edu/?name=ross");
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
