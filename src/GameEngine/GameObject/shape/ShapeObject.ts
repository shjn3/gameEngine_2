import type { IPosition } from "../../utils/type";

export default class ShapeObject {
  position: IPosition = { x: 0, y: 0 };
  constructor() {}
  getPosition(): IPosition {
    return this.position;
  }
  setPosition(x: number, y: number): void {
    this.position = { x, y };
  }

  setPositionX(x: number): void {
    this.position.x = x;
  }
  getPositionX(): number {
    return this.position.x;
  }

  setPositionY(y: number): void {
    this.position.y = y;
  }
  getPositionY(): number {
    return this.position.y;
  }
}
