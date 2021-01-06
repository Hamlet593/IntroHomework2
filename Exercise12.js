Exercise 12

Write a program which will compute the area of a rectangular or a triangle after prompting the user to type the name of the figure name. Also check that entered numbers are positive.
For the triangle entered numbers are height and and base.

Solution 12

var a = prompt("Type name of figure");
var b = prompt("Type first size");
var c = prompt("Type second size");
if(a === "triangle" && b > 0 && c > 0){
  console.log("Square of triangle is " + (b * c / 2));
}
else if(a === "rectangle" && b > 0 && c > 0){
  console.log("Square of rectnagular is " + (b * c));
}
else{
  console.log("Please enter only positives");
}