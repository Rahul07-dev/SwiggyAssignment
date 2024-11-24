import Player from "./Player.js";

class PlayerFactory{
    static createPlayer(name,health,strength,attack){
      return new Player(name,health,strength,attack);
    }
}

export default PlayerFactory;