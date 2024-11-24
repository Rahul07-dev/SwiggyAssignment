import DefenceStrategy from "./DefenceStrategy.js";

class simpleDefenceStrategy extends DefenceStrategy{
    static  calcuateDefence(strength,dieRoll){
        return strength*dieRoll;
    }
}

export default simpleDefenceStrategy;