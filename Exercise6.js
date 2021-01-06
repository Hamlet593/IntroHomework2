Homework 6

Given three numbers. Sort them by the ascending order.

Solution 6

var a = 45;
var b = 26;
var c = 78;
if(a < b && b < c){
  console.log(a, b, c);
}
else if(a < c && a < b){
  console.log(a, c, b);
}
else if(b < a && b < c){
  console.log(b, a, c);
}
else if(b < c && c < a){
  console.log(b, c, a);
}
else if(c < a && a < b){
  console.log(c, a, b);
}
else {
  console.log(c, b, a);
}

var a = -23;
var b = -456;
var c = 0;
if(a < b && b < c){
  console.log(a, b, c);
}
else if(a < c && a < b){
  console.log(a, c, b);
}
else if(b < a && b < c){
  console.log(b, a, c);
}
else if(b < c && c < a){
  console.log(b, c, a);
}
else if(c < a && a < b){
  console.log(c, a, b);
}
else {
  console.log(c, b, a);
}

or

var a = 85;
var b = 26;
var c = 78;
switch(a > b && b > c){
  case true:
   console.log(a, b, c);
    break;
  default:
    switch(b > c && c > a) {
      case true:
        console.log(b,c,a);
        break;
      default:
        switch(c > a && a > b){
          case true:
            console.log(b, a, c);
            break;
          default:
            console.log(b,c,a);
        }
    }
}