class Player {
  id = 0;
  globalScore = 0;
  roundScore = 0;
  globalDom;
  roundDom;

  constructor(id) {
    this.id = id;
    console.log("Joueur " + this.id + " connecté");
  }

  changeGlobalScore(score) {
    this.globalDom.innerHTML = score;
    this.globalScore = score;
  }

  changeRoundScore(score) {
    this.roundDom.innerHTML = score;
    this.roundScore = score;
  }
}
