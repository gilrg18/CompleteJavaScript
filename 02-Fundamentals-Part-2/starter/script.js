"use strict";

let hasDriversLicense = false;
const passTest = true;

//if we dont use strict mode hasDriverLicense will not throw an error
//and just fail silently
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//strict mode reserved word 'interface'
//const interface = "audio";

//FUNCTIONS
function logger() {
  console.log("GG WP");
}
//calling/running/invoking function
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProcessor(1, 2));
let appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const num = Number("23");

//FUNCTION DECLARATIONS VS FUNCTION EXPRESSIONS

//Declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}

console.log(calcAge1(1996));
const age1 = calcAge1(1996);

//Expression
//function without a name is an anonymous function
//expressions produce values
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age1, age2);

//you can call function declarations BEFORE they are declared (hoisting)
//you cant do that with function expressions
