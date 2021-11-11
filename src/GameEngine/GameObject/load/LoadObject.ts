import Game from "../../Game/Game";
import ImageObject from "../image/ImageObject";
import ImageSpriteObject from "../image/ImageSpriteObject";
import type { IFrameInSprite } from "../../utils/type";
export default class LoadObject {
  game: Game;
  constructor(game: Game) {
    this.game = game;
  }
  image(nameImage: string, url: string) {
    let _imageTemp = new ImageObject();
    _imageTemp.image.src = url;
    _imageTemp.nameImage = nameImage;
    this.game.arrayImage.push(_imageTemp);

    return _imageTemp;
  }
  imageSprite(
    nameImage: string,
    url: string,
    frameInSprite: Array<IFrameInSprite>
  ) {
    let _imageSpriteTemp = new ImageSpriteObject(this.game);
    _imageSpriteTemp.nameImage = nameImage;
    _imageSpriteTemp.image.src = url;
    _imageSpriteTemp.frameInSprite = frameInSprite;
    this.game.arrayImageSprite.push(_imageSpriteTemp);
  }
  addConfigImageSprite(
    nameImage: string,
    frameInSprite: Array<IFrameInSprite>
  ) {
    if (this.game.arrayImageSprite.length > 0) {
      this.game.arrayImageSprite.forEach((_e) => {
        if (_e.nameImage === nameImage) {
          _e.frameInSprite.push(...frameInSprite);
        }
      });
    }
  }
}
