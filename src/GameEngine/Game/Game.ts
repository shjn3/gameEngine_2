import type { GameConfig, IConfigImageAnimation } from "../utils/type";
import CanvasRenderer from "../Rederer/CanvasRenderer";
import InputManager from "../Input/InputManger";
import Scene from "../Scenes/Scene";
import AddObject from "../GameObject/add/AddObject";
import TextObject from "../GameObject/text/TextObject";
import ImageObject from "../GameObject/image/ImageObject";
import LoadObject from "../GameObject/load/LoadObject";
import ImageSpriteObject from "../GameObject/image/ImageSpriteObject";
import ImageAnimationObject from "../GameObject/image/ImageAnimationObject";
import AnimationObject from "../GameObject/animation/AnimationObject";
import ShapeObject from "../GameObject/shape/ShapeObject";

export default class Game {
  renderer: CanvasRenderer;
  input: InputManager;
  arrayScenes: Array<Scene> = [];
  add: AddObject;
  load: LoadObject;
  animation: AnimationObject;

  arrayImage: ImageObject[] = [];
  arrayDrawImage: ImageObject[] = [];
  arrayImageSprite: ImageSpriteObject[] = [];
  arrayDrawImageSprite: ImageSpriteObject[] = [];
  arrayConfigAnimation: IConfigImageAnimation[] = [];
  arrayDrawImageAnimation: ImageAnimationObject[] = [];
  arrayDrawText: TextObject[] = [];

  arrayDrawShape: ShapeObject[] = [];

  indexScenesVisible: number = 0;
  constructor(config: GameConfig) {
    this.animation = new AnimationObject(this);
    this.renderer = new CanvasRenderer(this, config);
    this.input = new InputManager(this, config);
    this.add = new AddObject(this);
    this.load = new LoadObject(this);

    config.scenes.forEach((_e) => {
      this.arrayScenes.push(new _e(this));
    });
    this.init();
  }
  init(): void {
    this.arrayScenes[0].active();
    this.loop();
  }
  loop(): void {
    this.input.update();
    this.arrayScenes[this.indexScenesVisible].update();
    this.renderer.render();
    window.requestAnimationFrame(() => this.loop());
  }
  changeScenes(nameScenes: string, data?: any, reset: boolean = true): void {
    if (this.arrayScenes.length > 1) {
      this.arrayScenes.forEach((_e, index) => {
        if (_e.nameScene === nameScenes) {
          if (this.indexScenesVisible === index) {
            return;
          } else {
            if (reset) {
              this.arrayDrawImageSprite = [];
              this.arrayDrawImage = [];
              this.arrayDrawText = [];
              this.arrayDrawImageAnimation = [];
              this.arrayConfigAnimation = [];
              this.arrayDrawShape = [];
            }
            this.input.destroy();
            this.indexScenesVisible = index;
            if (data) {
              _e.init(data);
            }
            _e.active();
            return;
          }
        }
      });
    }
  }
}
