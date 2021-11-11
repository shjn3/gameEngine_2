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
  init(data?: any) {}
  active() {
    this.create();
  }
  preload() {}
  create() {}
  update() {}
  collectionDetection(player: BaseObject, obstacles: BaseObject) {
    if (player && obstacles) {
      let playerSize = player.size,
        playerPosition = player.position,
        obstaclesSize = obstacles.size,
        obstaclesPosition = obstacles.position;
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
