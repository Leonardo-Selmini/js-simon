let numbers = [];
let userNumber = [];
let guessed = [];
let counter = 0;
let nNumbers = 0

//PER FARE IL CSS BENE NON HO AVUTO TEMPO DI FARE REFACTORING PER RENDERE PIù 'ELEGANTE' IL CODICE

document.getElementById('easy').addEventListener('click', function() {
  nNumbers = 6;
  resetGame();
  setTimeout(myNumbers, 5000)});
document.getElementById('medium').addEventListener('click', function() {
  nNumbers = 8;
  resetGame();
  setTimeout(myNumbers, 5000)});
document.getElementById('hard').addEventListener('click', function() {
  nNumbers = 10;
  resetGame();
  setTimeout(myNumbers, 5000)});

document.getElementById('check').addEventListener('click',function() {
  let inputValue = document.getElementById('input').value;
  document.getElementById('input').value = null;
  if (isNaN(inputValue) == true || inputValue == '' || inputValue < 0 || inputValue > 99) {
    alert('Please insert a number between 0 and 99');
    return false;
  }
  userNumber.push(inputValue);

  document.getElementById('input-label').innerHTML = `Insert the ${--counter} others numbers`;

  for (let i= 0; i < numbers.length; i++) {
    if (inputValue == numbers[i]) {
      guessed.push(inputValue);
      numbers[i] = '';
    }
  }

  console.log('i tuoi numeri sono', userNumber);

  if (counter == 0) {
    document.getElementById('user-hud').classList.toggle('hidden');
    if (guessed.length > 0) {
      document.getElementById('end').innerHTML = `You guessed ${guessed.length} numbers! <br> Guessed numbers: ${guessed}`;
    } else {
      document.getElementById('end').innerHTML = 'I’m sorry but you have the memory of a goldfish :)'
    }
    document.getElementById('rules').innerHTML = '';
    setTimeout(toggleButtons, 3000);
  }
});


// 00000000 FUNZIONI 00000000

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function myNumbers() {
  setTimeout(remember, 30000);
  counter = nNumbers;
  for (let i = 0; i < nNumbers; i++) {
    numbers.push(randomNumber(0, 99));
  }
  document.getElementById('numbers').innerHTML = numbers;
}

function remember() {
  document.getElementById('numbers').innerHTML = '';
  document.getElementById('user-hud').classList.toggle('hidden');
  document.getElementById('input-label').innerHTML = `Insert the ${counter} numbers`;
}

function resetGame() {
  numbers = [];
  userNumber = [];
  guessed = [];
  counter = 0;
  toggleButtons();
  document.getElementById('rules').innerHTML = `
    <span class="rules">RULES</span> <br>
    Some numbers will appear soon, you have 30 seconds to remember as much as you can!` ;
}

function toggleButtons() {
  document.getElementById('end').innerHTML = '';
  const buttons = document.getElementsByClassName('difficulty');
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle('hidden-btn');
  };
}
