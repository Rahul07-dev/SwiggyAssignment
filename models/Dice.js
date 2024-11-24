class Dice{
    #sides

    constructor(sides=6){
        if(Dice.instance){
            return Dice.instance;
        }
        this.#sides=sides;
        Dice.instance=this;
    }
    roll(){
        return Math.floor(Math.random()*this.#sides)+1;
    }
}