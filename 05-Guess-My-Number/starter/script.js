'use strict';

const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secreteNumber = randomNumber();
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('🙈 No Number');
  } else if (guess === secreteNumber) {
    displayMessage('🎉 Correct Number! ');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    highScore = score;
  } else if (guess !== secreteNumber) {
    displayMessage(guess > secreteNumber ? '📈 Too high! ' : '📉 Too Low! ');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💥 You Lost the game');
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = randomNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
