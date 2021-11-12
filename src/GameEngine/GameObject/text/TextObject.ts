import BaseObject from "../base/BaseObject";
export default class TextObject extends BaseObject {
  private _text: string = "";
  private _fontFamily: string = "Arial";
  private _fontSize: number = 13;
  constructor() {
    super();
  }
  getText(): string {
    return this._text;
  }
  setText(text: string): void {
    this._text = text;
  }

  getFontFamily(): string {
    return this._fontFamily;
  }
  setFontFamily(fontFamily: string): void {
    this._fontFamily = fontFamily;
  }

  getFontSize(): number {
    return this._fontSize;
  }
  setFontSize(fontSize: number): void {
    this._fontSize = fontSize;
  }
}
