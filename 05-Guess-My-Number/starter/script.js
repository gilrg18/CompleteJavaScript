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
let highscore = 0;
console.log(`Secret Number: ${secretNumber}`);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
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
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number! ');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').disabled = true;
    //MANIPULATING CSS STYLES
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highscore = score > highscore ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
    //REFACTORING: ELIMINATE DUPLICATE CODE WITHOUT AFECTING FUNCTIONALITY
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High! ' : '📉 Too Low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You Lost! ');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //    else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too High! ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You Lost! ';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.check').disabled = true;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too Low! ';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 You Lost! ';
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.check').disabled = true;
  //       document.querySelector('body').style.backgroundColor = 'red';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`Secret Number: ${secretNumber}`);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').disabled = false;
  displayMessage('Start guessing... ');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
