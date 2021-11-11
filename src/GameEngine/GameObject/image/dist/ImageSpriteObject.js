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
var ImageObject_1 = require("./ImageObject");
var ImageSpriteObject = /** @class */ (function (_super) {
    __extends(ImageSpriteObject, _super);
    function ImageSpriteObject() {
        var _this = _super.call(this) || this;
        _this.sourcePosition = { x: 0, y: 0 };
        _this.sourceSize = { width: 0, height: 0 };
        _this.frameInSprite = [];
        return _this;
    }
    ImageSpriteObject.prototype.setSourcePositionX = function (x) {
        this.sourcePosition.x = x;
    };
    // changeImageSprite(nameImage: string, keyFrame: string) {
    //   if (Load.SArraySpriteSheet.length > 0) {
    //     Load.SArraySpriteSheet.forEach((_e) => {
    //       if (_e.nameImage === nameImage) {
    //         _e.frameInSprite.forEach((__e) => {
    //           if (__e.key === keyFrame) {
    //             this.setSourcePosition(
    //               __e.sourcePosition.x,
    //               __e.sourcePosition.y
    //             );
    //             this.setSourceSize(__e.sourceSize.width, __e.sourceSize.height);
    //             this.setImage(_e.image);
    //           }
    //         });
    //       }
    //     });
    //   }
    // }
    ImageSpriteObject.prototype.setSourceHeight = function (height) {
        this.sourceSize.height = height;
    };
    ImageSpriteObject.prototype.getSourceHeight = function () {
        return this.sourceSize.height;
    };
    ImageSpriteObject.prototype.setSourceWidth = function (Width) {
        this.sourceSize.width = Width;
    };
    ImageSpriteObject.prototype.getSourceWidth = function () {
        return this.sourceSize.width;
    };
    ImageSpriteObject.prototype.setSourceSize = function (width, height) {
        this.sourceSize = {
            width: width,
            height: height
        };
    };
    ImageSpriteObject.prototype.getSourceSize = function () {
        return this.sourceSize;
    };
    ImageSpriteObject.prototype.setSourcePosition = function (x, y) {
        this.sourcePosition = { x: x, y: y };
    };
    ImageSpriteObject.prototype.getSourcePosition = function () {
        return this.sourcePosition;
    };
    ImageSpriteObject.prototype.getFrameInSprite = function () {
        return JSON.parse(JSON.stringify(this.frameInSprite));
    };
    ImageSpriteObject.prototype.setFrameInSprite = function (frameInSprite) {
        this.frameInSprite = JSON.parse(JSON.stringify(frameInSprite));
    };
    ImageSpriteObject.prototype.destroy = function () {
        // this.game.arrayDrawImageSprite = Add.SArrayDrawImageFromSprite.filter(
        //   (_e) => _e.key !== this.key
        // );
    };
    return ImageSpriteObject;
}(ImageObject_1["default"]));
exports["default"] = ImageSpriteObject;
