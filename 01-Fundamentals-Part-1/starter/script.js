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
