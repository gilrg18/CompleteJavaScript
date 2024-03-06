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