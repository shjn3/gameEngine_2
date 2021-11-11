"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Scene_1 = require("../GameEngine/Scenes/Scene");
var GameStart = /** @class */ (function (_super) {
    __extends(GameStart, _super);
    function GameStart(game) {
        return _super.call(this, "start", game) || this;
    }
    GameStart.prototype.preload = function () {
        this.game.load.image("btnStart", "assets/PlayButton.png");
        var frameInSprite = [
            {
                key: "ground",
                sourcePosition: { x: 0, y: 100 },
                sourceSize: {
                    width: 2400,
                    height: 30
                }
            },
            {
                key: "dinos",
                sourcePosition: { x: 75, y: 0 },
                sourceSize: {
                    width: 100,
                    height: 110
                }
            },
        ];
        this.game.load.imageSprite("mainSprite", "./assets/sprite.png", frameInSprite);
    };
    GameStart.prototype.create = function () {
        // this.game.input.keyboard.addKeyDown("ArrowUp", () => console.log("abc"));
        this.game.add.text(320, 270, "Click to start", "Arial", 30);
        this.game.add.image(350, 150, 100, 100, "btnStart");
        this.game.add.imageSprite(0, 320, 1600, 30, "mainSprite", "ground");
        //draw dinos
        this.game.add.imageSprite(15, 282, 60, 70, "mainSprite", "dinos");
    };
    GameStart.prototype.handleClickStart = function (e) {
        if (e.offsetX > 350 &&
            e.offsetX < 450 &&
            e.offsetY > 150 &&
            e.offsetY < 250) {
            this.game.changeScenes("play");
        }
    };
    return GameStart;
}(Scene_1["default"]));
exports["default"] = GameStart;
