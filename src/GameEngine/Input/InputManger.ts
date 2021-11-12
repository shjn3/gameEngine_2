import { GameConfig } from "../utils/type";
import Game from "../Game/Game";
import KeyBoardManager from "./keyboard/KayBoardManager";
import MouseManager from "./mouse/MouseManger";

export default class InputManager {
  game: Game;
  config: GameConfig;
  keyboard: KeyBoardManager;
  mouse: MouseManager;
  constructor(game: Game, config: GameConfig) {
    this.game = game;
    this.config = config;
    this.keyboard = new KeyBoardManager(this);
    this.mouse = new MouseManager(this);
  }
  destroy(): void {
    this.keyboard.destroy();
    this.mouse.destroy();
  }

  update() {}
}
