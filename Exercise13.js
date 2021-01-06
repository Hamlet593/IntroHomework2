Homework 13

(***) Enter a number. Find the difference between its biggest and smallest digits.

Solution 13

var a = 5;
var max = Math.max(a);
var min = Math.min(a);
console.log(max - min);

var a = 152;
var b = a % 10; /*b=2*/
var c = ((a - b) / 10) % 10;/*c=5*/
var d = (a - (a % 100)) / 100;/*d=1*/
var max = Math.max(b,c,d);
var min = Math.min(b,c,d);
console.log(max - min);

var a = 4593653;
var b = a % 10; /*b=3*/
var c = ((a - b) / 10) % 10; /*b=5*/
var d = ((a - (a % 100)) / 100) % 10; /*d=6*/
var e = ((a - (a % 1000)) / 1000) % 10; /*e=3*/
var f = ((a - (a % 10000)) / 10000) % 10; /*f=9*/
var g = ((a - (a % 100000)) / 100000) % 10; /*g=5*/
var h = (((a - (a % 100000)) / 100000) - g) / 10; /*h=4*/
var max = Math.max(b,c,d,e,f,g,h);
var min = Math.min(b,c,d,e,f,g,h);
console.log(max-min);