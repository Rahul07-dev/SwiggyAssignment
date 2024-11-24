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

    move(attacker, defender){
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

       const defHealth=defender.getHealth();
       let  finalDefenderHealth= defHealth-(attackerDamage-defenceStrength);
       finalDefenderHealth=Math.max(0,finalDefenderHealth);
       defender.updateHealth(finalDefenderHealth);
       
       //GAME STATUS
       console.log(
         attacker.getName() +
           "D: " +
           attackerRoll +
           " ATTACKED " +
           defender.getName() +
           "D: " +
           defenderRoll
       );
       console.log("Attacker H:"+ attacker.getHealth());
       console.log("defender H:" +defender.getHealth());

       if(finalDefenderHealth==0)
       {
          console.log(defender.getName()+" lost the match to "+ attacker.getName());
          this.#winner=attacker;
          this.#loser=defender;
          return true;
       }
       return false;
   }
}

export default game;