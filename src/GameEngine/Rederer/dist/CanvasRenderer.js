"use strict";
exports.__esModule = true;
var RectangleObject_1 = require("../GameObject/shape/RectangleObject");
var CanvasRenderer = /** @class */ (function () {
    function CanvasRenderer(game, config) {
        this.game = game;
        var width = config.width, height = config.height, canvasId = config.canvasId;
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = width;
        this.canvas.height = height;
    }
    CanvasRenderer.prototype.render = function () {
        this.clearCtx();
        this.draw();
    };
    CanvasRenderer.prototype.clearCtx = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    CanvasRenderer.prototype.draw = function () {
        this.clearCtx();
        this.drawImage();
        this.drawImageSprite();
        this.drawImageAnimation();
        this.drawText();
        this.drawShape();
    };
    CanvasRenderer.prototype.drawText = function () {
        var _this = this;
        if (this.game.arrayDrawText.length > 0) {
            this.game.arrayDrawText.forEach(function (_e) {
                var text = _e._text, size = _e._fontSize, font = _e._fontFamily, _a = _e.position, x = _a.x, y = _a.y;
                _this.ctx.beginPath();
                _this.ctx.font = size + "px " + font;
                _this.ctx.fillText("" + text, x, y);
            });
        }
    };
    CanvasRenderer.prototype.drawImage = function () {
        var _this = this;
        if (this.game.arrayDrawImage.length > 0) {
            this.game.arrayDrawImage.forEach(function (_e) {
                if (_e.isVisible) {
                    var _image = _e.image, _a = _e.position, x = _a.x, y = _a.y, _b = _e.size, width = _b.width, height = _b.height;
                    _this.ctx.beginPath();
                    _this.ctx.drawImage(_image, x, y, width, height);
                }
            });
        }
    };
    CanvasRenderer.prototype.drawImageSprite = function () {
        var _this = this;
        if (this.game.arrayDrawImageSprite.length > 0) {
            this.game.arrayDrawImageSprite.forEach(function (_e) {
                if (_e.isVisible) {
                    var sourcePosition = _e.getSourcePosition(), sourceSize = _e.getSourceSize(), position = _e.position, size = _e.size, image = _e.image;
                    _this.ctx.beginPath();
                    _this.ctx.drawImage(image, sourcePosition.x, sourcePosition.y, sourceSize.width, sourceSize.height, position.x, position.y, size.width, size.height);
                }
            });
        }
    };
    CanvasRenderer.prototype.drawImageAnimation = function () {
        var _this = this;
        if (this.game.arrayDrawImageAnimation.length > 0) {
            this.game.arrayDrawImageAnimation.forEach(function (_e) {
                if (_e.isVisible) {
                    var timer = _e.getTimer(), indexFrame = _e.getIndexFrame();
                    timer++;
                    if (timer > 1000 / _e.configAnimation.frameRate) {
                        timer = 0;
                        if (_e.configAnimation.frameInSpriteOfAnimation.length > 1) {
                            if (indexFrame + 1 ===
                                _e.configAnimation.frameInSpriteOfAnimation.length) {
                                _e.setIndexFrame(0);
                            }
                            else {
                                _e.setIndexFrame(indexFrame + 1);
                            }
                        }
                    }
                    _e.setTimer(timer);
                    var image = _e.configAnimation.image, sourcePosition = _e.configAnimation.frameInSpriteOfAnimation[_e.getIndexFrame()]
                        .sourcePosition, sourceSize = _e.configAnimation.frameInSpriteOfAnimation[_e.getIndexFrame()]
                        .sourceSize, position = _e.position, size = _e.size;
                    _this.ctx.drawImage(image, sourcePosition.x, sourcePosition.y, sourceSize.width, sourceSize.height, position.x, position.y, size.width, size.height);
                }
            });
        }
    };
    CanvasRenderer.prototype.drawShape = function () {
        var _this = this;
        if (this.game.arrayDrawShape.length > 0) {
            this.game.arrayDrawShape.forEach(function (_e) {
                if (_e instanceof RectangleObject_1["default"]) {
                    if (_e.isVisible) {
                        var position = _e.getPosition(), size = _e.getSize();
                        _this.ctx.beginPath();
                        _this.ctx.fillStyle = _e.color;
                        _this.ctx.fillRect(position.x, position.y, size.width, size.height);
                        _this.ctx.fillStyle = "#000";
                    }
                }
            });
        }
    };
    return CanvasRenderer;
}());
exports["default"] = CanvasRenderer;
