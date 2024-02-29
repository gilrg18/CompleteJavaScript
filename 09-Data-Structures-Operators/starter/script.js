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


const arr = [2, 3, 4]
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring arrays
const [x,y,z] = arr;
console.log(x, y, z);
console.log(arr);


const [first, second] = restaurant.categories;
console.log(first, second);

const [first1, ,second2] = restaurant.categories; //skip second value
console.log(first1, second2);

let [main, secondary] = restaurant.categories;
console.log(main,secondary);

//Switching values without destructuring
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

//Switching values with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Destructuring function return values
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);

//nested arrays
const nested = [2,4,[5,6]];
// const [i, ,j] = nested
// console.log(i,j);
//destructuring inside destructuring (Nested destructuring)
const [i,,[j,k]] = nested;
console.log(i, j ,k);

// Default values - useful when destructuring unknown quantity of values
const [p=1,q=1,r=1] = [8,9]
console.log(p,q,r);


//DESTRUCTURING OBJECTS
const {name, openingHours, categories} = restaurant;
console.log(name,openingHours,categories);

//property name: new created variable name
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

//default values
console.log(restaurant.menu);
const {menu = [], starterMenu: starters = []} = restaurant
console.log(menu, starters);

//Mutating variables
let aa = 111;
let bb = 999;
const obj = {aa: 23, bb:7, c:14 };
({aa, bb} = obj); 
//unexpected token error '='
//parenthesis because when we start a line with { javascript expects a code block
console.log(aa,bb);

//Nested objects
//{propertyName: {propertyName: newvarname} }
const { fri: {open: o, close: cl}} = openingHours
console.log(o, cl);

restaurant.orderDelivery({
  time:'22:30',
  address: 'Fake Address 123',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Fake Address 123',
  starterIndex: 1,
})