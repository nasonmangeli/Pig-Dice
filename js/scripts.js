function resetFields() {
  $("input#player1-userName").val("");
  $("input#player2-userName").val("");
}


//Player constructor
 function Player(name, diceRoll, turnpoints, score){
   this.name = name;
   this.diceRoll = 0;
   this.turnpoints = 0;
   this.score = 0;
 }


//Prototype for turn
Player.prototype.rollDie = function() {

  var diceRoll= Math.floor(Math.random()*6)+1

  if (diceRoll === 1) {
    this.turnpoints = 0;
    alert("Sorry!! You got a 1. Your turn is over!!!!!")
  } else {
    this.turnpoints += diceRoll;
  }
  return diceRoll;
};


//Prototype for hold
Player.prototype.hold = function() {
  this.score += this.turnpoints;
  this.totalScores = 0;
  return this.score;
};
