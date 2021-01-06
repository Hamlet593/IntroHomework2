Homework 4

Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the last digit of the inserted number is 0, number remains the same.

Solution 4

function beginning(n){
  if(n < 9 || n % 10 === 0){
    return n;
  }
  else{
  let lastDigit = n % 10;
  n = (n - lastDigit) / 10;
  n = "" + lastDigit + n;
  return +n;
}
}
console.log(beginning(251))