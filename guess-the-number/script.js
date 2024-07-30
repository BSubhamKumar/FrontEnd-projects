'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ no message!';

    //when you guessed correctly
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 correct number!';
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.highscore').value = value + 1;

    //when the guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '☝️you guessed a higher number!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥you lost the game!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'red';
    }

    //when the guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '👇you guessed a lower number!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥you lost the game!';
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  //   highscore = 0;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.highscore').textContent = highscore;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
