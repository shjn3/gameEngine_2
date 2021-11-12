import ShapeObject from "./ShapeObject";
import type { ISize } from "../../utils/type";

interface IRectangle {
  size: ISize;
  color: string;
  isFillReact: boolean;
  isVisible: boolean;
  setSize(width: number, height: number): void;
  getSize(): ISize;
  getColor(): string;
  setColor(color: string): void;
  getIsFillReact(): boolean;
  setIsFillReact(isFillReact: boolean): void;
  setIsVisible(isVisible: boolean): void;
  getIsVisible(): boolean;
}
export default class RectangleObject extends ShapeObject implements IRectangle {
  size: ISize = { width: 0, height: 0 };
  color: string = "#fff";
  isFillReact: boolean = false;
  isVisible: boolean = false;
  constructor() {
    super();
  }

  setSize(width: number, height: number): void {
    this.size = { width, height };
  }
  getSize(): ISize {
    return this.size;
  }

  getColor(): string {
    return this.color;
  }
  setColor(color: string): void {
    this.color = color;
  }

  getIsFillReact(): boolean {
    return this.isFillReact;
  }
  setIsFillReact(isFillReact: boolean): void {
    this.isFillReact = isFillReact;
  }

  setIsVisible(isVisible: boolean): void {
    this.isVisible = isVisible;
  }
  getIsVisible(): boolean {
    return this.isVisible;
  }
}
