Homework 3

Given number n (positive integer). Print the value of  n + nn + nnn (not multiplication).

Solution

function value(n){
  return +("" + n + (n + n) + (n + n + n));
}
console.log(value(100))