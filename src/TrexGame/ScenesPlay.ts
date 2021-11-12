import Game from "../GameEngine/Game/Game";
import Scene from "../GameEngine/Scenes/Scene";
import ImageObject from "../GameEngine/GameObject/image/ImageObject";
import ImageAnimationObject from "../GameEngine/GameObject/image/ImageAnimationObject";
import ImageSpriteObject from "../GameEngine/GameObject/image/ImageSpriteObject";

export default class ScenesPlay extends Scene {
  btnStart: ImageObject = new ImageObject();

  timer: number = 0;
  velocity: number = -3;
  jumpVelocity: number = -13;

  heightScore: number = 0;
  score: number = 0;

  gameOver: boolean = false;

  player: ImageAnimationObject = new ImageAnimationObject(this.game);

  maxCloud: number = 6;
  arrCloud: Array<ImageSpriteObject> = [];

  obstaclesCactus: Array<ImageSpriteObject> = [];
  obstaclesPTerodactyl: Array<ImageAnimationObject> = [];

  arrGround: Array<ImageSpriteObject> = [];

  arrayUnitScore: Array<ImageSpriteObject> = [];
  arrayUnitHeightScore: Array<ImageSpriteObject> = [];
  constructor(game: Game) {
    super("play", game);
  }
  preload() {
    const frameCloud = [
      {
        key: "cloud",
        sourcePosition: { x: 165, y: 0 },
        sourceSize: {
          width: 100,
          height: 30,
        },
      },
    ];
    const framePlayer = [
      {
        key: "run1",
        sourcePosition: { x: 1511, y: 0 },
        sourceSize: {
          width: 95,
          height: 110,
        },
      },
      {
        key: "run2",
        sourcePosition: { x: 1599, y: 0 },
        sourceSize: {
          width: 95,
          height: 110,
        },
      },

      {
        key: "duck1",
        sourcePosition: { x: 1862, y: 0 },
        sourceSize: {
          width: 120,
          height: 90,
        },
      },
      //cw: 70, ch: 58, cY: 320 cX:15
      {
        key: "duck2",
        sourcePosition: { x: 1982, y: 0 },
        sourceSize: {
          width: 120,
          height: 90,
        },
      },
      //cw: 60, ch:70, cY: 320 cx: 15
      {
        key: "jump",
        sourcePosition: { x: 1335, y: 0 },
        sourceSize: {
          width: 95,
          height: 110,
        },
      },
      {
        key: "die",
        sourcePosition: { x: 1335, y: 0 },
        sourceSize: {
          width: 95,
          height: 110,
        },
      },
    ];
    const frameObstacles = [
      {
        key: "cactusSmall",
        sourcePosition: { x: 616, y: 0 },
        sourceSize: {
          width: 34,
          height: 70,
        },
      },
      {
        key: "cactusLarge",
        sourcePosition: { x: 650, y: 0 },
        sourceSize: {
          width: 50,
          height: 80,
        },
      },
      {
        key: "PTerodactyl1",
        sourcePosition: { x: 260, y: 0 },
        sourceSize: {
          width: 90,
          height: 70,
        },
      },
      {
        key: "PTerodactyl2",
        sourcePosition: { x: 350, y: 0 },
        sourceSize: {
          width: 90,
          height: 70,
        },
      },
    ];
    const frameNumber = [
      {
        key: "numberZero",
        sourcePosition: { x: 952, y: 0 },
        sourceSize: {
          width: 20,
          height: 25,
        },
      },
      {
        key: "HI",
        sourcePosition: { x: 1152, y: 0 },
        sourceSize: {
          width: 40,
          height: 25,
        },
      },
    ];

    this.game.load.addConfigImageSprite("mainSprite", framePlayer);
    this.game.load.addConfigImageSprite("mainSprite", frameObstacles);
    this.game.load.addConfigImageSprite("mainSprite", frameCloud);
    this.game.load.addConfigImageSprite("mainSprite", frameNumber);
  }
  create() {
    this.createGround();
    //draw Animation
    this.createPlayer();
    //draw Obstacles
    this.createObstacles();
    this.createHeightScore();
    // this.createTextScore();
    this.createScore();
    this.createEvent();
  }
  //create Score
  createScore() {
    for (let i = 0; i < 5; i++) {
      this.arrayUnitScore.push(
        this.game.add.imageSprite(
          650 + 20 * i,
          20,
          15,
          15,
          "mainSprite",
          "numberZero"
        )
      );
    }
  }
  createHeightScore() {
    this.game.add.imageSprite(460, 20, 30, 15, "mainSprite", "HI");

    for (let i = 0; i < 5; i++) {
      this.arrayUnitHeightScore.push(
        this.game.add.imageSprite(
          500 + 20 * i,
          20,
          15,
          15,
          "mainSprite",
          "numberZero"
        )
      );
    }
    this.updateUnit(this.heightScore, this.arrayUnitHeightScore);
  }
  //create ground
  createGround() {
    this.arrGround.push(
      this.game.add.imageSprite(0, 320, 1600, 30, "mainSprite", "ground")
    );
    this.arrGround.push(
      this.game.add.imageSprite(1600, 320, 1600, 30, "mainSprite", "ground")
    );
  }
  //create Player
  createPlayer() {
    this.player = this.game.add.spriteSheet(15, 290, 60, 70);

    let configRunPlayer = {
      key: "RunPlayer",
      frames: {
        nameImage: "mainSprite",
        frames: ["run1", "run2"],
      },
      frameRate: 60,
    };

    let configDuckPlayer = {
      key: "DuckPlayer",
      frames: {
        nameImage: "mainSprite",
        frames: ["duck1", "duck2"],
      },
      frameRate: 60,
    };

    let configJumpPlayer = {
      key: "JumpPlayer",
      frames: {
        nameImage: "mainSprite",
        frames: ["jump"],
      },
      frameRate: 60,
    };

    let configDiePlayer = {
      key: "DiePlayer",
      frames: {
        nameImage: "mainSprite",
        frames: ["die"],
      },
      frameRate: 60,
    };

    this.game.animation.create(configRunPlayer);
    this.game.animation.create(configDuckPlayer);
    this.game.animation.create(configJumpPlayer);
    this.game.animation.create(configDiePlayer);
    this.player.play("RunPlayer");
  }
  //create Event
  createEvent() {
    this.game.input.keyboard.addKeyDown(" ", () => {
      if (this.player.nameAnimation === "RunPlayer")
        this.player.play("JumpPlayer");
    });
    this.game.input.keyboard.addKeyDown("ArrowUp", () => {
      if (this.player.nameAnimation === "RunPlayer")
        this.player.play("JumpPlayer");
    });
    this.game.input.keyboard.addKeyDown("ArrowDown", () => {
      if (this.player.nameAnimation === "RunPlayer") {
        this.player.setPositionY(295);
        this.player.setWidth(70);
        this.player.setHeight(55);
        this.player.play("DuckPlayer");
      }
    });
    this.game.input.keyboard.addKeyUp("ArrowDown", () => {
      if (this.player.nameAnimation === "DuckPlayer") {
        this.player.setPositionY(290);
        this.player.setWidth(60);
        this.player.setHeight(70);
        this.player.play("RunPlayer");
      }
    });
  }
  //create Obstacles
  createObstacles() {
    let configObstaclesPterodactyl = {
      key: "PTerodactyl",
      frames: {
        nameImage: "mainSprite",
        frames: ["PTerodactyl1", "PTerodactyl2"],
      },
      frameRate: 30,
    };
    let configObstaclesPterodactylOver = {
      key: "PTerodactylOver",
      frames: {
        nameImage: "mainSprite",
        frames: ["PTerodactyl1"],
      },
      frameRate: 30,
    };
    this.game.animation.create(configObstaclesPterodactyl);
    this.game.animation.create(configObstaclesPterodactylOver);
  }
  //======================================== update
  update() {
    if (!this.gameOver) {
      this.updateGround();
      this.updateObstacles();
      this.updateCloud();
      this.updatePlayerJump();
      this.updateScoreValue();
      this.updateUnit(this.score, this.arrayUnitScore);
      this.handleCollision();
    } else {
      this.updateOverGame();
    }
  }
  //update Image Unit for Score and hight score
  updateUnit(valueScore: number, arrayScore: Array<ImageSpriteObject>) {
    let temp = valueScore.toString().split("");
    let lengthTemp = temp.length;
    if (lengthTemp > 0) {
      for (let i = 0; i < lengthTemp - 1; i++) {
        arrayScore[i].setSourcePositionX(952);
      }
      for (let i = 5 - lengthTemp; i < 5; i++) {
        arrayScore[i].setSourcePositionX(
          952 + 20 * parseInt(temp[-5 + i + lengthTemp])
        );
      }
    }
  }
  //update Game Over
  updateOverGame() {
    this.updateHeightScoreValue();
    this.game.changeScenes(
      "over",
      {
        score: this.score,
        heightScore: this.heightScore,
      },
      false
    );
    this.gameOver = false;
    this.arrCloud = [];
    this.arrGround = [];
    if (this.obstaclesPTerodactyl.length > 0) {
      this.obstaclesPTerodactyl.forEach((_e) => {
        _e.play("PTerodactylOver");
      });
    }
    this.obstaclesPTerodactyl = [];
    this.obstaclesCactus = [];
    this.arrayUnitHeightScore = [];
    this.arrayUnitScore = [];
    this.score = 0;
    this.timer = 0;
  }
  //update Ground
  updateGround() {
    if (this.arrGround.length > 0) {
      this.arrGround[0].setPositionX(
        this.arrGround[0].getPositionX() + this.velocity
      );
      this.arrGround[1].setPositionX(
        this.arrGround[1].getPositionX() + this.velocity
      );
      if (this.arrGround[0].getPositionX() < -1600) {
        this.arrGround[0].destroy();
        this.arrGround.splice(0, 1);
        this.arrGround.push(
          this.game.add.imageSprite(1600, 320, 1600, 30, "mainSprite", "ground")
        );
      }
    }
  }
  //update HeightScore value
  updateHeightScoreValue() {
    this.heightScore = Math.max(this.heightScore, this.score);
  }
  //update Score value
  updateScoreValue() {
    this.timer++;
    if (this.timer > 50) {
      this.timer = 0;
      this.score++;
    }
  }
  //update Obstacles
  updateObstacles() {
    this.updatePositionObstacles();

    let sumPositionAndWidthLastObstacles =
      this.sumPositionAndWidthLastObstacles();

    let randomGap = this.getRandom(300, 600);

    if (sumPositionAndWidthLastObstacles + randomGap < 800) {
      let randomType = this.getRandom(1, 2); //1 cactus 2 pterodactyl
      switch (randomType) {
        case 1:
          let randomSize = this.getRandom(2, 3);
          if (randomSize === 1) {
            this.obstaclesCactus.push(
              this.game.add.imageSprite(
                800,
                295,
                30,
                45,
                "mainSprite",
                "cactusSmall"
              )
            );
          } else {
            this.obstaclesCactus.push(
              this.game.add.imageSprite(
                800,
                285,
                30,
                60,
                "mainSprite",
                "cactusLarge"
              )
            );
          }
          break;
        case 2:
          let positionYPterodactyl = [290, 265, 240];
          let randomIndex = this.getRandom(0, 2);
          this.obstaclesPTerodactyl.push(
            this.game.add.spriteSheet(
              800,
              positionYPterodactyl[randomIndex],
              50,
              30
            )
          );
          this.obstaclesPTerodactyl[this.obstaclesPTerodactyl.length - 1].play(
            "PTerodactyl"
          );

          break;
      }
    }
    this.decreaseObstacles();
  }
  //
  sumPositionAndWidthLastObstacles() {
    let lengthCactus = this.obstaclesCactus.length;
    let lengthPterodactyl = this.obstaclesPTerodactyl.length;
    if (lengthCactus > 0 && lengthPterodactyl > 0) {
      return Math.max(
        this.obstaclesCactus[lengthCactus - 1].getPositionX() +
          this.obstaclesCactus[lengthCactus - 1].getWidth(),
        this.obstaclesPTerodactyl[lengthPterodactyl - 1].getPositionX() +
          this.obstaclesPTerodactyl[lengthPterodactyl - 1].getWidth()
      );
    } else if (lengthCactus > 0 && lengthPterodactyl === 0) {
      return (
        this.obstaclesCactus[lengthCactus - 1].getPositionX() +
        this.obstaclesCactus[lengthCactus - 1].getWidth()
      );
    } else if (lengthCactus === 0 && lengthPterodactyl > 0) {
      return (
        this.obstaclesPTerodactyl[lengthPterodactyl - 1].getPositionX() +
        this.obstaclesPTerodactyl[lengthPterodactyl - 1].getWidth()
      );
    }
    return 0;
  }
  //delete Obstacles when Obstacles have x < 0
  decreaseObstacles() {
    if (this.obstaclesCactus.length > 0) {
      if (
        this.obstaclesCactus[0].getPositionX() +
          this.obstaclesCactus[0].getWidth() <
        0
      ) {
        this.obstaclesCactus[0].destroy();
        this.obstaclesCactus.splice(0, 1);
      }
    }

    if (this.obstaclesPTerodactyl.length > 0) {
      if (
        this.obstaclesPTerodactyl[0].getPositionX() +
          this.obstaclesPTerodactyl[0].getWidth() <
        0
      ) {
        this.obstaclesPTerodactyl[0].destroy();
        this.obstaclesPTerodactyl.splice(0, 1);
      }
    }
  }
  //
  updatePositionObstacles() {
    let lengthCactus = this.obstaclesCactus.length;
    let lengthPterodactyl = this.obstaclesPTerodactyl.length;

    if (lengthCactus > 0) {
      this.obstaclesCactus.forEach((_e) =>
        _e.setPositionX(this.velocity + _e.getPositionX())
      );
    }
    if (lengthPterodactyl > 0) {
      this.obstaclesPTerodactyl.forEach((_e) =>
        _e.setPositionX(this.velocity + _e.getPositionX() - 1)
      );
    }
  }
  //update Player Jump
  updatePlayerJump() {
    if (this.player.getNameAnimation() === "JumpPlayer") {
      this.jumpVelocity += 0.3 * 1.1;
      this.player.position.y += this.jumpVelocity;
      if (this.player.position.y > 290) {
        this.jumpVelocity = -13;
        this.player.position.y = 290;
        this.player.play("RunPlayer");
      }
    }
  }
  //
  updateCloud() {
    if (this.arrCloud.length > 0) {
      this.arrCloud.forEach((_e) =>
        _e.setPositionX(this.velocity + _e.getPositionX())
      );
      if (
        this.arrCloud.length < this.maxCloud &&
        this.arrCloud[this.arrCloud.length - 1].getPositionX() +
          this.arrCloud[this.arrCloud.length - 1].getWidth() <
          this.getRandom(500, 800)
      ) {
        let width = this.getRandom(40, 100);
        let y = this.getRandom(40, 250);
        let _cloud = this.game.add.imageSprite(
          800,
          y,
          width,
          width / 1.5,
          "mainSprite",
          "cloud"
        );
        this.arrCloud.push(_cloud);
      }
      if (this.arrCloud[0].getPositionX() + this.arrCloud[0].getWidth() < 0) {
        this.arrCloud[0].destroy();
        this.arrCloud.splice(0, 1);
      }
    } else {
      let width = this.getRandom(40, 100);
      let y = this.getRandom(40, 250);
      let _cloud = this.game.add.imageSprite(
        800,
        y,
        width,
        width / 1.5,
        "mainSprite",
        "cloud"
      );
      this.arrCloud.push(_cloud);
    }
  }
  //
  handleCollision() {
    if (this.obstaclesCactus.length > 0) {
      if (this.collectionDetection(this.player, this.obstaclesCactus[0])) {
        this.gameOver = true;
        this.player.play("DiePlayer");
      }
    }
    if (this.obstaclesPTerodactyl.length > 0) {
      if (this.collectionDetection(this.player, this.obstaclesPTerodactyl[0])) {
        this.gameOver = true;
        this.player.play("DiePlayer");
      }
    }
  }
  //
  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
