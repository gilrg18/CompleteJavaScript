'use strict'
//CLOSURES
var passengerCount= 10;
const secureBooking = function () {
    //this function will create the closure
    //we dont create closures explicitely like we create a new array or w.e..
    //it simply happens automatically in certain situations
    let passengerCount = 0; 

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

//Thanks to the closure, a function (function()) does not loose connection
//to variables (passengerCount) that existed at the functions birthplace secureBooking()

//Closures have PRIORITY over scope chain 
//so if there was a passengerCount global variable
//the closure's passengerCount would be priority

const booker = secureBooking();
booker();
booker();
booker();

/*
An inner function has always access to the variables of the outer (parent) function. That's it.

Why is it like that? It's because the variable object of the parent function stays 
in memory even after the function returns, and our inner function has access 
to this variable object through the scope chain.
*/
console.dir(booker) //[[Scopes]] is the variable environment of the booker function
//whenever we see '[[]]' it means its an internal property we cannot access from our code