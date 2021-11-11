"use strict";
exports.__esModule = true;
var _eventListen;
(function (_eventListen) {
    _eventListen[_eventListen["KeyDown"] = 0] = "KeyDown";
    _eventListen[_eventListen["KeyUp"] = 1] = "KeyUp";
})(_eventListen || (_eventListen = {}));
var KeyBoardManager = /** @class */ (function () {
    function KeyBoardManager(inputManger) {
        this.arrayEventListen = [];
        this.input = inputManger;
    }
    KeyBoardManager.prototype.addKeyDown = function (key, callback) {
        var functionKeyDown = function (e) {
            if (e.key === key) {
                callback();
            }
        };
        window.addEventListener("keydown", functionKeyDown, false);
        this.arrayEventListen.push({
            type: _eventListen.KeyDown,
            "function": functionKeyDown
        });
    };
    KeyBoardManager.prototype.addKeyUp = function (key, callback) {
        var functionKeyUp = function (e) {
            if (e.key === key) {
                callback();
            }
        };
        window.addEventListener("keyup", functionKeyUp, false);
        this.arrayEventListen.push({
            type: _eventListen.KeyUp,
            "function": functionKeyUp
        });
    };
    KeyBoardManager.prototype.destroy = function () {
        if (this.arrayEventListen.length > 0) {
            this.arrayEventListen.forEach(function (_e) {
                if (_e.type === _eventListen.KeyDown) {
                    window.removeEventListener("keydown", _e["function"], false);
                }
                else {
                    window.removeEventListener("keyup", _e["function"], false);
                }
            });
        }
    };
    return KeyBoardManager;
}());
exports["default"] = KeyBoardManager;
