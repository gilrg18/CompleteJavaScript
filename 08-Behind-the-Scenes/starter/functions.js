'use strict';
//With var, using this.firstName in an arrow function will take the window object's firstName (giil)
//Never ever use arrow functions as methods to avoid bugs like these.
//var firstName = 'giil';

const gil = {
    firstName: 'Gil',
    year:1996,
    calcAge: function() {
      //the this keyword will be the object that is calling the method
      console.log(this.firstName); 
      console.log(this);
      console.log(2024 - this.year); //28

      //SOLUTION 1
      // const self = this; //can be called self or that
      // const isMillenial = function (){
      //   console.log(this);//undefined
      //   //fix undefined this by using helper 'self' variable
      //   console.log(self);
      //   console.log(self.year>=1981 && self.year<=1996);
      // };

      //SOLUTION 2 - Doesnt need extra variable
      const isMillenial = () =>{
        //Arrow functions dont have a this keyword so they take the parents this keyword
        //here this is the gil object
        //in conclusion arrow functions INHERIT the this keyword from the parents scope 
        console.log(this);
        console.log(this.year>=1981 && this.year<=1996);
      };
      isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}`),
  };

  gil.calcAge();
  //An object doesnt have its own scope, its part of the global scope so the
  //greet function which doesnt have a this keyword will use the this keyword from the global scope (window object)
  //since the window object doesnt have firstName, gil.greet() (window.firstName) will return undefined
  gil.greet(); //Hey undefined
console.log(this.firstName); //undefined

//arguments keyword only eists in function expressions and declarations
var addExpression = function (a,b){
  console.log(arguments);
  return a+b;
}

addExpression(2,5);
//they appear in the arguments keyword
addExpression(2,5,8,12);

var addArrow = (a,b)=>{
  //console.log(arguments); //arguments dont exist in arrow functions
  return a+b;
}

addArrow(2,5,8,12);

  