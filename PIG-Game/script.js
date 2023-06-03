let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceEL = document.querySelector('.dice');
let current0EL = document.getElementById('current--0');
let current1EL = document.getElementById('current--1');
let scores,
  playing,
  currentScore,
  activePlayer = null;

const init = () => {
  scores = [0, 0];
  playing = true;
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEL.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init(); // initialize the game

// actions on roll dice button
btnRoll.addEventListener('click', (e) => {
  // generate a random dice roll
  if (!playing) return;
  const dice = generateRandomNumber();
  // display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    changePlayer();
  }
});

// action on hold button
btnHold.addEventListener('click', (e) => {
  if (!playing) return;
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    // finish the game
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    diceEL.classList.add('hidden');
    return;
  }
  // switch player
  currentScore = 0;
  changePlayer();
});

// action on new game button
btnNew.addEventListener('click', init);

// switch active player
function changePlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// generate random number for dice betweeen 1 - 6
function generateRandomNumber() {
  return Math.trunc(Math.random() * 6) + 1;
}
