import Game from "../../Game/Game";
import TextObject from "../text/TextObject";
import ImageObject from "../image/ImageObject";
import ImageSpriteObject from "../image/ImageSpriteObject";
import ImageAnimationObject from "../image/ImageAnimationObject";
import RectangleObject from "../shape/RectangleObject";

export default class AddObject {
  game: Game;

  constructor(game: Game) {
    this.game = game;
  }
  text(
    x: number,
    y: number,
    text: string,
    fontFamily: string = "Arial",
    fontSize: number = 13
  ): TextObject {
    let _textTemp = new TextObject();

    _textTemp.position = { x, y };
    _textTemp.setFontFamily(fontFamily);
    _textTemp.setFontSize(fontSize);
    _textTemp.setText(text);
    this.game.arrayDrawText.push(_textTemp);
    return _textTemp;
  }
  image(
    x: number,
    y: number,
    width: number,
    height: number,
    nameImage: string
  ): ImageObject {
    let _imageAddTemp = this.game.arrayImage.filter(
      (_e) => _e.nameImage === nameImage
    );
    let temp = new ImageObject();
    if (_imageAddTemp[0]) {
      let image = <HTMLImageElement>_imageAddTemp[0].image;
      temp.setNameImage(nameImage);
      temp.setPosition(x, y);
      temp.setSize(width, height);
      temp.setIsVisible(true);
      temp.setImage(image);
      this.game.arrayDrawImage.push(temp);
    }
    return temp;
  }
  imageSprite(
    x: number,
    y: number,
    width: number,
    height: number,
    nameImage: string,
    keyFrame: string
  ): ImageSpriteObject {
    let temp = new ImageSpriteObject(this.game);
    let _imageSpriteAddTemp = this.game.arrayImageSprite.filter(
      (_e) => _e.nameImage === nameImage
    );
    if (_imageSpriteAddTemp[0]) {
      if (_imageSpriteAddTemp[0].frameInSprite.length > 0) {
        let _imageSpriteConfigTemp =
          _imageSpriteAddTemp[0].frameInSprite.filter(
            (_e) => _e.key === keyFrame
          );
        if (_imageSpriteConfigTemp[0]) {
          temp.setFrameInSprite(_imageSpriteConfigTemp);
          temp.setSourcePosition(
            _imageSpriteConfigTemp[0].sourcePosition.x,
            _imageSpriteConfigTemp[0].sourcePosition.y
          );
          temp.setSourceSize(
            _imageSpriteConfigTemp[0].sourceSize.width,
            _imageSpriteConfigTemp[0].sourceSize.height
          );
          temp.setSize(width, height);
          temp.setPosition(x, y);
          temp.setIsVisible(true);
          temp.setImage(_imageSpriteAddTemp[0].image);
          this.game.arrayDrawImageSprite.push(temp);
        }
      }
    }
    return temp;
  }
  spriteSheet(
    x: number,
    y: number,
    width: number,
    height: number
  ): ImageAnimationObject {
    let _imageAnimation = new ImageAnimationObject(this.game);
    _imageAnimation.position = { x, y };
    _imageAnimation.size = { width, height };
    this.game.arrayDrawImageAnimation.push(_imageAnimation);
    return _imageAnimation;
  }
  rectangular(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ): RectangleObject {
    let temp = new RectangleObject();
    temp.setPosition(x, y);
    temp.setSize(width, height);
    temp.setColor(color);
    temp.setIsVisible(true);
    this.game.arrayDrawShape.push(temp);
    return temp;
  }
}
