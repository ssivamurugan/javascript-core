// String to number conversion

let strNum1 = '123';
let strNum2 = '123num';
let strNum3 = ' 123num';
let strNum4 = ' 1 2 3num';

console.log(Number(strNum1));

/* 
Use parseInt() Instead of Number() 
it produce NaN in the combination 
of number with string
*/
console.log(Number(strNum2)); 

console.log(parseInt(strNum2));

// It avoid first space and string
console.log(parseInt(strNum3));

// It avoids first space only and display first number
console.log(parseInt(strNum4));

// Boolean to Number conversion

let bl1 = true // 1 means 'true'
let bl2 = false // 0 means 'false'

console.log(Number(bl1));
console.log(Number(bl2));

// Number to String conversion

let num = 123;

console.log(String(num));

// Boolean to String conversion

let str1 = true;
let str2 = false;

console.log(String(str1));
console.log(String(str2));

