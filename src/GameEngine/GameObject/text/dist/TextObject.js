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
var TextObject = /** @class */ (function (_super) {
    __extends(TextObject, _super);
    function TextObject() {
        var _this = _super.call(this) || this;
        _this._text = "";
        _this._fontFamily = "Arial";
        _this._fontSize = 13;
        return _this;
    }
    TextObject.prototype.getText = function () {
        return this._text;
    };
    TextObject.prototype.setText = function (text) {
        this._text = text;
    };
    TextObject.prototype.getFontFamily = function () {
        return this._fontFamily;
    };
    TextObject.prototype.setFontFamily = function (fontFamily) {
        this._fontFamily = fontFamily;
    };
    TextObject.prototype.getFontSize = function () {
        return this._fontSize;
    };
    TextObject.prototype.setFontSize = function (fontSize) {
        this._fontSize = fontSize;
    };
    return TextObject;
}(BaseObject_1["default"]));
exports["default"] = TextObject;
