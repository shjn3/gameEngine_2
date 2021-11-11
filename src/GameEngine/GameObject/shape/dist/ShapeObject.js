"use strict";
exports.__esModule = true;
var ShapeObject = /** @class */ (function () {
    function ShapeObject() {
        this.position = { x: 0, y: 0 };
    }
    ShapeObject.prototype.getPosition = function () {
        return this.position;
    };
    ShapeObject.prototype.setPosition = function (x, y) {
        this.position = { x: x, y: y };
    };
    ShapeObject.prototype.setPositionX = function (x) {
        this.position.x = x;
    };
    ShapeObject.prototype.getPositionX = function () {
        return this.position.x;
    };
    ShapeObject.prototype.setPositionY = function (y) {
        this.position.y = y;
    };
    ShapeObject.prototype.getPositionY = function () {
        return this.position.y;
    };
    return ShapeObject;
}());
exports["default"] = ShapeObject;
