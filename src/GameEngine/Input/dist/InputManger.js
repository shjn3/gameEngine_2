"use strict";
exports.__esModule = true;
var KayBoardManager_1 = require("./keyboard/KayBoardManager");
var MouseManger_1 = require("./mouse/MouseManger");
var InputManager = /** @class */ (function () {
    function InputManager(game, config) {
        this.game = game;
        this.config = config;
        this.keyboard = new KayBoardManager_1["default"](this);
        this.mouse = new MouseManger_1["default"](this);
    }
    InputManager.prototype.destroy = function () {
        this.keyboard.destroy();
        this.mouse.destroy();
    };
    InputManager.prototype.update = function () { };
    return InputManager;
}());
exports["default"] = InputManager;
