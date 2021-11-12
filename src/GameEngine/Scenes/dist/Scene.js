"use strict";
exports.__esModule = true;
var Scene = /** @class */ (function () {
    function Scene(config, game) {
        this.isVisible = false;
        this.nameScene = config;
        this.game = game;
        this.preload();
    }
    Scene.prototype.init = function (data) { };
    Scene.prototype.active = function () {
        this.create();
    };
    Scene.prototype.preload = function () { };
    Scene.prototype.create = function () { };
    Scene.prototype.update = function () { };
    Scene.prototype.collectionDetection = function (player, obstacles) {
        if (player && obstacles) {
            var playerSize = player.getSize(), playerPosition = player.getPosition(), obstaclesSize = obstacles.getSize(), obstaclesPosition = obstacles.getPosition();
            if (playerPosition.x < obstaclesPosition.x + obstaclesSize.width &&
                playerPosition.x + playerSize.width > obstaclesPosition.x &&
                playerPosition.y < obstaclesPosition.y + obstaclesSize.height &&
                playerPosition.y + playerSize.height > obstaclesPosition.y) {
                return true;
            }
        }
        return false;
    };
    return Scene;
}());
exports["default"] = Scene;
