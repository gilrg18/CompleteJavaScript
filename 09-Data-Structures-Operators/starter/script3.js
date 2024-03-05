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
