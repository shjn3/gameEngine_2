"use strict";
exports.__esModule = true;
var TextObject_1 = require("../text/TextObject");
var ImageObject_1 = require("../image/ImageObject");
var ImageSpriteObject_1 = require("../image/ImageSpriteObject");
var ImageAnimationObject_1 = require("../image/ImageAnimationObject");
var RectangleObject_1 = require("../shape/RectangleObject");
var AddObject = /** @class */ (function () {
    function AddObject(game) {
        this.game = game;
    }
    AddObject.prototype.text = function (x, y, text, fontFamily, fontSize) {
        if (fontFamily === void 0) { fontFamily = "Arial"; }
        if (fontSize === void 0) { fontSize = 13; }
        var _textTemp = new TextObject_1["default"]();
        _textTemp.position = { x: x, y: y };
        _textTemp._fontFamily = fontFamily;
        _textTemp._fontSize = fontSize;
        _textTemp._text = text;
        this.game.arrayDrawText.push(_textTemp);
        return _textTemp;
    };
    AddObject.prototype.image = function (x, y, width, height, nameImage) {
        var _imageAddTemp = this.game.arrayImage.filter(function (_e) { return _e.nameImage === nameImage; });
        var temp = new ImageObject_1["default"]();
        if (_imageAddTemp[0]) {
            var image = _imageAddTemp[0].image;
            temp.nameImage = nameImage;
            temp.position = { x: x, y: y };
            temp.size = { width: width, height: height };
            temp.isVisible = true;
            temp.image = image;
            this.game.arrayDrawImage.push(temp);
        }
        return temp;
    };
    AddObject.prototype.imageSprite = function (x, y, width, height, nameImage, keyFrame) {
        var temp = new ImageSpriteObject_1["default"](this.game);
        var _imageSpriteAddTemp = this.game.arrayImageSprite.filter(function (_e) { return _e.nameImage === nameImage; });
        if (_imageSpriteAddTemp[0]) {
            if (_imageSpriteAddTemp[0].frameInSprite.length > 0) {
                var _imageSpriteConfigTemp = _imageSpriteAddTemp[0].frameInSprite.filter(function (_e) { return _e.key === keyFrame; });
                if (_imageSpriteConfigTemp[0]) {
                    temp.setFrameInSprite(_imageSpriteConfigTemp);
                    temp.setSourcePosition(_imageSpriteConfigTemp[0].sourcePosition.x, _imageSpriteConfigTemp[0].sourcePosition.y);
                    temp.setSourceSize(_imageSpriteConfigTemp[0].sourceSize.width, _imageSpriteConfigTemp[0].sourceSize.height);
                    temp.size = { width: width, height: height };
                    temp.position = { x: x, y: y };
                    temp.isVisible = true;
                    temp.image = _imageSpriteAddTemp[0].image;
                    this.game.arrayDrawImageSprite.push(temp);
                }
            }
        }
        return temp;
    };
    AddObject.prototype.spriteSheet = function (x, y, width, height) {
        var _imageAnimation = new ImageAnimationObject_1["default"](this.game);
        _imageAnimation.position = { x: x, y: y };
        _imageAnimation.size = { width: width, height: height };
        this.game.arrayDrawImageAnimation.push(_imageAnimation);
        return _imageAnimation;
    };
    AddObject.prototype.rectangular = function (x, y, width, height, color) {
        var temp = new RectangleObject_1["default"]();
        temp.setPosition(x, y);
        temp.setSize(width, height);
        temp.setColor(color);
        temp.setIsVisible(true);
        this.game.arrayDrawShape.push(temp);
        return temp;
    };
    return AddObject;
}());
exports["default"] = AddObject;
