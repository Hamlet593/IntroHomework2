Homework 2

Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

Solution 2

var a = 3;
var b = 14;
if(a % b === 0){
  console.log(1);
}
else if(b % a === 0) {
  console.log(1);
}
else {
  console.log(0);
}

/*ամեն անգամ լուծման տարբեր ձևեր եմ օգտագործում*/

var a = 18;
var b = 2;
switch (a % b === 0 || b % a === 0){
  case true:
    console.log(1);
    break;
  default:
    console.log(0);
}

/*ամեն անգամ լուծման տարբեր ձևեր եմ օգտագործում*/

var a = 7;
var b = 21;
if(a % b === 0 || b % a === 0) {
  console.log(1);
}
else{
  console.log(0);
}


/*ամեն անգամ լուծման տարբեր ձևեր եմ օգտագործում*/

var a = 7;
var b = 21;
switch (a % b == 0 || b % a == 0){
  case true:
    console.log("yes");
    break;
  default:
    console.log("no");
}

/*ամեն անգամ լուծման տարբեր ձևեր եմ օգտագործում*/

var x = 3;
var y = 12;
var res = x % y === 0 || y % x === 0 ? 1 : 0;
console.log(res);