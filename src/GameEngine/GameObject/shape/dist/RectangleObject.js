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
var ShapeObject_1 = require("./ShapeObject");
var RectangleObject = /** @class */ (function (_super) {
    __extends(RectangleObject, _super);
    function RectangleObject() {
        var _this = _super.call(this) || this;
        _this.size = { width: 0, height: 0 };
        _this.color = "#fff";
        _this.isFillReact = false;
        _this.isVisible = false;
        return _this;
    }
    RectangleObject.prototype.setSize = function (width, height) {
        this.size = { width: width, height: height };
    };
    RectangleObject.prototype.getSize = function () {
        return this.size;
    };
    RectangleObject.prototype.getColor = function () {
        return this.color;
    };
    RectangleObject.prototype.setColor = function (color) {
        this.color = color;
    };
    RectangleObject.prototype.getIsFillReact = function () {
        return this.isFillReact;
    };
    RectangleObject.prototype.setIsFillReact = function (isFillReact) {
        this.isFillReact = isFillReact;
    };
    RectangleObject.prototype.setIsVisible = function (isVisible) {
        this.isVisible = isVisible;
    };
    RectangleObject.prototype.getIsVisible = function () {
        return this.isVisible;
    };
    return RectangleObject;
}(ShapeObject_1["default"]));
exports["default"] = RectangleObject;
