import Dice from "./Dice.js"

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
       if(this.#winner)
       {
        console.log(winner +"already won the match");
        return;
       }
       let attackerRoll= this.#dice.roll();
       let attackerAttack= attacker.getAttack();
       let defenderRoll= this.#dice.roll();
       let defenderStrength= defender.getStrength();
       let attackerDamage = this.#attackStrategy.calculateDamage(
         attackerAttack,
         attackerRoll
       );
       let defenceStrength = this.#defenceStrategy.calcuateDefence(
         defenderStrength,
         defenderRoll
       ); 
       let finalDefenderHealth= defender.getHealth()-(attackerDamage-defenceStrength);
       finalDefenderHealth=Math.max(0,finalDefenderHealth);
       defender.updateHealth(finalDefenderHealth);
       
       //GAME STATUS
       console.log(attacker.getName() + " ATTACKED "+ defender.getName());
       console.log("Attacker H:"+ attacker.getHealth());
       console.log("defender H:" + defender.getHealth());
       console.log(finalDefenderHealth);

       if(finalDefenderHealth==0)
       {
          console.log(defender+"lost the match to"+ attacker);
          this.#winner=attacker;
          this.#loser=defender;
          return true;
       }
       return false;
   }
}

export default game;