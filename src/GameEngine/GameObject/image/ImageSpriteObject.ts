import Game from "../../Game/Game";
import type { IFrameInSprite, IPosition, ISize } from "../../utils/type";
import ImageObject from "./ImageObject";

export default class ImageSpriteObject extends ImageObject {
  frameInSprite: Array<IFrameInSprite>;
  sourcePosition: IPosition;
  sourceSize: ISize;
  game: Game;

  constructor(game: Game) {
    super();
    this.game = game;
    this.sourcePosition = { x: 0, y: 0 };
    this.sourceSize = { width: 0, height: 0 };
    this.frameInSprite = [];
  }
  setSourcePositionX(x: number) {
    this.sourcePosition.x = x;
  }

  // changeImageSprite(nameImage: string, keyFrame: string) {
  //   if (Load.SArraySpriteSheet.length > 0) {
  //     Load.SArraySpriteSheet.forEach((_e) => {
  //       if (_e.nameImage === nameImage) {
  //         _e.frameInSprite.forEach((__e) => {
  //           if (__e.key === keyFrame) {
  //             this.setSourcePosition(
  //               __e.sourcePosition.x,
  //               __e.sourcePosition.y
  //             );
  //             this.setSourceSize(__e.sourceSize.width, __e.sourceSize.height);
  //             this.setImage(_e.image);
  //           }
  //         });
  //       }
  //     });
  //   }
  // }
  setSourceHeight(height: number) {
    this.sourceSize.height = height;
  }
  getSourceHeight() {
    return this.sourceSize.height;
  }

  setSourceWidth(Width: number) {
    this.sourceSize.width = Width;
  }
  getSourceWidth() {
    return this.sourceSize.width;
  }

  setSourceSize(width: number, height: number) {
    this.sourceSize = {
      width,
      height,
    };
  }
  getSourceSize() {
    return this.sourceSize;
  }

  setSourcePosition(x: number, y: number) {
    this.sourcePosition = { x, y };
  }
  getSourcePosition() {
    return this.sourcePosition;
  }
  getFrameInSprite() {
    return JSON.parse(JSON.stringify(this.frameInSprite));
  }
  setFrameInSprite(frameInSprite: Array<IFrameInSprite>) {
    this.frameInSprite = JSON.parse(JSON.stringify(frameInSprite));
  }
  destroy() {
    this.game.arrayDrawImageSprite = this.game.arrayDrawImageSprite.filter(
      (_e) => _e.key !== this.key
    );
  }
}
