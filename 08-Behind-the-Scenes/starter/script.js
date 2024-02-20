'use strict';

function calcAge(birthYear){
    const age = 2024 - birthYear;

    function printAge(){
        let output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear>=1981 && birthYear<=1996){
          var millenial= true;
          const firstName = 'Yil';
          const str =  `and you're a milleanial, ${firstName}`
          console.log(str);
          
          function add(a,b){
            return a+b;
          }
          
          const output = 'New Output'
          console.log(output);
        }
        console.log(output);
        //add(5,4);//reference error, functions are block scoped (in strict mode)
        //console.log(str); //referenece error because const and let are block scoped
        console.log(millenial); //true, var is function scoped
    }  
      printAge();

    return age;
}

const firstName = 'Gil';
calcAge(1996);
//console.log(age); //reference error


//WHY HOISTING? -> Using functions before atual declaration, essential for some programming
//techniques such as mutual recursion
//                          HOISTED   INITIAL VALUE         SCOPE
//Function declarations       YES     Actual function       BLOCK
//Var variables               YES     undefined             Function
//let and const variables     NO      <uninitialized>, TDZ  Block   TDZ = Temporal Dead Zone
//func.expressions and arrows     DEPENDS IF WE USE LET, VAR, CONST

//TEMPORAL DEAD ZONE
//Used to prevent bugs.. undefined variables can cause bugs whereas 
//uninitialized variables catch errors quickly
//Accesing variables before declaration is a bad practice and should be avoided.
//const should never be reasigned, so the TDZ is created to avoid creating undefined 
//variables and reassigning them later on.
const myName = 'Gil';
if(myName ==='Gil'){
  //<TEMPORAL DEAD ZONE FOR job VARIABLE bc its not initialized>
  console.log(`Gil is a ${job}`); 
  const age = 2024 - 1996; 
  console.log(age);
  //</TEMPORAL DEAD ZONE FOR job VARIABLE bc its not initialized >
  const job = 'programmer';
  console.log(x);
}