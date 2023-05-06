// 3. Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 14 };

const length = Object.keys(student).length; // get the length of keys in object

console.log(length); // output: 3