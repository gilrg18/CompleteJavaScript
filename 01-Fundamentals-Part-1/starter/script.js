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
