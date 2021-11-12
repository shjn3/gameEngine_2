import Game from "../../Game/Game";
import ImageObject from "../image/ImageObject";
import ImageSpriteObject from "../image/ImageSpriteObject";
import type { IFrameInSprite } from "../../utils/type";
export default class LoadObject {
  game: Game;
  constructor(game: Game) {
    this.game = game;
  }
  image(nameImage: string, url: string): void {
    let _imageTemp = new ImageObject();
    _imageTemp.setImage(url);
    _imageTemp.setNameImage(nameImage);
    this.game.arrayImage.push(_imageTemp);
  }
  imageSprite(
    nameImage: string,
    url: string,
    frameInSprite: Array<IFrameInSprite>
  ): void {
    let _imageSpriteTemp = new ImageSpriteObject(this.game);
    _imageSpriteTemp.setNameImage(nameImage);
    _imageSpriteTemp.setImage(url);
    _imageSpriteTemp.setFrameInSprite(frameInSprite);
    this.game.arrayImageSprite.push(_imageSpriteTemp);
  }
  addConfigImageSprite(
    nameImage: string,
    frameInSprite: Array<IFrameInSprite>
  ): void {
    if (this.game.arrayImageSprite.length > 0) {
      this.game.arrayImageSprite.forEach((_e) => {
        if (_e.getNameImage() === nameImage) {
          _e.frameInSprite.push(...frameInSprite);
        }
      });
    }
  }
}
