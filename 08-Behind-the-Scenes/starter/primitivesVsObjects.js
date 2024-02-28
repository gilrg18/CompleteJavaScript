'use strict';
let age = 30;
let oldAge = age;
age = 31;
console.log(age); //31
console.log(oldAge); //30

const me = {
    name: 'Gil',
    age: 27,
};

const friend = me;
friend.age = 30;
console.log('Friend:', friend);
console.log('Me:', me);

//PRIMITIVES: Number, String, Boolean, Undefined, Null, Symbol, BigIng
//OBJECTS: Object Literal, Arrays, Functions, many more...

//JS ENGINE: CALL STACK: Where primitives are stored, HEAP: where objects are stored
//the value at a certain memory address is immutable (it cannot be changed)

//CALL STACK(Primitive values example):
//IDENTIFIER      ADDRESS       VALUE
//age = 30        0001          30       age is equal to the memory address 0001 which holds the value 30
//oldAge = age    0001          30       oldAge points to age's address
//age = 31        0002          31       
//me              0003          D30F     Uses the HEAP memory address as its value
//friend          0003          D30F     the friend object is the exact same as me object
//in other words the piece of memory in the call stack has a REFERENCE to a piece of memory in the HEAP

//HEAP(Reference Values example)
//Objects are stored in the HEAP because they might be too large to be stored in the CALL STACK
//So theyre stored in the HEAP because its almost an unlimited memory pool
//ADDRESS                   VALUE
//D30F                      {name: 'Gil', age:27,} -> {name:'Gil', age:30,}

//even tho we define objects as a constant we can overwrite them because we do not overwrite the
//reference to the object (D30F), we just changed the value in the heap.

//Variables declared with const are only immutable for primitive values, not reference values


let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies'
console.log(lastName, oldLastName);

//Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};
//we are just copying the reference, so its not exactly a copy of the object
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis'; //both get updated because we are updated the value in the heap which is referenced in the stack
console.log('BeforeMarriage:', jessica);
console.log('AfterMarriage:', marriedJessica);

//marriedJessica = {}// this doesnt work because its creating a new address in the heap which is the
//value in the stack, so you are updating the value in the stack which is not possible for constants

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const jessicaCopy = Object.assign({},jessica2);//this acually creates a new object that is a copy of jessica2 (but its a shallow copy(copia poco profunda))
jessicaCopy.lastName = 'David';
console.log('Before marriage:', jessica2);
console.log('After marriage:', jessicaCopy);

// Object.assign only creates a copy on the first level, a shallow copy. 
// An example of a copy on first level:
const gil = {
    firstName: 'Gil',
    lastName: 'Rogel',
    family: ['Mike','Lala']
};

const gilCopy = Object.assign({},gil);
gilCopy.lastName = 'Garcia';

gilCopy.family.push('Mom') //This will affect the family array object in bot gil and gilcopy becasue
gilCopy.family.push('Dad')//the copy was made on the first level,in other words, a shallow copy

console.log('Original:', gil);
console.log('Copia:', gilCopy);

//Creating a deep clone is beyond the scope of this section. To be seen in a future section...