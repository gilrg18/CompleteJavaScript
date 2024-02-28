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
