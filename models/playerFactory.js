import Player from "./Player";

class PlayerFactory{
    static createPlayer(name,health,strength,attack){
      return new Player(name,health,strength,attack);
    }
}