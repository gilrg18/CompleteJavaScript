'use strict';
//select a class with .
//select and id with #
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳 Correct Number! ';
document.querySelector('.number').textContent = 42;
document.querySelector('.score').textContent = 69;

document.querySelector('.guess').value = 111;
console.log(`value: ${document.querySelector('.guess').value}`);
