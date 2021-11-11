import RectangleObject from "../GameEngine/GameObject/shape/RectangleObject";
import TextObject from "../GameEngine/GameObject/text/TextObject";
import Game from "../GameEngine/Game/Game";
import Scene from "../GameEngine/Scenes/Scene";
import ImageSpriteObject from "../GameEngine/GameObject/image/ImageSpriteObject";

export default class ScenesOver extends Scene {
  bgGameOver: RectangleObject = new RectangleObject();
  btnRestart: ImageSpriteObject = new ImageSpriteObject();
  txtGameOver: ImageSpriteObject = new ImageSpriteObject();
  textScore: TextObject = new TextObject();
  textHeightScore: TextObject = new TextObject();
  score: number = 0;
  heightScore: number = 0;

  constructor(game: Game) {
    super("over", game);
  }
  init(data: any) {
    this.score = data.score;
    this.heightScore = data.heightScore;
  }

  preload() {
    const frameInSprite = [
      {
        key: "btnRestart",
        sourcePosition: { x: 0, y: 0 },
        sourceSize: {
          width: 75,
          height: 70,
        },
      },
      {
        key: "txtGameOver",
        sourcePosition: { x: 955, y: 25 },
        sourceSize: {
          width: 380,
          height: 30,
        },
      },
    ];
    this.game.load.addConfigImageSprite("mainSprite", frameInSprite);
  }
  create() {
    this.createBtnRestart();
    this.txtGameOver = this.game.add.imageSprite(
      250,
      110,
      270,
      20,
      "mainSprite",
      "txtGameOver"
    );
    this.createTextScore();
    this.createTextHeightScore();
    this.createEvent();
    this.bgGameOver = this.game.add.rectangular(
      0,
      0,
      800,
      400,
      "rgba(0,0,0,.2)"
    );
  }
  createBtnRestart() {
    this.btnRestart = this.game.add.imageSprite(
      350,
      150,
      70,
      60,
      "mainSprite",
      "btnRestart"
    );
  }
  createEvent() {
    this.game.input.mouse.addClick((e: MouseEvent) => {
      if (
        e.offsetX > 350 &&
        e.offsetX < 420 &&
        e.offsetY > 150 &&
        e.offsetY < 210
      ) {
        this.game.changeScenes("start");
      }
    });
  }
  createTextScore() {
    this.textScore = this.game.add.text(
      300,
      250,
      `Score: ${this.score} `,
      "Arial",
      20
    );
  }
  createTextHeightScore() {
    this.textHeightScore = this.game.add.text(
      300,
      280,
      `Hight Score: ${this.heightScore}`,
      "Arial",
      20
    );
  }
  update() {}
}
