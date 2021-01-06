Homework 11

Enter a number. Reverse its first and last digits. Print the new number.

Solution 11

var b = 895796;
var c = b % 10; /*c=6*/
var d = ((b - c) / 10) % 10; /*d=9*/
var e = (((b-(b % 100)) / 100)) % 10; /*e=7*/
var f = (((b-(b % 1000)) / 1000)) % 10; /*f=5*/
var g = (((b-(b % 10000)) / 10000)) % 10; /*g=9*/
var z = (((b - (b % 10000)) / 10000) - g) / 10; /*z=8*/
if (b < 9){ /*այս պայմանը գրել եմ, որպեսզի 11-րդ խնդրի երրորդ և առաջին օրինակներն միանգամից այս մի կոդով լուծեմ:
	Այսինքն b = 2 որ տեղադրեմ՝var b = 895796;-ի փոխարեն,դարձյալ այս մի կոդը լինի*/
  console.log(b);
}
else{
console.log(+('' + c + g + f + e + d + z));
}

var b = 2;
var c = b % 10; /*c=6*/
var d = ((b - c) / 10) % 10; /*d=9*/
var e = (((b-(b % 100)) / 100)) % 10; /*e=7*/
var f = (((b-(b % 1000)) / 1000)) % 10; /*f=5*/
var g = (((b-(b % 10000)) / 10000)) % 10; /*g=9*/
var z = (((b - (b % 10000)) / 10000) - g) / 10; /*z=8*/
var c1 = c.toString();
var d1 = d.toString();
var e1 = e.toString();
var f1 = f.toString();
var g1 = g.toString();
var z1 = z.toString();
if (b < 9){ /*այս պայմանը գրել եմ, որպեսզի 11-րդ խնդրի երրորդ և առաջին օրինակներն միանգամից այս մի կոդով լուծեմ:
	Այսինքն b = 2 որ տեղադրեմ՝var b = 895796;-ի փոխարեն,դարձյալ այս մի կոդը լինի*/
  console.log(b);
}
else{
console.log(c1 + g1 + f1 + e1 + d1 + z1);
}

Սա էլ երկրորդ օրինակը

var b = 13;
var c = b % 10; /*c=3*/
var d = ((b - c) / 10); /*d=1*/
console.log(+('' + c + d));