Homework 10

Insert a digit and a number. Check whether the digits contains in the number or not.

Solutiion 10

var a = 5;
var b = 2463;
var c = b % 10; /*c=3*/
var d = ((b - c) / 10) % 10; /*d=6*/
var e = (((b-(b % 100)) / 100)) % 10; /*e=4*/
var z = (((b - (b % 100)) / 100) - e) / 10; /*z=2*/
if(a == c || a == d || a == e || a == z){
  console.log("yes");
}
else{
console.log("no");
}

var a = 4;
var b = 6;
var c = b % 10;
var d = ((b - c) / 10) % 10;
var e = (((b-(b % 100)) / 100)) % 10;
var z = (((b - (b % 100)) / 100) - e) / 10;
if(a == b || a == c || a == d || a == e || a == z){
  console.log("yes");
}
else{
console.log("no");
}

var a = 8;
var b = 45689;
var c = b % 10; /*c=9*/
var d = ((b - c) / 10) % 10; /*d=8*/
var e = (((b-(b % 100)) / 100)) % 10; /*e=6*/
var f = (((b-(b % 1000)) / 1000)) % 10; /*e=5*/
var z = (((b - (b % 1000)) / 1000) - f) / 10; /*z=4*/
if ( a == b || a == c || a == d || a == e || a == f || a == z){
console.log("yes");
}
else{
  console.log("no");
}

or

var a = 123;
var b = 3;
var c = a % 10;/*3*/
var d = ((a - c) / 10) % 10;/*2*/
var e = (((a - c) / 10) - d) / 10;/*1*/
var res = b == c || b == d || b == e ? "number is " + b : "Համընկնող թիվ չկա";
console.log(res);

or

var a = 123;
var b = 2;
var c = a % 10;/*3*/
var d = ((a - c) / 10) % 10;/*2*/
var e = (((a - c) / 10) - d) / 10;/*1*/
switch(b == c){
  case true:
    console.log("number is " + c);
    break;
  default:
    switch(b == d){
  case true:
    console.log("number is " + d);
    break;
      default:
        switch(b == e){
            case true:
            console.log("number is " + e);
            break;
          default:
            console.log("Սաղ թվերդ սխալ են");
        }
    }
}