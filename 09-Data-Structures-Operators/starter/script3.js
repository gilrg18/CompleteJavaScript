'use strict'
//SUMMARY: WHICH DATA STRUCTURE TO USE?
//3 sources of data: 
//From the program itself: data written directly in source code (e.g status messages)
//From the UI: Data input from the user or data written in DOM (e.g tasks in todo app)
//From external sources: Data fetched for example from web API (e.g recipe, movie, weather, objects)

//BUILT-IN data structures: array,set,object,map
//Simple List when we do not need to describe the values: Arrays or Sets
//KEY/VALUE Pairs: Objects or Maps

//Other built in data structures: WeakMap, WeakSet

//Non-built in: stack, queue, linked list, tree, hash table

//ARRAYS:
// Use when you need ordered list of values(might contain duplicates)
// Use when you need to manipulate data

//SETS:
//Use when you need to work with unique values
//Use when high-performance is REALLY important, operations like 
//searching or deleting an item can be 10x faster in sets than arrays
//Use to REMOVE DUPLICATES from arrays

//OBJECTS:
//More traditional, key/value storage ("abused objects") because maps didnt exist before ES6
//Easier to write and access data values with . and []
//When u need functions as values (methods)
//When working with JSON(Can convert to map)

//MAPS:
//Better performance
//Keys can have ANY data type, usefull when u need keys that are NOT strings
//Easy to iterate
//Easy to compute size
//Use when you simply need to map key to values


//WORKING WITH STRINGS - PART 1
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);
console.log(airline.length);
console.log('ASDF'.length);

//string methods
console.log(airline.indexOf('r')); //gives the first ocurrence
console.log(airline.lastIndexOf('r'));//gives the last ocurrence
console.log(airline.indexOf('Portugal'));//case sensitive, it wont find 'portugal'

//Strings are inmutable, theyre primitives, slice doesnt affect the original string
console.log(airline.slice(4));//slice(beginParameter) Air Portugal
console.log(airline.slice(4,7));//slice(begin,end) Air length = end - beggining

//extract the first word
console.log(airline.slice(0,airline.indexOf(' ')));
//last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1 ));

//start extracting from the end
console.log(airline.slice(-2));
//remove characters from the end
console.log(airline.slice(1,-2));

const checkMiddleSeat = function(seat){
    //B and E are middle seats
    const s = seat.slice(-1);
    if(s==='B' || s==='E') console.log(`You gotthe middle seat ${seat} 🤣`);
    else console.log(`Lucky you ${seat} 😁`);
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')

//Methods only work on objects, not primitives... so whats going on?
//Behind the scenes, whenever we call a method on a string Javascript converts the string PRIMITIVE to string OBJECT 
//with the same content and then its on that OBJECT where the methods are called.
//This process is called BOXING (takes our string and puts it into an object(the box))
//This is what happens behind the scenes when we call methods on a string
//Then when the operation is done, the object is converted back to a string primitive
console.log(new String('gil'));
console.log(typeof new String('gil'));//object
//All string methods return primitives, even if theyre called on a string object
console.log(typeof new String('gil').slice(0));//string


//WORKING WITH STRINGS - PART 2
//change case of string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log(typeof 'gil'.toUpperCase())
console.log(typeof new String('gil').toUpperCase());

//fix capitalization in name
const passenger = 'giLbERtO'; //must be Gilberto
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const rightName = function(name){
    const nameLower = name.toLowerCase();
    const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
    console.log(nameCorrect);
}
rightName('GilbERTO')

//Comparing emails
const email = 'hello@gil.io';
const loginEmail = '  Hello@giL.IO  '

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail===email);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(normalizedEmail===email)

//replacing
const priceGB = '288,97%';
const priceUS =  priceGB.replace('%','$').replace(',','.')
console.log(priceUS);

//replace only replaces the first occurrence
const announcement = 'All passengers come to boarding door 23. Boarding door 23!!';
console.log(announcement.replaceAll('door','gate'));
//replaceAll didnt exist in the past so we can also use a Regular Expression
///door/g   g flag stands for 'global' so all 'door's will be replaced
console.log(announcement.replace(/door/g, 'gate'));

//Booleans
const avion = 'Airbus A320neo';
console.log(avion.includes('A320'));
console.log(avion.includes('Boeing'));
console.log(avion.startsWith('Air'));

if(avion.startsWith('Airbus') && avion.endsWith('neo')){
    console.log('Part of the New Airbus family');
}

const checkBaggage = function(items){
    //to lower case so its eaasier to compare strings
    const baggage = items.toLowerCase();
    if(baggage.includes('gun') || baggage.includes('knife')){
        console.log('NOT ALLOWED!!');
    }else{
        console.log('Welcome aboard :)');
    }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')