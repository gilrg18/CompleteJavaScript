'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
//Compute property names
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //Compute property names [weekdays[3]] which is thu
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //before ES6
  //openingHours: openingHours,
  //ES6 Enhanced object literals:
  openingHours,

  //before ES6
  // order: function(starterIndex, mainIndex){
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  //ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //Destructuring parameter objects
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`HERES YOUR PASTA with ${ing1}, ${ing2}, ${ing3}.`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
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
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //Hello because its the first truthy value

//cero is falsy so carefull with this
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); //if restaurant.numGuests is undefined, guests1 will be 10

console.log('----AND----');
console.log(0 && 'Gil'); //shortcircuits when the first value is false, 0
console.log(7 && 'Gil'); //'Gil'
console.log('Hello' && 23 && null && 'gil'); //shortcircuits when the first value is false
//shortcircuit mean that it doesnt even look at the rest of the operation

//if method exists, execute it (we are pretending we dont know it exists)
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

//if the first value is truthy the second one will execute
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'pp', 'siu');

//THE NULLISH CUALESCING OPERATOR (??)
restaurant.numGuests = 0;
const guestss2 = restaurant.numGuests || 10;
//The real amount is 0 but it takes 10 because 0 is falsy.. the cualescing operator fixes this
console.log(guestss2);

//?? works with nullish values: null and undefined, so it will take the real value of numGuests which is 0
const correctGuest = restaurant.numGuests ?? 10;
console.log(correctGuest);

//LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Giorgio',
};

// rest1.numGuests = rest1.numGuests || 10; //if rest1.numGuests = 0 or is undefined (falsy value) itll take 10
// rest2.numGuests = rest2.numGuests || 10;

//Logical OR assignment operator (same as above)
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//Logical NULLISH assignment operator
rest1.numGuests ??= 10; //if numGuests is 0, it will keep that value
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>'; //Falsy && 'ANONYMOUS' = undefined
//this old syntax causes javascript to create the owner property with the value undefined if
//the property doesnt exist
// rest2.owner = rest2.owner && '<ANONYMOUS>'; //TRUTHY && '<ANONYMOUS>'

//Logical AND assignment operator (same as above)
//With this new syntax if the owner property doesnt exist it will just shortcircuit to the falsy value
// and do nothing
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

//LOOPING ARRAYS: THE FOR-OF LOOP
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

//get the index
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
//index using destructuring
for (const [i, item] of menu.entries()) {
  console.log(`${i + 1}: ${item}`);
}
console.log([...menu.entries()]);

//ENHANCED OBJECT LITERALS


//OPTIONAL CHAINING (?.)
if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if(restaurant.openingHours.thu) console.log(restaurant.openingHours.thu.open);

//to check if something exists.. in this case mon
//undefined gets returned so it resolves errors and bugs
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.mon.open);//error cannot read properties of undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for(const day of days){
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
  
}

//methods
console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
console.log(restaurant.orderSiu?.(0,1) ?? 'Method does not exist');

//arrays
const user = [];
const users = [
  {name: 'Gil', email:'siu@siu.siu'}
];
console.log(user[0]?.name ?? 'User list is empty');
console.log(users[0]?.name ?? 'User doesnt exist');
console.log(users[1]?.name ?? 'User doesn\'t exist');


//LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES
//looping over objects indirectly, over property names also called keys
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for(const day of properties){
  openStr += `${day},`;
}
console.log(openStr);

//Property values
const values =  Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key, {open, close}] of entries){
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}