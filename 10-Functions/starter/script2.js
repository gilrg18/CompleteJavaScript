'use strict'
//THE CALL AND APPLY METHODS
const aeromexico = {
    airline: 'AeroMexico',
    aeroCode: 'AM',
    bookings: [],
    //book: function () {}
    //same but different syntax
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.aeroCode}${flightNum}`);
        this.bookings.push({flight: `${this.aeroCode}${flightNum}`, name})
    }
};

aeromexico.book(239, 'Gilberto Rogel')
aeromexico.book(645, 'CR7 Siu')
console.log(aeromexico);

const aerobus = {
    airline: 'Aerobus',
    aeroCode: 'AB',
    bookings: [],
    //copying and pasting code (the book method) is bad practice so.. 
}

//first class functions: functions as values!
const book = aeromexico.book;
//but this book function is no longer the aeromexico method, so it messes the THIS keyword
//This happened because the book function is now a regular function call so
//the this keyword points to undefined (at least in strict mode)
//book(23, 'Rafa Nadal')//cannot read undefined this.airline

//So how do we tell the this keyword to refer to aerobus?
//functions are objects and objects have methods and therefore functions have methods too
//THE CALL METHOD: call(object, param1..., )
book.call(aerobus, 23, 'Rafa Nadal');
console.log(aerobus);

book.call(aeromexico, 239, 'Willi Wonka')
console.log(aeromexico);

const alaska = {
    airline: 'Alaska',
    aeroCode: 'AK',
    bookings: [],
}

book.call(alaska, 583, 'CLEMENTON');
console.log(alaska);


//APPLY METHOD
//Does the same as call but it doesnt receive a list of arguments after the THIS keyword, but an array.
const flightData = [583, 'SAULON'];
book.apply(alaska, flightData);
console.log(alaska);

//The apply method is not that used anymore because we can use the call method
//using spread operator
book.call(alaska, ...flightData);
console.log(alaska);


//THE BIND METHOD - 
//manually sets the THIS keyword for any function call.
//Bind does not immediately call the function.
//Instead it returns a new function where the THIS keyword is bound
//book.call(alaska, 583, 'CLEMENTON');
//book.bind(alaska); //this will return a new function where the THIS keyword will be bound to alaska
const bookAL = book.bind(alaska);
const bookAB = book.bind(aerobus);
//Now, instead of using call all the time, we can use bind and just call that function
bookAL(18,'Rangel')
console.log(alaska);

//We can use bind with specific values:
const bookAL18 = book.bind(alaska, 18); //we always want the flight 18
bookAL18('Otre')//now it only needs the name
console.log(alaska);

//BIND With Event Listeners
alaska.planes = 300;
alaska.buyPlane = function (){
    console.log('this: ',this);
    this.planes++;
    console.log(this.planes);
}

//document.querySelector('.buy').addEventListener('click', alaska.buyPlane)
//On an Event Listener the THIS keyword always points to the element which the event is attached to
//in this case its the button element with class 'buy', so the THIS keyword is assigned dynamically

//So we assign the this keyword to alaska instead of the buy button using bind 'alaska.buyPlane.bind(alaska)'
//document.querySelector('.buy').addEventListener('click', alaska.buyPlane.bind(alaska))


//Partial application (preset parameters)
const addTax = (rate,value) => value + value * rate;
console.log(addTax(.10,100));
//bind(this, presetParameter) we dont care about the THIS keyword here
//This could be done with preset parameters but what bind does is it takes a more general function
//and creates a NEW more specific function
const addTaxMx = addTax.bind(null, .23)
//same as: 
//addTaxMx = value => value + value * 0.23;
console.log(addTaxMx(500));

//Same tax function as above but with a function returning a function
const addTax2 = function(rate) {
    return function (value){
        return value + value * rate;
    }
}
//console.log(addTax2(.23)(100));
const addTaxMx2 = addTax2(.23);
console.log(addTaxMx2(500));


//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
//Sometimes we need functions that only need to be invoked once and never again.
//A function that disappears right after its called once

//we simply transform the statement into an expression by wrapping it with ()
(function() {
    console.log('This Will Never Run Again');
    //encapsulated inside this functions scope
    const isPrivate = 23;
})(); //Immediately invoked function expression (IIFE)

//console.log(isPrivate); //not defined

(() => console.log('This Will Also Never Run Again'))(); //IIFE with arrow functions

//IIFE also help for encapsulating data but theyre not used so much anymore for that because
//if we want to encapsulate we can use code blocks:
{
    const isPrivate = 23;
    var notPrivate = 45;
}

// console.log(isPrivate); //not defined
console.log(notPrivate); //45