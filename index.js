import gameController from "./gameController.js";
import PlayerFactory from "./models/playerFactory.js";


const rahul= PlayerFactory.createPlayer("rahul",100,10,10);
const divyansh = PlayerFactory.createPlayer("divaynsh", 100, 100, 100);
const gc= new gameController(rahul,divyansh);

gc.startGame();


