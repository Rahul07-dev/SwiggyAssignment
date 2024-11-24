class Player{
    #name
    #health
    #strength
    #attack
  constructor(name,health,strength, attack){
    this.#name=name;
    this.#health=health;
    this.#strength=strength;
    this.#attack=attack;
  }
  isAlive(){
    return this.#health>0;
  }
  updateHealth(health)
  {
    this.#health=health;
  }
  getName(){
    return this.#name;
  }
  getHealth(){
    return this.health;
  }
  getStrength(){
    return this.strength;
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