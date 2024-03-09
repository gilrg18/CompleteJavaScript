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
//book(23, 'Rafa Nadal')//cannot read undefined 'airline'

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