import StartingPlayerStrategy from "./StartingPlayerStrategy.js";

class HealthBasedSPS extends StartingPlayerStrategy{
     static getStartingPlayer(player1,player2)
     {
        if(player1.getHealth()<=player2.getHealth())
        {
          return player1;
        }
        return player2;
     }
}

export default HealthBasedSPS;