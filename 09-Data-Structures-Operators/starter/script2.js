'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Destructuring parameter objects
  orderDelivery: function({starterIndex =1, mainIndex =0, time='20:00', address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta : function(ing1,ing2,ing3){
    console.log(`HERES YOUR PASTA with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza: function(mainIngredient,...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
console.log('----OR----');
//SHORT CIRCUITING (&& and ||)
//if the first value is a truthy value it wont even look at the second value
console.log(3 || 'gil');
console.log('gil' || 3);
console.log('' || 'gil');
console.log(true || 0);
console.log(undefined || null); //null even tho null is also a falsy value
console.log(undefined || 0 || ''|| 'Hello' || 23 || null); //Hello because its the first truthy value

 //cero is falsy so carefull with this
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //if restaurant.numGuests is undefined, guests1 will be 10



console.log('----AND----');
console.log(0 && 'Gil'); //shortcircuits when the first value is false, 0
console.log(7 && 'Gil'); //'Gil'
console.log('Hello' && 23 && null && 'gil');//shortcircuits when the first value is false
//shortcircuit mean that it doesnt even look at the rest of the operation

//if method exists, execute it (we are pretending we dont know it exists)
if(restaurant.orderPizza){
    restaurant.orderPizza('mushrooms', 'spinach')
}

//if the first value is truthy the second one will execute
restaurant.orderPizza && restaurant.orderPizza('mushroom','pp','siu')


//THE NULLISH CUALESCING OPERATOR (??)
restaurant.numGuests = 0
const guestss2 = restaurant.numGuests || 10;
//The real amount is 0 but it takes 10 because 0 is falsy.. the cualescing operator fixes this
console.log(guestss2);

//?? works with nullish values: null and undefined, so it will take the real value of numGuests which is 0
const correctGuest = restaurant.numGuests ?? 10;
console.log(correctGuest);