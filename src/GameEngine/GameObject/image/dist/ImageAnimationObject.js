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
var BaseObject_1 = require("../base/BaseObject");
var ImageAnimationObject = /** @class */ (function (_super) {
    __extends(ImageAnimationObject, _super);
    function ImageAnimationObject(game) {
        var _this = _super.call(this) || this;
        _this.isVisible = false;
        _this.nameAnimation = "";
        _this.key = Math.floor(Math.random() * Date.now());
        _this.indexFrame = 0;
        _this.timer = 0;
        _this.game = game;
        _this.configAnimation = {
            key: "",
            frameRate: 60,
            frameInSpriteOfAnimation: [
                {
                    key: "",
                    sourcePosition: { x: 0, y: 0 },
                    sourceSize: { width: 0, height: 0 }
                },
            ],
            image: new Image()
        };
        return _this;
    }
    ImageAnimationObject.prototype.getTimer = function () {
        return this.timer;
    };
    ImageAnimationObject.prototype.setTimer = function (timer) {
        this.timer = timer;
    };
    ImageAnimationObject.prototype.getIndexFrame = function () {
        return this.indexFrame;
    };
    ImageAnimationObject.prototype.setIndexFrame = function (indexFrame) {
        if (this.configAnimation) {
            if (this.configAnimation.frameInSpriteOfAnimation.length > indexFrame)
                this.indexFrame = indexFrame;
        }
    };
    ImageAnimationObject.prototype.getKey = function () {
        return this.key;
    };
    ImageAnimationObject.prototype.setKey = function (key) {
        this.key = key;
    };
    ImageAnimationObject.prototype.getNameAnimation = function () {
        return this.nameAnimation;
    };
    ImageAnimationObject.prototype.setNameAnimation = function (nameAnimation) {
        this.nameAnimation = nameAnimation;
    };
    ImageAnimationObject.prototype.setIsVisible = function (isVisible) {
        this.isVisible = isVisible;
    };
    ImageAnimationObject.prototype.getIsVisible = function () {
        return this.isVisible;
    };
    ImageAnimationObject.prototype.play = function (nameAnimation) {
        if (this.nameAnimation !== nameAnimation) {
            this.isVisible = false;
            this.indexFrame = 0;
            var _tempConfigAnimation = this.game.arrayConfigAnimation.filter(function (_e) { return _e.key === nameAnimation; });
            if (_tempConfigAnimation[0]) {
                var image = _tempConfigAnimation[0].image;
                this.configAnimation = JSON.parse(JSON.stringify(_tempConfigAnimation[0]));
                this.configAnimation.image = image;
                this.configAnimation = _tempConfigAnimation[0];
                this.isVisible = true;
                this.nameAnimation = nameAnimation;
            }
        }
    };
    ImageAnimationObject.prototype.destroy = function () {
        var _this = this;
        this.game.arrayDrawImageAnimation =
            this.game.arrayDrawImageAnimation.filter(function (_e) { return _e.key !== _this.key; });
    };
    return ImageAnimationObject;
}(BaseObject_1["default"]));
exports["default"] = ImageAnimationObject;
