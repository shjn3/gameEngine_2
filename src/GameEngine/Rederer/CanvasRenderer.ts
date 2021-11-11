import { GameConfig } from "../utils/type";
import Game from "../Game/Game";
import RectangleObject from "../GameObject/shape/RectangleObject";

export default class CanvasRenderer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  game: Game;
  constructor(game: Game, config: GameConfig) {
    this.game = game;
    const { width, height, canvasId } = config;
    this.canvas = <HTMLCanvasElement>document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D;
    this.canvas.width = width;
    this.canvas.height = height;
  }
  render() {
    this.clearCtx();
    this.draw();
  }
  clearCtx() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  draw() {
    this.clearCtx();

    this.drawImage();
    this.drawImageSprite();
    this.drawImageAnimation();
    this.drawText();
    this.drawShape();
  }
  drawText() {
    if (this.game.arrayDrawText.length > 0) {
      this.game.arrayDrawText.forEach((_e) => {
        let text = _e._text,
          size = _e._fontSize,
          font = _e._fontFamily,
          { x, y } = _e.position;
        this.ctx.beginPath();
        this.ctx.font = `${size}px ${font}`;
        this.ctx.fillText(`${text}`, x, y);
      });
    }
  }
  drawImage() {
    if (this.game.arrayDrawImage.length > 0) {
      this.game.arrayDrawImage.forEach((_e) => {
        if (_e.isVisible) {
          let _image = _e.image,
            { x, y } = _e.position,
            { width, height } = _e.size;
          this.ctx.beginPath();
          this.ctx.drawImage(_image, x, y, width, height);
        }
      });
    }
  }
  drawImageSprite() {
    if (this.game.arrayDrawImageSprite.length > 0) {
      this.game.arrayDrawImageSprite.forEach((_e) => {
        if (_e.isVisible) {
          let sourcePosition = _e.getSourcePosition(),
            sourceSize = _e.getSourceSize(),
            position = _e.position,
            size = _e.size,
            image = _e.image;
          this.ctx.beginPath();

          this.ctx.drawImage(
            image,
            sourcePosition.x,
            sourcePosition.y,
            sourceSize.width,
            sourceSize.height,
            position.x,
            position.y,
            size.width,
            size.height
          );
        }
      });
    }
  }
  drawImageAnimation() {
    if (this.game.arrayDrawImageAnimation.length > 0) {
      this.game.arrayDrawImageAnimation.forEach((_e) => {
        if (_e.isVisible) {
          let timer = _e.getTimer(),
            indexFrame = _e.getIndexFrame();
          timer++;
          if (timer > 1000 / _e.configAnimation.frameRate) {
            timer = 0;

            if (_e.configAnimation.frameInSpriteOfAnimation.length > 1) {
              if (
                indexFrame + 1 ===
                _e.configAnimation.frameInSpriteOfAnimation.length
              ) {
                _e.setIndexFrame(0);
              } else {
                _e.setIndexFrame(indexFrame + 1);
              }
            }
          }
          _e.setTimer(timer);
          let image = _e.configAnimation.image,
            sourcePosition =
              _e.configAnimation.frameInSpriteOfAnimation[_e.getIndexFrame()]
                .sourcePosition,
            sourceSize =
              _e.configAnimation.frameInSpriteOfAnimation[_e.getIndexFrame()]
                .sourceSize,
            position = _e.position,
            size = _e.size;
          this.ctx.drawImage(
            image,
            sourcePosition.x,
            sourcePosition.y,
            sourceSize.width,
            sourceSize.height,
            position.x,
            position.y,
            size.width,
            size.height
          );
        }
      });
    }
  }
  drawShape() {
    if (this.game.arrayDrawShape.length > 0) {
      this.game.arrayDrawShape.forEach((_e) => {
        if (_e instanceof RectangleObject) {
          if (_e.isVisible) {
            let position = _e.getPosition(),
              size = _e.getSize();
            this.ctx.beginPath();
            this.ctx.fillStyle = _e.color;
            this.ctx.fillRect(position.x, position.y, size.width, size.height);
            this.ctx.fillStyle = "#000";
          }
        }
      });
    }
  }
}
