'use strict';

//DEFAULT PARAMETERS
const bookings = [];
//ES6 - Default values can contain an expression
//Order matters, we cannot call numPassengers before eg(price=199*numPassengers,numPassengers=1)
const createBooking = function(flightNum, numPassengers=1, price=199*numPassengers){
    //ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking)
}

createBooking('LH123', 5);
createBooking('AB436');
createBooking('XX144', 10,999);
createBooking('XX144', undefined, undefined);//undefined takes the default value

//HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE
const flight = 'LH234';
const gil = {
    name:'Gil Rog',
    passport: 1232323232
}

const checkIn = function(flightNum, passenger){
    //flightNum is a copy(a completely different variable) of the original flightNum LH234
    flightNum = 'LH999';
    //passenger is not a copy of gil, it takes the reference to the gil object in the memory heap
    //so manipulating the passenger object is the same as manipulating the gil object
    passenger.name = 'Mr. '+passenger.name;
    if(passenger.passport === 1232323232){
        console.log('Check in')
    }else{
        console.log('Wrong passport!')
    }
}

checkIn(flight, gil)
console.log(flight, gil);

//passenger is not a copy of gil, it takes the reference to the gil object in the memory heap
//its like doing:
let passengerCopy = gil; //it just copies the reference 
let flightCopy = flight;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 10000000);
}

//Two functions manipulating the same object which may cause issues
newPassport(gil);
checkIn(flight, gil)

//JAVASCRIPT appears to pass by reference but in reality it cant do that
//it passes a value that contains a memory address
//so basically it passes a reference but it doesnt pass BY reference

/*
In programming languages, Arguments can be passed by value, or passed by reference.

- JavaScript works only passing by value.

- When we pass primitive values, the function works with a value, 
which is a copy of the original value.

- When we pass an object, the function works with a value, 
which is a copy of the reference that address to the spot in the memory 
where the original object is in the memory (still is not a reference).

-So, the subtle thing that makes JS different from some other languages, 
is that the reference to an object is in itself a value, 
that's why we only have passing by value, basically.

*/


//FIRST-CLASS AND HIGHER-ORDER FUNCTIONS

//FIRST CLASS FUNCTIONS
//Functions are treated as values
//Functions are just another "type" of object

//Store functions in variables or properties
const add = (a,b) => a+b;
const counter = {
    value:1,
    inc: function() {this.value++}
}

//Pass functions as arugments to Other functions
//const greet = () => console.log('Hello!');
//btn.addEvenListener('click',greet)

//Return functions from functions
//Call methods on functions counter.inc.bind(someotherobject) (bind on another lesson)


//HIGHER ORDER FUNCTIONS
//A function that RECEIVES another function as an argument, that RETURNS a new function or both
//Possible because of first-class functions

//Function that receives another function
//const greet = () => console.log('Hello!');
//btn.addEvenListener('click',greet)
//addEventListener is a higher order function and greet is a callback function (callbacks on another lesson)

//Function that returns a new function
function count(){//Higher order function
    let counter = 0;
    return function (){ //returned function
        counter++;
    }
}


//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
const oneWord = function(str){
    return str.replaceAll(' ','').toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others] = str.split(' ');
    console.log(first, others);
    return [first.toUpperCase(), ...others].join(' ');
}
//higher order function (takes a function as a parameter) fn is the callback function
const transformer = function(str, fn){
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);

    console.log(`Transformed By : ${fn.name}`);
}
//console.log(oneWord('abc dsd'));
//console.log(upperFirstWord('abc asd asd asd'));
//We are not calling the function upperFirstWord (upperFirstWord()), 
//we are just passing it as a parameter(callback function)
transformer('JavaScript is confusing lol', upperFirstWord);
transformer('JavaScript is confusing lol', oneWord);

const high5 = function (){
    console.log('😁');
}
//JS uses callbacks all the time
//high5 is the callback function and addEventListener is the Higher-order function
//document.body.addEventListener('click', high5);

//ABSTRACTION means hiding implementation/details because we dont really care about it
//for example the transformer function doesnt care about how the callback functions passed to it are implemented
