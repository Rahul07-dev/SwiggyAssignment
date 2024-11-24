import AttackStrategy from "./AttackStrategy";

class SimpleAttackStrategy extends AttackStrategy{
    calculateDamage(attack,dieRoll)
    {
        return attack.dieRoll;
    }
}