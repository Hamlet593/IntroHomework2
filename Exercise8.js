Homework 8

Input three numbers  a,   b,   c  respectively,
where a is a non zero number and write a program to solve quadratic equations: ax2 +  bx + c = 0 .  (Hint: use Math.pow or Math.sqrt).

Solution 8

var a = 5;
var b = -13;
var c = 6;
var discr = (b * b) - (4 * a * c);
var sol1;
var sol2;
if(a === 0){
  console.log("Enter valid constants");
}
else if(discr < 0){
  console.log("Solution does not exist");
}
else if (discr > 0){
  sol1 = ((- b - Math.sqrt(discr)) / (2 * a));
  sol2 = ((- b + Math.sqrt(discr)) / (2 * a));
  console.log("solutions are " + sol1 + " and " + sol2);
}
else if(discr === 0){
  sol1 = sol2 = - b / 2 * a;
  console.log("Solution is " + sol1);
}
