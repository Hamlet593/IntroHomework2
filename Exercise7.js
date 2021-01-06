Homework 7

Find the sign of product of three numbers  without  multiplication operator. Display the specified sign.

Solution 7

var a = -14;
var b = 5;
var c = 0;
if(a > 0 && b > 0 && c > 0){
  console.log("+");
}
else if(a > 0 && b > 0 && c< 0){
  console.log("-");
}
else if(a > 0 && b < 0 && c > 0){
  console.log("-");
}
else if(a > 0 && b < 0 && c < 0){
  console.log("+");
}
else if(a < 0 && b > 0 && c > 0){
  console.log("-");
}
else if(a < 0 && b > 0 && c < 0){
  console.log("+");
}
else if(a < 0 && b < 0 && c > 0){
  console.log("+");
}
else if(a < 0 && b < 0 && c < 0){
  console.log("-");
}
else if(a == 0 || b == 0 || c == 0){
  console.log("unsigned");
}

var a = -8;
var b = 9;
var c = -6;
if(a > 0 && b > 0 && c > 0){
  console.log("+");
}
else if(a > 0 && b > 0 && c< 0){
  console.log("-");
}
else if(a > 0 && b < 0 && c > 0){
  console.log("-");
}
else if(a > 0 && b < 0 && c < 0){
  console.log("+");
}
else if(a < 0 && b > 0 && c > 0){
  console.log("-");
}
else if(a < 0 && b > 0 && c < 0){
  console.log("+");
}
else if(a < 0 && b < 0 && c > 0){
  console.log("+");
}
else if(a < 0 && b < 0 && c < 0){
  console.log("-");
}
else if(a == 0 || b == 0 || c == 0){
  console.log("unsigned");
}

var a = 4;
var b = 19;
var c = -2;
if(a > 0 && b > 0 && c > 0){
  console.log("+");
}
else if(a > 0 && b > 0 && c< 0){
  console.log("-");
}
else if(a > 0 && b < 0 && c > 0){
  console.log("-");
}
else if(a > 0 && b < 0 && c < 0){
  console.log("+");
}
else if(a < 0 && b > 0 && c > 0){
  console.log("-");
}
else if(a < 0 && b > 0 && c < 0){
  console.log("+");
}
else if(a < 0 && b < 0 && c > 0){
  console.log("+");
}
else if(a < 0 && b < 0 && c < 0){
  console.log("-");
}
else if(a == 0 || b == 0 || c == 0){
  console.log("unsigned");
}