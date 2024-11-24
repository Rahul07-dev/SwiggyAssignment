class game{
    #dice
    #attackStrategy
    #defenceStrategy
    #winner
    #loser
   constructor(attackStrategy, defenceStrategy)
   {
    this.#dice=new Dice();
    this.#attackStrategy=attackStrategy;
    this.#defenceStrategy=defenceStrategy;
   }

    move(attacker,defender){
       if(winner)
       {
        console.log(winner +"already won the match");
        return;
       }
       let attacker= this.#dice.roll();
       let defender= this.#dice.roll();
       let attackerDamage= this.#attackStrategy.calculateDamage(); 100
       let defenceStrength= this.#defenceStrategy.calculateDamage();  10 
       let finalDefenderHeatlh= defender.getHeatlh()-(attackerDamage-defenceStrength);
       finalDefenderHeatlh=Math.min(0,finalDefenderHeatlh);
       defender.updateHealth(finalDefenderHeatlh);
       if(finalDefenderHeatlh==0)
       {
          console.log(defender+"lost the match to"+ attacker);
          winner=attacker;
          loser=defender;
          return true;
       }
       return false;
   }
}

export default game;