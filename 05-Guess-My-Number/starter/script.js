'use strict';
//select a class with .
//select and id with #
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 42;
document.querySelector('.score').textContent = 69;

document.querySelector('.guess').value = 111;
console.log(`value: ${document.querySelector('.guess').value}`);
*/

//IMPLEMENTING THE GAME LOGIC
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(`Secret Number: ${secretNumber}`);
//document.querySelector('.number').textContent = secretNumber;
//HANDLING CLICK EVENTS
// const x = function () {
//   console.log(document.querySelector('.guess').value);
// };
// document.querySelector('.check').addEventListener('click', x);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Guess: ${guess} ${typeof guess}`);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🥳 Correct Number! ';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').disabled = true;
    //MANIPULATING CSS STYLES
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost! ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low! ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost! ';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`Secret Number: ${secretNumber}`);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').disabled = false;
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
