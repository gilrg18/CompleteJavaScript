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

//THE SPREAD OPERATOR (...)
const array = [7,8,9];
const badNewArray = [1,2,array[0],array[1],array[2]]
console.log(badNewArray);

const goodNewArray = [1,2, ...array];
console.log(goodNewArray);
console.log(...goodNewArray);
console.log(1,2,7,8,9);

const newMenu =  [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

//Copy array (shallow copy)
/*
"Shallow copy means that it will copy only the top values inside an array. 
So if you had an object as an value in your array, that object will be the same object in both arrays. 
It will copy just it's reference."
*/
const mainMenuCopy = [...restaurant.mainMenu]
//Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu2);

//Spread operator works on all Iterables => arrays, strings, maps, sets.. (NOT OBJECTS)
const str = 'Gil';
const letters = [...str, ' ', 'R.'];
console.log(letters);
console.log(...str);
//Multiple values separated by a comma are usually expected when we pass arguments
//into a function or when we build a new array
//console.log(`${...str} Rogel`); //this doesnt work

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'),
// prompt('Ingredient 2?'),
// prompt('Ingredient 3')];
const ingredients = ['pepperoni','cheese','bacoon']
console.log(ingredients);

restaurant.orderPasta(...ingredients);

//Since ES2018 the spread operator also works on objects even tho theyre not iterablesf
const newRestaurant = {foundedIn: 1996, ...restaurant, founder: 'Gilbertini'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'SiuR7' // this doesnt overwrite the original object's name (restaurant.name)
console.log(restaurant.name);
console.log(restaurantCopy.name);


//REST PATTERN AND PARAMETERS
//SPREAD - UNPACK ELEMENTS FROM AN ARRAY
//REST - PACK ELEMENTS INTO AN ARRAY

//SPREAD IS ON THE RIGHT SIDE OF THE ASSIGNMENT OPERATOR =
const ar = [1, 2, ...[3,4,5]]
//REST - collects the rest of the elements
//rest element must be the last element [a,b,...others, c] this cannot be done
//1) Destructuring use case
const [aaa,bbb, ...others] = [1,2,3,4,5]
console.log(aaa,bbb,others);

const [pizza, ,rissoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, rissoto, otherFood);

//Objects
const {sat, ...weekdays} = restaurant.openingHours;
console.log(sat, weekdays)

//2) Functions use case
//this is better because we can pass values add(1,2,3,5) or an array add(...[1,2,3,4])
const add = function(...numbers){
  let sum = 0;
  for(let i = 0; i<numbers.length;i++){
    sum+=numbers[i]
  }
  console.log(numbers);
  console.log(sum);
  return sum;
}

add(2,3)
add(5,3,7,2)
add(8,2,5,3,2,1,4)

const xx = [23,5,7];
add(...xx);

restaurant.orderPizza('mushrooms', 'onion', 'olives','spinach')

restaurant.orderPizza('pepperoni')
