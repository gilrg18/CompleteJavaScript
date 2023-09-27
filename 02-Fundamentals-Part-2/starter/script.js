"use strict";

let hasDriversLicense = false;
const passTest = true;

//if we dont use strict mode hasDriverLicense will not throw an error
//and just fail silently (hasDriverLicense =! hasDriversLicense)
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

//INTRODUCTION TO ARRAY DATA STRUCTURE
const friend1 = "Mike";
const friend2 = "Steven";
const friend3 = "Pirer";

const friends = ["Mike", "Steven", "Pirer"];
console.log(friends);

const years = new Array(1991, 1992, 1993, 1994);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

//Only constant primitive values are immutable
//An ARRAY is not a primitive value so we can mutate it
friends[2] = "Jay";
console.log(friends);
//we cannot replace the entire array:
//friends = ['gil','mike']; //error assignment to constant variable
const lastName = "Rogel";
const gil = ["Gil", lastName, 2023 - 1996, "Programmer", friends];

console.log(gil);

const yearsArray = [1990, 1967, 2002, 2010, 2018];

const ageOne = calcAge(yearsArray[0]);
const ageTwo = calcAge(yearsArray[1]);
const ageThree = calcAge(yearsArray[2]);

console.log(ageOne, ageTwo, ageThree);
//arrays accept expressions (an expression is something that produces a value)
const ages = [calcAge(yearsArray[0]), calcAge(yearsArray[1])];
console.log(ages);

//BASIC ARRAY OPERATIONS (METHODS);
//Add elements
friends.push("jimmy"); //pushes value to the end of the array
//push() returns the length of the new array.
console.log(friends);

friends.unshift("hect"); //pushes value to the beggining of the array
console.log(friends);

//Remove elements
let popped = friends.pop(); //Remove and returns the last element
console.log(popped);
console.log(friends);

let shifted = friends.shift(); //removes and returns the first element
console.log(shifted);
console.log(friends);

//Index of an element (returns -1 if it doesnt exist)
console.log(friends.indexOf("Steven"));

//Is the element in the array?
console.log(friends.includes("Steven")); //true
console.log(friends.includes("Gil")); //false

//includes() Checks with strict equality
friends.push(23);
console.log(friends.includes("23")); //false
console.log(friends.includes(23)); //true

//CHALLENGE
const calcTip = function (bill) {
  return 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [];
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

const totals = [];
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

//INTRODUCTION TO OBJECTS (Data Structure)
const gilObject = {
  //key(property): value pairs
  //the order of these properties does not matter like in arrays
  firstName: "Gil",
  lastName: "Rangel",
  birthYear: 1996,
  job: "programmer",
  //this is a property that holds an array value
  friends: ["hek", "em", "pac"],
  //this is a property that holds a boolean value
  hasDriversLicense: true,
  //Objects functions are called methods
  //must use expressions:
  //this is a property that holds a function value
  // calcAge: function () {
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he has ${
      this.hasDriversLicense == true ? "a" : "no"
    } driver's license`;
  },
  //cannot use declarations:
  // function calcAge(birthYear){
  //   return 2023-birthYear;
  // }
};

//DOT VS. BRACKET NOTATION
console.log(gilObject); //properties get printed alphabetically
console.log(gilObject.lastName);
console.log(gilObject["lastName"]);
//the difference between .lastName and ["lastName"] is that
//we can use an expression (something that produces a value) inside the brackets
const nameKey = "Name";
console.log(gilObject["first" + nameKey]);
console.log(gilObject["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Gil? Choose between firstName, lastName, age, job, and friends"
// );

//dot notation wouldnt work here : gilObject.interestedIn
//console.log(gilObject[interestedIn]);
//prints undefined when trying to access a property that does not exist
// if (gilObject[interestedIn]) {
//   console.log(gilObject[interestedIn]);
// } else {
//   console.log(`${interestedIn} doesn't exist`);
// }

//Add new properties
gilObject.location = "Mx";
gilObject["twitter"] = "giltwitter";
console.log(gilObject);

let msg = `${gilObject.firstName} has ${gilObject.friends.length} friends, and his best friend is called ${gilObject.friends[0]}`;

console.log(msg);

//OBJECT METHODS
console.log(gilObject.calcAge());
console.log(gilObject["calcAge"]());

console.log(gilObject.age);
console.log(gilObject.age);
console.log(gilObject.age);

console.log(gilObject.getSummary());

//CHALLENGE
/* Write your code below. Good luck! 🙂 */

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const markBMI = mark.calcBMI();
const johnBMI = john.calcBMI();
if (markBMI > johnBMI) {
  console.log(
    `${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`
  );
}

//ITERATION: THE FOR LOOP
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 💪`);
}
