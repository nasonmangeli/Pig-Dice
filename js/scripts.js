var diceRoll= function(){
  return Math.floor(Math.random()*6)+1
}

//Player constructor
 function Player(name, diceRoll, turnpoints, score){
   this.name = name;
   this.diceRoll = 0;
   this.turnpoints = 0;
   this.score = 0;
 }

 
