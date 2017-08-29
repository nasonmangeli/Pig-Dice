function resetFields() {
  $("#player1-name").val("");
  $("#player2-name").val("");
}


//Player constructor
 function Player(name, diceRoll, turnpoints, score){
   this.name = name;
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


// Winner Prototype
Player.prototype.winner = function(){
  if (this.score >=100 ) {
    alert("Yay!"+this.name+'wins!')
  }
}

$(document).ready(function() {
  $("#players").submit(function(event) {
    event.preventDefault();
    var player1 = $("#player1-name").val();
    var player2 = $("#player2-name").val();
    var gamer1 = new Player(player1);
    var gamer2 = new Player(player2);
    $('.gaming-console').show();
    $('#player1-window').show();

    $(".player1name").text(gamer1.name);
    $(".player2name").text(gamer2.name);
    resetFields();

//Player 1 roll
  $("button#player1Roll").click(function(event){
   $("#roll1").text(gamer1.rollDie());
   $("#turnPoints1").text(gamer1.turnpoints);
 });

//Player 2 roll
   $("button#player2Roll").click(function(event){
    $("#roll2").text(gamer2.rollDie());
    $("#turnPoints2").text(gamer2.turnpoints);
 });

 //Player1 hold
 $("#player1Hold").click(function() {
 $("#score1").text(gamer1.hold());
});

//Player2 hold
  $("#player2Hold").click(function() {
  $("#score2").text(gamer2.hold());
  });

  });
});
