"use strict";
exports.__esModule = true;
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.position = { x: 0, y: 0 };
        this.size = { width: 0, height: 0 };
        this.isVisible = false;
        this.key = Math.floor(Math.random() * Date.now());
    }
    return BaseObject;
}());
exports["default"] = BaseObject;
