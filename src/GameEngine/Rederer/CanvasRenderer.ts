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
  render(): void {
    this.clearCtx();
    this.draw();
  }
  clearCtx(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  draw(): void {
    this.clearCtx();

    this.drawImage();
    this.drawImageSprite();
    this.drawImageAnimation();
    this.drawText();
    this.drawShape();
  }
  drawText(): void {
    if (this.game.arrayDrawText.length > 0) {
      this.game.arrayDrawText.forEach((_e) => {
        let text = _e.getText(),
          size = _e.getFontSize(),
          font = _e.getFontFamily(),
          { x, y } = _e.getPosition();
        this.ctx.beginPath();
        this.ctx.font = `${size}px ${font}`;
        this.ctx.fillText(`${text}`, x, y);
      });
    }
  }
  drawImage(): void {
    if (this.game.arrayDrawImage.length > 0) {
      this.game.arrayDrawImage.forEach((_e) => {
        if (_e.getIsVisible()) {
          let _image = _e.getImage(),
            { x, y } = _e.getPosition(),
            { width, height } = _e.getSize();
          this.ctx.beginPath();
          this.ctx.drawImage(_image, x, y, width, height);
        }
      });
    }
  }
  drawImageSprite(): void {
    if (this.game.arrayDrawImageSprite.length > 0) {
      this.game.arrayDrawImageSprite.forEach((_e) => {
        if (_e.getIsVisible()) {
          let sourcePosition = _e.getSourcePosition(),
            sourceSize = _e.getSourceSize(),
            position = _e.getPosition(),
            size = _e.getSize(),
            image = _e.getImage();
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
  drawImageAnimation(): void {
    if (this.game.arrayDrawImageAnimation.length > 0) {
      this.game.arrayDrawImageAnimation.forEach((_e) => {
        if (_e.getIsVisible()) {
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
            position = _e.getPosition(),
            size = _e.getSize();
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
  drawShape(): void {
    if (this.game.arrayDrawShape.length > 0) {
      this.game.arrayDrawShape.forEach((_e) => {
        if (_e instanceof RectangleObject) {
          if (_e.getIsVisible()) {
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
