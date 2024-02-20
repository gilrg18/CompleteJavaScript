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
