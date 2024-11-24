import AttackStrategy from "./AttackStrategy.js";

class SimpleAttackStrategy extends AttackStrategy{
    static calculateDamage(attack,dieRoll)
    {
        return attack*dieRoll;
    }
}
export default SimpleAttackStrategy;