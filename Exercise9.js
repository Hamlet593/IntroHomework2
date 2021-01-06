Homework 9

Given the following code rewrite it using only two if  operators. (Hint: use logical operators).

var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0) {
if (!Math.floor(n / 10)) {
  i += 1;
  }
}

if (n % 3 === 0) {
  if (n % 10 === 1) {
    j += 1;
  }
}

Soultion 9

Ես կփոխեմ այսպես՝

var n = +prompt();

var i = 0;
var j = 0;

if (n % 2 === 0 && Math.floor(n / 10)) {
    console.log(i += 1;)
  }
if (n % 3 === 0 && n % 10 === 1) {
    console.log(j += 1);
  }