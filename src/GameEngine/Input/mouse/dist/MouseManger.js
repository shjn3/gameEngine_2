"use strict";
exports.__esModule = true;
var MouseManager = /** @class */ (function () {
    function MouseManager(inputManger) {
        this.arrayOnClick = [];
        this.input = inputManger;
    }
    MouseManager.prototype.addClick = function (callback) {
        this.input.game.renderer.canvas.addEventListener("click", callback);
        this.arrayOnClick.push(callback);
    };
    MouseManager.prototype.destroy = function () {
        var _this = this;
        if (this.arrayOnClick.length > 0) {
            this.arrayOnClick.forEach(function (_e) {
                _this.input.game.renderer.canvas.removeEventListener("click", _e, false);
            });
        }
    };
    return MouseManager;
}());
exports["default"] = MouseManager;
