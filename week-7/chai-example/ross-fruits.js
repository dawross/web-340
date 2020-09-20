/*
============================================
; Title: Exercise 7.3
; Author: Dan Ross
; Date: 19 September 2020
; Description: Chai Example
;===========================================
*/

//Imports the ross-header.js file from the root directory
const header = require("../../ross-header.js");

// output header
console.log(header.display("Dan", "Ross", "Exercise 7.3"));
console.log("");

function fruits(str) {
  return str.split(",");
}
module.exports = fruits;
