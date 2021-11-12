import type { IPosition, ISize } from "../../utils/type";
export default class BaseObject {
  position: IPosition = { x: 0, y: 0 };
  size: ISize = { width: 0, height: 0 };
  isVisible: boolean = false;
  key: number = Math.floor(Math.random() * Date.now());

  constructor() {}

  getPosition(): IPosition {
    return this.position;
  }
  setPosition(x: number, y: number) {
    this.position = { x, y };
  }
  getPositionX() {
    return this.position.x;
  }
  setPositionX(x: number) {
    this.position.x = x;
  }
  getPositionY(): number {
    return this.position.y;
  }
  setPositionY(y: number): void {
    this.position.y = y;
  }

  getSize(): ISize {
    return this.size;
  }
  setSize(width: number, height: number) {
    this.size = { width, height };
  }
  getWidth(): number {
    return this.size.width;
  }
  setWidth(width: number): void {
    this.size.width = width;
  }
  getHeight(): number {
    return this.size.height;
  }
  setHeight(height: number): void {
    this.size.height = height;
  }

  setIsVisible(isVisible: boolean): void {
    this.isVisible = isVisible;
  }
  getIsVisible(): boolean {
    return this.isVisible;
  }

  //setKey() {}
  getKey(): number {
    return this.key;
  }
}
