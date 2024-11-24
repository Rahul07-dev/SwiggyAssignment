import Game from "../models/game";

const mockDice = {
  roll: jest.fn(),
};

const mockAttackStrategy = {
  calculateDamage: jest.fn(),
};

const mockDefenceStrategy = {
  calculateDefence: jest.fn(),
};

const mockPlayer = (name, health, attack, strength) => ({
  getName: () => name,
  getHealth: () => health,
  updateHealth: jest.fn(),
  getAttack: () => attack,
  getStrength: () => strength,
});

describe("Game class", () => {
  let game;
  let player1;
  let player2;

  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    game = new Game(mockAttackStrategy, mockDefenceStrategy, mockDice);
    player1 = mockPlayer("Player1", 100, 20, 15);
    player2 = mockPlayer("Player2", 100, 18, 12);
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("should initialize correctly", () => {
    expect(game).toBeDefined();
  });

  it("should call dice roll and strategies during move", () => {
    mockDice.roll.mockReturnValue(4);
    mockAttackStrategy.calculateDamage.mockReturnValue(30);
    mockDefenceStrategy.calculateDefence.mockReturnValue(10);

    game.move(player1, player2);

    expect(mockAttackStrategy.calculateDamage).toHaveBeenCalledWith(
      player1.getAttack(),
      4
    );
    expect(mockDefenceStrategy.calculateDefence).toHaveBeenCalledWith(
      player2.getStrength(),
      4
    );
    expect(player2.updateHealth).toHaveBeenCalledWith(80);
  });

  it("should declare winner if defender health is 0", () => {
    mockDice.roll.mockReturnValue(4);
    mockAttackStrategy.calculateDamage.mockReturnValue(110);
    mockDefenceStrategy.calculateDefence.mockReturnValue(10);

    const gameOver = game.move(player1, player2);

    expect(gameOver).toBe(true);
    expect(player2.updateHealth).toHaveBeenCalledWith(0);
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("Player2 lost the match to Player1")
    );
  });

  it("should not allow moves if winner is already decided", () => {
    mockDice.roll.mockReturnValue(4);
    mockAttackStrategy.calculateDamage.mockReturnValue(110);
    mockDefenceStrategy.calculateDefence.mockReturnValue(10);

    game.move(player1, player2);
    const secondMove = game.move(player2, player1);

    expect(secondMove).toBeUndefined();
    expect(console.log).toHaveBeenCalledWith(
      expect.stringContaining("already won the match")
    );
  });

  it("should handle edge case: negative health correctly", () => {
    mockDice.roll.mockReturnValue(4);
    mockAttackStrategy.calculateDamage.mockReturnValue(200);
    mockDefenceStrategy.calculateDefence.mockReturnValue(10);

    game.move(player1, player2);

    expect(player2.updateHealth).toHaveBeenCalledWith(0);
  });
});
