"use strict";
exports.__esModule = true;
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.position = { x: 0, y: 0 };
        this.size = { width: 0, height: 0 };
        this.isVisible = false;
        this.key = Math.floor(Math.random() * Date.now());
    }
    BaseObject.prototype.getPosition = function () {
        return this.position;
    };
    BaseObject.prototype.setPosition = function (x, y) {
        this.position = { x: x, y: y };
    };
    BaseObject.prototype.getPositionX = function () {
        return this.position.x;
    };
    BaseObject.prototype.setPositionX = function (x) {
        this.position.x = x;
    };
    BaseObject.prototype.getPositionY = function () {
        return this.position.y;
    };
    BaseObject.prototype.setPositionY = function (y) {
        this.position.y = y;
    };
    BaseObject.prototype.getSize = function () {
        return this.size;
    };
    BaseObject.prototype.setSize = function (width, height) {
        this.size = { width: width, height: height };
    };
    BaseObject.prototype.getWidth = function () {
        return this.size.width;
    };
    BaseObject.prototype.setWidth = function (width) {
        this.size.width = width;
    };
    BaseObject.prototype.getHeight = function () {
        return this.size.height;
    };
    BaseObject.prototype.setHeight = function (height) {
        this.size.height = height;
    };
    BaseObject.prototype.setIsVisible = function (isVisible) {
        this.isVisible = isVisible;
    };
    BaseObject.prototype.getIsVisible = function () {
        return this.isVisible;
    };
    //setKey() {}
    BaseObject.prototype.getKey = function () {
        return this.key;
    };
    return BaseObject;
}());
exports["default"] = BaseObject;
