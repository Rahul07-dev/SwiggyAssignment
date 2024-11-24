import SimpleAttackStrategy from "./gamingStrategies/Attack/simpleAttackStrategy.js";
import simpleDefenceStrategy from "./gamingStrategies/Defence/simpleDefenceStrategy.js";
import HealthBasedSPS from "./gamingStrategies/StartingPlayer/HealthBasedSPS.js";
import game from "./models/game.js";

class gameController{
    #player1
    #player2
    constructor(player1,player2)
    {
        this.#player1=player1;
        this.#player2=player2;
    }
    #steps=0;
    startGame(){
        const Game = new game(SimpleAttackStrategy,simpleDefenceStrategy);
        const startingPlayer=HealthBasedSPS.getStartingPlayer(this.#player1,this.#player2);
        console.log(startingPlayer.getName()+" started the game.")
        if(startingPlayer==this.#player2)
        {
            this.#player2 = this.#player1;
            this.#player1= startingPlayer;
        }
        let cplayers=[this.#player1,this.#player2];
        let index=0;
        while(true)
        {
            index=index%2;
            let gameOver= Game.move(cplayers[index],cplayers[(index+1)%2]);
            // let gameOver=Game.move(this.#player2,this.#player1);
            if(gameOver)
            {
                console.log("GAME OVER!!!");
                break;
            }
            index=(index+1)%2;
        }
    }
}

export default gameController;