import Game from "../Game/Game";
import BaseObject from "../GameObject/base/BaseObject";

export default class Scene {
  game: Game;
  nameScene: string;
  isVisible: boolean = false;
  constructor(config: string, game: Game) {
    this.nameScene = config;
    this.game = game;
    this.preload();
  }
  init(data?: any): void {}
  active(): void {
    this.create();
  }
  preload(): void {}
  create(): void {}
  update(): void {}
  collectionDetection(player: BaseObject, obstacles: BaseObject): boolean {
    if (player && obstacles) {
      let playerSize = player.getSize(),
        playerPosition = player.getPosition(),
        obstaclesSize = obstacles.getSize(),
        obstaclesPosition = obstacles.getPosition();
      if (
        playerPosition.x < obstaclesPosition.x + obstaclesSize.width &&
        playerPosition.x + playerSize.width > obstaclesPosition.x &&
        playerPosition.y < obstaclesPosition.y + obstaclesSize.height &&
        playerPosition.y + playerSize.height > obstaclesPosition.y
      ) {
        return true;
      }
    }
    return false;
  }
}
