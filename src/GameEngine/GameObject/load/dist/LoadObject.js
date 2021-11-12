"use strict";
exports.__esModule = true;
var ImageObject_1 = require("../image/ImageObject");
var ImageSpriteObject_1 = require("../image/ImageSpriteObject");
var LoadObject = /** @class */ (function () {
    function LoadObject(game) {
        this.game = game;
    }
    LoadObject.prototype.image = function (nameImage, url) {
        var _imageTemp = new ImageObject_1["default"]();
        _imageTemp.setImage(url);
        _imageTemp.setNameImage(nameImage);
        this.game.arrayImage.push(_imageTemp);
    };
    LoadObject.prototype.imageSprite = function (nameImage, url, frameInSprite) {
        var _imageSpriteTemp = new ImageSpriteObject_1["default"](this.game);
        _imageSpriteTemp.setNameImage(nameImage);
        _imageSpriteTemp.setImage(url);
        _imageSpriteTemp.setFrameInSprite(frameInSprite);
        this.game.arrayImageSprite.push(_imageSpriteTemp);
    };
    LoadObject.prototype.addConfigImageSprite = function (nameImage, frameInSprite) {
        if (this.game.arrayImageSprite.length > 0) {
            this.game.arrayImageSprite.forEach(function (_e) {
                var _a;
                if (_e.getNameImage() === nameImage) {
                    (_a = _e.frameInSprite).push.apply(_a, frameInSprite);
                }
            });
        }
    };
    return LoadObject;
}());
exports["default"] = LoadObject;
