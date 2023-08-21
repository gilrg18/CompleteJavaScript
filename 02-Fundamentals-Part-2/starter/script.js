"use strict";

let hasDriversLicense = false;
const passTest = true;

//if we dont use strict mode hasDriverLicense will not throw an error
//and just fail silently
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//strict mode reserved word 'interface'
//const interface = "audio";
