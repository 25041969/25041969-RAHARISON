const shop = document.getElementById('shopping');

const goToShop = () => {

   alert('Votre liste d\'achat');

}

shop.addEventListener('click', goToShop);

var button = document.getElementById('button')

function evenement() {

  alert('Vous avez cliqué sur le bouton');

}

button.addEventListener('click', evenement);

  var button = document.createElement('button');
  var textNode = document.createTextNode('Click');
  button.appendChild(textNode);
  button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
  componentHandler.upgradeElement(button);
  document.getElementById('container').appendChild(button);

  class Player {
    id = 0;
    globalScore = 0;
    roundScore = 0;
    globalDom;
    roundDom;
  
    constructor(id) {
      this.id = id;
      console.log("Joueur " + this.id + "connecté");
    }
  
    changeGlobalScore(score) {
      this.globalDom.innerHTML = score;
      this.globalScore = score;
    }
  
    changeRoundScore(score) {
      this.roundDom.innerHTML = score;
      this.roundScore = score;
    };
  };

  let playerTurn;
const dice = new Dice();
const player1 = new Player(1);
const player2 = new Player(2);
const newGameBtn = document.getElementById("new-game");
const rollDiceBtn = document.getElementById("roll-dice");
const holdBtn = document.getElementById("hold");
const diceScore = document.getElementById("dice");

newGameBtn.addEventListener('click', function(event) {
  newgame();
});

rollDiceBtn.addEventListener('click', function(event) {
  rollDice();
});

holdBtn.addEventListener('click', function(event) {
  hold();
});

function initgame() {
  player1.globalDom = document.getElementById("global-score-1");
  player1.roundDom = document.getElementById("round-score-1");
  player2.globalDom = document.getElementById("global-score-2");
  player2.roundDom = document.getElementById("round-score-2");
  newgame();
}

function newgame() {
  player1.changeGlobalScore(0);
  player1.changeRoundScore(0);
  player2.changeGlobalScore(0);
  player2.changeRoundScore(0);
  playerTurn = player1;
  console.log("new game start");
}

function rollDice() {
  const result = dice.roll();
  diceScore.innerHTML = result;
  playerTurn.changeRoundScore(playerTurn.roundScore + result);
}

function hold() {
  playerTurn.changeGlobalScore(playerTurn.globalScore + playerTurn.roundScore);
  playerTurn.changeRoundScore(0);
  if (playerTurn.id == player1.id) {
    playerTurn = player2;
  } else {
    playerTurn = player1;
  }
}

initgame();

class Dice {
  numbers = [1, 2, 3, 4, 5, 6];
  roll() {
    return this.numbers[Math.floor(Math.random() * this.numbers.length)];
  }
}
