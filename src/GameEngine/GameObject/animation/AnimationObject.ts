import type {
  IConfigAnimation,
  IConfigImageAnimation,
  IImageAnimation,
  IFrameInSprite,
} from "../../utils/type";
import Game from "../../Game/Game";

export default class AnimationObject {
  game: Game;
  imageAnimation: IImageAnimation;
  nameAnimation: string = "";
  key: number;

  constructor(game: Game) {
    this.key = Math.floor(Math.random() * Date.now());
    this.imageAnimation = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      image: new Image(),
      frameInSprite: [],
      frames: [],
    };
    this.game = game;
  }

  create(configAnimation: IConfigAnimation) {
    const { key, frames, frameRate } = configAnimation;

    if (this.game.arrayImageSprite.length > 0) {
      let imageFromSpriteSheet = this.game.arrayImageSprite.filter(
        (_e) => _e.nameImage === frames.nameImage
      );
      if (imageFromSpriteSheet[0]) {
        let frameInSpriteOfAnimation: Array<IFrameInSprite> = [];
        let lengthFrames = frames.frames.length;
        if (lengthFrames > 0) {
          imageFromSpriteSheet[0].frameInSprite.forEach((_e) => {
            for (let i = 0; i < lengthFrames; i++) {
              if (_e.key === frames.frames[i]) {
                frameInSpriteOfAnimation.push(_e);
              }
            }
          });
        }
        if (frameInSpriteOfAnimation.length > 0) {
          this.game.arrayConfigAnimation.push({
            key,
            frameRate,
            frameInSpriteOfAnimation: frameInSpriteOfAnimation,
            image: imageFromSpriteSheet[0].image,
          });
        }
      }
    }
  }
}
