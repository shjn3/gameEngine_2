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
        _imageTemp.image.src = url;
        _imageTemp.nameImage = nameImage;
        this.game.arrayImage.push(_imageTemp);
        return _imageTemp;
    };
    LoadObject.prototype.imageSprite = function (nameImage, url, frameInSprite) {
        var _imageSpriteTemp = new ImageSpriteObject_1["default"](this.game);
        _imageSpriteTemp.nameImage = nameImage;
        _imageSpriteTemp.image.src = url;
        _imageSpriteTemp.frameInSprite = frameInSprite;
        this.game.arrayImageSprite.push(_imageSpriteTemp);
    };
    LoadObject.prototype.addConfigImageSprite = function (nameImage, frameInSprite) {
        if (this.game.arrayImageSprite.length > 0) {
            this.game.arrayImageSprite.forEach(function (_e) {
                var _a;
                if (_e.nameImage === nameImage) {
                    (_a = _e.frameInSprite).push.apply(_a, frameInSprite);
                }
            });
        }
    };
    return LoadObject;
}());
exports["default"] = LoadObject;
