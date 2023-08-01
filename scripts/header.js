const gameButton = document.querySelector('.new-game-button');
const newGameModal = document.querySelector('.new-game-modal');
const startGameButton = document.querySelector('.start-button');
const cancelButton = document.querySelectorAll('.cancel-button');
const continueButton = document.querySelector('.continue-button');
const playerNamesInput = document.querySelectorAll('.player-name');
const endGameModal = document.querySelector('.end-game-modal');
const endGameButton = document.querySelector('.end-button');
const winModal = document.querySelector('.win-modal');
const winningPlayer = document.querySelector('.winning-player');

let playerNames = [];
const playerNamesLS = JSON.parse(localStorage.getItem('playerNames'));

gameButton.addEventListener('click', () => {
  if (!gameState) {
    newGameModal.showModal();
    promptName();
  } else {
    endGameModal.showModal();
  }
});

startGameButton.addEventListener('click', () => {
  if (!collectPlayerName()) {
    newGameModal.close();
    gameButton.innerText = 'End Game';
    game.start();
  }
});

cancelButton.forEach((button) => {
  button.addEventListener('click', () => {
    newGameModal.close();
    endGameModal.close();
    winModal.close();
  });
});

continueButton.addEventListener('click', () => {
  game.continue();
});

endGameButton.addEventListener('click', () => {
  endGameModal.close();
  gameButton.innerText = 'New Game';
  game.end();
});

// functions

function collectPlayerName() {
  playerNamesInput.forEach((name, index) => {
    playerNames[index] = name.value;
  });

  console.log(playerNames);

  localStorage.setItem('playerNames', JSON.stringify(playerNames));
  return playerNames.some((e) => e === '');
}

function promptName() {
  playerNamesInput.forEach((name, index) => {
    name.value = playerNamesLS[index];
  });
}
