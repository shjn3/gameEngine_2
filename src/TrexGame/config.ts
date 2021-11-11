import ScenesStart from "./ScenesStart";
import ScenesPlay from "./ScenesPlay";
import ScenesOver from "./ScenesOver";
export const config = {
  width: 800,
  height: 400,
  canvasId: "canvas",
  scenes: [ScenesStart, ScenesPlay, ScenesOver],
};
