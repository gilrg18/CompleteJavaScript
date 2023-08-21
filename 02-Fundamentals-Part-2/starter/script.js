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
