import game from "./models/game";

class gameController{
    #player1
    #player2
    constructor(player1,player2)
    {
        this.#player1=player1;
        this.player2=player2;
    }
    #steps=0;
    startGame(){
        const Game = new game();
        const startingPlayer=HealthBasedSPS(this.#player1,this.#player2);
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
            let gameOver=game.move(cplayers[index],cplayers[(index+1)%2]);
            if(gameOver)
            {
                console.log("GAME OVER!!!");
                break;
            }
            index++;
        }
    }
}