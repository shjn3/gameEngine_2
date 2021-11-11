"use strict";
exports.__esModule = true;
var AnimationObject = /** @class */ (function () {
    function AnimationObject(game) {
        this.nameAnimation = "";
        this.key = Math.floor(Math.random() * Date.now());
        this.imageAnimation = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            image: new Image(),
            frameInSprite: [],
            frames: []
        };
        this.game = game;
    }
    AnimationObject.prototype.create = function (configAnimation) {
        var key = configAnimation.key, frames = configAnimation.frames, frameRate = configAnimation.frameRate;
        if (this.game.arrayImageSprite.length > 0) {
            var imageFromSpriteSheet = this.game.arrayImageSprite.filter(function (_e) { return _e.nameImage === frames.nameImage; });
            if (imageFromSpriteSheet[0]) {
                var frameInSpriteOfAnimation_1 = [];
                var lengthFrames_1 = frames.frames.length;
                if (lengthFrames_1 > 0) {
                    imageFromSpriteSheet[0].frameInSprite.forEach(function (_e) {
                        for (var i = 0; i < lengthFrames_1; i++) {
                            if (_e.key === frames.frames[i]) {
                                frameInSpriteOfAnimation_1.push(_e);
                            }
                        }
                    });
                }
                if (frameInSpriteOfAnimation_1.length > 0) {
                    this.game.arrayConfigAnimation.push({
                        key: key,
                        frameRate: frameRate,
                        frameInSpriteOfAnimation: frameInSpriteOfAnimation_1,
                        image: imageFromSpriteSheet[0].image
                    });
                }
            }
        }
    };
    return AnimationObject;
}());
exports["default"] = AnimationObject;
