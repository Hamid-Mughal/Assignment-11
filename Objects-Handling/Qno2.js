// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the
// object before or after deleting the property.
// Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 14 };

console.log(student);
delete student.rollno;
console.log(student);