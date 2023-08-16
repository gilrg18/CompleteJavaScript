let js = "amazing";
//if (js === "amazing") alert("yay");

//declaring a varibale 'firstName' with value 'Gil'
let firstName = "Gil";
let lastName = "Rogel";
console.log(firstName + " " + lastName);

//ilegal variable name '1name' 'first&last'
//let 1name = 'gil';
//variables can only contain numbers,letters,_,$
//you cannot use reserved js keywords as variable names:
//f.e: new, let, var, etc..
let $1_gil = "gil";
console.log($1_gil);

//contants are written in UPPERCASE (conventionally)
let PI = 3.1416;

//variable names should be DESCRIPTIVE
let myFirstJob = "Support";
let myCurrentJob = "Dj";
//instead of job1, job2, etc...

//Assignment: Values and Variables
let country = "Mexico";
let continent = "America";
let population = 126700000;

console.log(country + " " + continent + " " + population);

//DATA TYPES
//Values is either an object or a primitive value
//7 primitive data types: number, string, boolean,
//undefined (empty value, declared but not defined),
//null
//symbol(unique value thath cannot be changed (ES2015))
//BigInt(ES2020): Larger itnegers than the number type can hold
//JS has dynamic typing: automatically determines the data type when declaring a variable
console.log(typeof true); //"boolean"
console.log(typeof 27); //"number"
console.log(typeof "Gil"); //"string"
let year;
console.log(year); //undefined
console.log(typeof year); //"undefined"
year = 2023;
console.log(typeof year); //"number" (result of js dynamic typing)
console.log(typeof null); //object (which is a bug, it should be null)

//Assignment: Data Types
let isIsland = false;
const language = "Espanol";
console.log(typeof isIsland); //"boolean"
console.log(typeof population); //"number"
console.log(typeof country); //"string"
console.log(typeof language); //"undefined"

//let, const and var
let age = 30;
age = 31; //'mutating' the variable

//const for variables that are not supposed to change in the future
const birthYear = 1996;
//birthYear = 1997; //typerror: assignment to constant variable
//you cannot declare empty const variables

var job = "dj";
job = "programmer";
//var and let have scope differences
//which will be explained in advanced sections
//more differences in advanced sections

//Assignment: let, const and var
//language = "English"; //TypeError assignment to constant variable

//BASIC OPERATORS
const now = 2023;
const ageGil = now - 1996;
const ageMike = now - 1994;
console.log(ageGil, ageMike);
console.log(ageGil * 2, ageMike / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3
console.log(firstName + " " + lastName);
//theres a better way used to concatenate strings
//called template strings but we will use operators for now

//assignment operator '='
let x = 10 + 5;
x += 10;
x *= 2;
x++;
x--;
console.log(x); //50

//comparison operators
console.log(ageGil > ageMike); //false
//>, <, >=, <=
console.log(ageMike >= 29); // true
const isFullAge = ageGil >= 28;
console.log(isFullAge);

//Assignment: Basic Operators
console.log(population / 2);
population++;
console.log(population);
const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
const avgPopulation = 33000000;
console.log(population < avgPopulation);
const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language;
console.log(description);

//OPERATOR PRECEDENCE
console.log(now - 1996 > now - 1997); //true
//all the math operators go before comparator operators

let y, z;
y = z = 25 - 10 - 5;
console.log(y, z); //10 10

//const avgAge = ageGil + ageMike / 2; //41.5
const avgAge = (ageGil + ageMike) / 2; //28
console.log(ageGil, ageMike, avgAge);

//STRINGS AND TEMPLATE LITERALS
const firstName2 = "Gil";
const job2 = "Dj";
const birthYear2 = 1996;
const year2 = 2023;

const gil =
  "I'm " +
  firstName +
  ", a " +
  (year2 - birthYear2) +
  " years old " +
  job +
  "!";
console.log(gil);
//you can write a string in a more 'normal' way using template literals:
//so you can avoid having to type blank spaces
const gilNew = `I'm ${firstName2} a ${year2 - birthYear2} years old ${job}!`;
console.log(gilNew);
console.log(`Just a regular string..`);
console.log(
  "String with \n\
  multiple \n\
  lines"
);
console.log(`String
  multiple
  lines`);

//Assignment: String and template literals
const description2 = `${country} is in ${continent}, and its ${population} people speak ${language}`;
console.log(description2);

//Taking decisions: if / else Statements
const age3 = 15;
const isOldEnough = 18;

if (age3 >= 18) {
  //Windows + . for emojis
  console.log(`Gil can start driving license 👍👍`);
} else {
  const yearsLeft = 18 - age3;
  console.log(`Gil is yoo young. Wait another ${yearsLeft} years`);
}

const birthYear3 = 1996;
let century;
if (birthYear3 <= 2000) {
  century = 20;
} else {
  century = 21;
}
//if you do not define century out of the if block this will throw an error
console.log(century);

//TYPE CONVERSION AND COERCION
//Conversion: manually convert from one type to another
//Coercion: when js does it automatically for us
//Type conversion:
const inputYear = "1996";
console.log(inputYear + 27); //199627
console.log(Number(inputYear), inputYear); //1996 '1996'
console.log(Number(inputYear) + 27); // 2023

console.log(Number("Gil")); //NaN (not a number)
console.log(typeof NaN); //number

console.log(String(23), 23); //'23' 23;

//Type coercion:
console.log("I am " + 23 + " years old"); //23 gets converted to a string automatically with the + operator

console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); //23103
console.log("23" * "2"); //46
console.log("23" / "2"); //11.5

let n = "1" + 1; //11
n = n - 1; //10
console.log(n);

let a = "1" - 1; // 0;
a = a + "1"; //01
console.log(a);

//TRUTHY AND FALSY VALUES
//Falsy: 0,'',undefined,null,NaN
//Truthy: anything else
//js always does type coercion to booleans
console.log(Boolean(0)); //f
console.log(Boolean(undefined)); //f
console.log(Boolean("Gil")); //t
console.log(Boolean({})); //t
console.log(Boolean("")); //f

const money = 0;

if (money) {
  console.log(`Don't spend it all 😊😊`);
} else {
  console.log(`Get a job 😡😡`);
}

let height;
if (height) {
  console.log(`yay height is defined ${height}`);
} else {
  console.log(`height is UNDEFINED`);
}

//EQUALITY OPERATORS: == VS ===
//=== is STRICT cause it doesnt perform type coercion
//only returns true when both values are exactly the same
const age2 = 18;
if (age2 === 18) console.log("adult");
console.log(18 === 18); //true
console.log("18" === 18); //false
console.log(18 == 18); //true
console.log("18" == 18); //true (cause of type coercion)

// const favourite = Number(prompt("Number:"));
// console.log(favourite); //if it gets printed in white it means it is a string
// console.log(typeof favourite);
// if (favourite === 23) {
//   console.log("23 ggwp");
// } else if (favourite === 7) {
//   console.log("7 ggwp");
// } else {
//   console.log("any ggwp");
// }

// if (favourite !== 23) console.log("not 23");

//LOGICAL OPERATORS
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
const isTired = false;
if (shouldDrive && !isTired) {
  console.log("can drive");
} else {
  console.log("can not drive");
}

//THE SWITCH STATEMENT
const day = "wednesday";

switch (day) {
  case "monday":
    console.log("monday");
    break;
  case "tuesday":
    console.log("tuesday");
    break;
  //2 cases 1 output
  case "wednesday":
  case "thursday":
    console.log("wednesday and thursday");
    break;
  case "friday":
    console.log("friday");
    break;
  default:
    console.log("not a valid day");
    break;
}
