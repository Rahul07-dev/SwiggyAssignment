class Player{
    #name
    #health
    #strength
    #attack
  constructor(name,health,strength, attack){
    this.#name=name;
    this.#health=parseInt(health,10);
    this.#strength=parseInt(strength,10);
    this.#attack=parseInt(attack,10);
  }
  isAlive(){
    return this.#health>0;
  }
  updateHealth(health)
  {
    this.#health=Math.max(0,health);
  }
  getName(){
    return this.#name;
  }
  getHealth(){
    return this.#health;
  }
  getStrength(){
    return this.#strength;
  }
  getAttack()
  {
    return this.#attack;
  }
  getPlayerInfoJson(){
    return {
        name: this.#name,
        health: this.#health,
        strength: this.#strength,
        attack: this.#attack,
    }
  }
}

export default Player;