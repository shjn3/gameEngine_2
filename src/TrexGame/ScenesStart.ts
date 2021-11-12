import Game from "../GameEngine/Game/Game";
import Scene from "../GameEngine/Scenes/Scene";

export default class ScenesStart extends Scene {
  constructor(game: Game) {
    super("start", game);
  }
  preload() {
    this.game.load.image("btnStart", "assets/PlayButton.png");
    const frameInSprite = [
      {
        key: "ground",
        sourcePosition: { x: 0, y: 100 },
        sourceSize: {
          width: 2400,
          height: 30,
        },
      },
      {
        key: "dinos",
        sourcePosition: { x: 75, y: 0 },
        sourceSize: {
          width: 100,
          height: 110,
        },
      },
    ];
    this.game.load.imageSprite(
      "mainSprite",
      "./assets/sprite.png",
      frameInSprite
    );
  }

  create() {
    this.game.add.text(320, 270, "Click to start", "Arial", 30);
    this.game.add.image(350, 150, 100, 100, "btnStart");
    this.game.add.imageSprite(0, 320, 1600, 30, "mainSprite", "ground");
    this.game.add.imageSprite(15, 282, 60, 70, "mainSprite", "dinos");
    this.game.input.mouse.addClick((e: MouseEvent) => this.handleClickStart(e));
  }

  handleClickStart(e: MouseEvent) {
    if (
      e.offsetX > 350 &&
      e.offsetX < 450 &&
      e.offsetY > 150 &&
      e.offsetY < 250
    ) {
      this.game.changeScenes("play");
    }
  }
}
