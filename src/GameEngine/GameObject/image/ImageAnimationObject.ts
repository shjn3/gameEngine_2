import Game from "../../Game/Game";
import type { IConfigImageAnimation } from "../../utils/type";
import BaseObject from "../base/BaseObject";

export default class ImageAnimationObject extends BaseObject {
  nameAnimation: string = "";
  indexFrame: number = 0;
  timer: number = 0;
  configAnimation: IConfigImageAnimation;
  game: Game;
  constructor(game: Game) {
    super();
    this.game = game;
    this.configAnimation = {
      key: "",
      frameRate: 60,
      frameInSpriteOfAnimation: [
        {
          key: "",
          sourcePosition: { x: 0, y: 0 },
          sourceSize: { width: 0, height: 0 },
        },
      ],
      image: new Image(),
    };
  }
  getTimer(): number {
    return this.timer;
  }
  setTimer(timer: number): void {
    this.timer = timer;
  }

  getIndexFrame(): number {
    return this.indexFrame;
  }
  setIndexFrame(indexFrame: number): void {
    if (this.configAnimation) {
      if (this.configAnimation.frameInSpriteOfAnimation.length > indexFrame)
        this.indexFrame = indexFrame;
    }
  }

  getNameAnimation(): string {
    return this.nameAnimation;
  }
  setNameAnimation(nameAnimation: string): void {
    this.nameAnimation = nameAnimation;
  }

  play(nameAnimation: string): void {
    if (this.nameAnimation !== nameAnimation) {
      this.isVisible = false;
      this.indexFrame = 0;
      let _tempConfigAnimation = this.game.arrayConfigAnimation.filter(
        (_e) => _e.key === nameAnimation
      );
      if (_tempConfigAnimation[0]) {
        let image = _tempConfigAnimation[0].image;
        this.configAnimation = JSON.parse(
          JSON.stringify(_tempConfigAnimation[0])
        );
        this.configAnimation.image = image;
        this.configAnimation = _tempConfigAnimation[0];
        this.isVisible = true;
        this.nameAnimation = nameAnimation;
      }
    }
  }

  destroy() {
    this.game.arrayDrawImageAnimation =
      this.game.arrayDrawImageAnimation.filter((_e) => _e.key !== this.key);
  }
}
