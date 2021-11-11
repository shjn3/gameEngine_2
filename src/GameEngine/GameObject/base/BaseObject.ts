import type { Position, Size } from "../../utils/type";
export default class BaseObject {
  position: Position = { x: 0, y: 0 };
  size: Size = { width: 0, height: 0 };
  isVisible: boolean = false;
  key: number = Math.floor(Math.random() * Date.now());
  constructor() {}
}
