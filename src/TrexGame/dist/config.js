"use strict";
exports.__esModule = true;
exports.config = void 0;
var ScenesStart_1 = require("./ScenesStart");
var ScenesPlay_1 = require("./ScenesPlay");
var ScenesOver_1 = require("./ScenesOver");
exports.config = {
    width: 800,
    height: 400,
    canvasId: "canvas",
    scenes: [ScenesStart_1["default"], ScenesPlay_1["default"], ScenesOver_1["default"]]
};
