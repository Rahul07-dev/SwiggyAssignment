
# 🥊 Tekken-Style Game: Swiggy Assignment  

A console-based Tekken-style game built using **Node.js**. This game allows players to attack and defend, with outcomes determined by random dice rolls. It implements the **Singleton** and **Strategy** design patterns for an efficient and scalable structure.

---

## 🚀 Features  

- **Dynamic Gameplay**: Players can attack or defend, and the dice rolls determine damage dealt or blocked.  
- **Design Patterns**:  
  - **Singleton**: Used for the dice to ensure a single instance for random number generation.  
  - **Strategy**: Allows flexibility and scalability in implementing actions like attacking and defending.  
- **Console-Based Interaction**: Easy-to-play with minimal setup.  

---

## 📋 How to Run  

### Prerequisites  

- **Node.js** installed on your system. Download it [here](https://nodejs.org/).

### Steps  

1. Clone the repository:  
   ```bash
   git clone <repository-url>
   cd tekken-style-game
   ```  

2. Install dependencies (if any are added later).  
   ```bash
   npm install
   ```  

3. Set up players in `index.js`:  
   ```javascript
   const player1 = new Player('Player 1');
   const player2 = new Player('Player 2');
   ```  

4. Run the game:  
   ```bash
   node index.js
   ```  

---

## 🎮 Gameplay Instructions  

1. Two players are created in `index.js`. You can name them as desired.  
2. Each turn, one player attacks while the other defends.  
3. The dice determines:  
   - Attack strength.  
   - Defense power.  
4. Players alternate until one player runs out of health points (HP).  
5. The game announces the winner at the end.  

---

## 🛠️ Design Patterns  

### 1. Singleton: `Dice`  

- Ensures that only one instance of the dice is created and used throughout the game.  
- Provides random values for attack and defense calculations.  

### 2. Strategy: `Player Actions`  

- Encapsulates different player behaviors like attacking and defending.  
- Makes it easy to add or modify player actions without changing the core game logic.  

---

## 📝 Example Output  

```text
Player 1 attacks Player 2 for 5 damage!
Player 2 defends, reducing damage by 3.
Player 2 takes 2 damage!

Player 2 attacks Player 1 for 4 damage!
Player 1 defends, reducing damage by 1.
Player 1 takes 3 damage!

Player 1 wins with 20 HP left!
```  

---

## 🛠️ Future Improvements  

- Add a **multiplayer mode**.  
- Implement **special moves** with unique effects.  
- Build a **web-based interface** for better visuals.  
- Add **items** like health potions and buffs.  
- Introduce **AI opponents** for single-player gameplay.  

---

## 👨‍💻 Author  

Made with ❤️ as part of a Swiggy assignment. Feel free to reach out with feedback, issues, or suggestions.  

---

## 📜 License  

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute.  
