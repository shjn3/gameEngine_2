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
var BaseObject_1 = require("../base/BaseObject");
var ImageObject = /** @class */ (function (_super) {
    __extends(ImageObject, _super);
    function ImageObject() {
        var _this = _super.call(this) || this;
        _this.nameImage = "";
        _this.image = new Image();
        return _this;
    }
    ImageObject.prototype.setImage = function (url) {
        typeof url === "string" ? (this.image.src = url) : (this.image = url);
    };
    ImageObject.prototype.getImage = function () {
        return this.image;
    };
    ImageObject.prototype.setNameImage = function (nameImage) {
        this.nameImage = nameImage;
    };
    ImageObject.prototype.getNameImage = function () {
        return this.nameImage;
    };
    return ImageObject;
}(BaseObject_1["default"]));
exports["default"] = ImageObject;
