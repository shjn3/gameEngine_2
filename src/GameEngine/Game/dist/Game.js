"use strict";
exports.__esModule = true;
var CanvasRenderer_1 = require("../Rederer/CanvasRenderer");
var InputManger_1 = require("../Input/InputManger");
var AddObject_1 = require("../GameObject/add/AddObject");
var LoadObject_1 = require("../GameObject/load/LoadObject");
var AnimationObject_1 = require("../GameObject/animation/AnimationObject");
var Game = /** @class */ (function () {
    function Game(config) {
        var _this = this;
        this.arrayScenes = [];
        this.arrayImage = [];
        this.arrayDrawImage = [];
        this.arrayImageSprite = [];
        this.arrayDrawImageSprite = [];
        this.arrayConfigAnimation = [];
        this.arrayDrawImageAnimation = [];
        this.arrayDrawText = [];
        this.arrayDrawShape = [];
        this.indexScenesVisible = 0;
        this.animation = new AnimationObject_1["default"](this);
        this.renderer = new CanvasRenderer_1["default"](this, config);
        this.input = new InputManger_1["default"](this, config);
        this.add = new AddObject_1["default"](this);
        this.load = new LoadObject_1["default"](this);
        config.scenes.forEach(function (_e) {
            _this.arrayScenes.push(new _e(_this));
        });
        this.init();
    }
    Game.prototype.init = function () {
        this.arrayScenes[0].active();
        this.loop();
    };
    Game.prototype.loop = function () {
        var _this = this;
        this.input.update();
        this.arrayScenes[this.indexScenesVisible].update();
        this.renderer.render();
        window.requestAnimationFrame(function () { return _this.loop(); });
    };
    Game.prototype.changeScenes = function (nameScenes, data, reset) {
        var _this = this;
        if (reset === void 0) { reset = true; }
        if (this.arrayScenes.length > 1) {
            this.arrayScenes.forEach(function (_e, index) {
                if (_e.nameScene === nameScenes) {
                    if (_this.indexScenesVisible === index) {
                        return;
                    }
                    else {
                        if (reset) {
                            _this.arrayDrawImageSprite = [];
                            _this.arrayDrawImage = [];
                            _this.arrayDrawText = [];
                            _this.arrayDrawImageAnimation = [];
                            _this.arrayConfigAnimation = [];
                            _this.arrayDrawShape = [];
                        }
                        _this.input.destroy();
                        _this.indexScenesVisible = index;
                        if (data) {
                            _e.init(data);
                        }
                        _e.active();
                        return;
                    }
                }
            });
        }
    };
    return Game;
}());
exports["default"] = Game;
