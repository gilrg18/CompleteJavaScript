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

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

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

//ARROW FUNCTIONS
//This is also a function expression
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1996, "Gil"));
// console.log(yearsUntilRetirement(1994, "Maik"));

//FUNCTIONS CALLING OTHER FUNCTIONS
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  //console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//REVIEWING FUNCTIONS
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    return retirement;
  }
  return -1;
};

console.log(yearsUntilRetirement(1996, "Gil"));
console.log(yearsUntilRetirement(1950, "Maik"));
//function declaration function calcAge(asd){...}
//can be used before its declared

//function expression const calcage = function (asd){...}
//a function VALUE stored in a variable

//Arrow function const calcage = asd => ...
//great for one line functions. has no THIS keyword (more later..)
