import BaseObject from "../base/BaseObject";
export default class TextObject extends BaseObject {
  _text: string = "";
  _fontFamily: string = "Arial";
  _fontSize: number = 13;
  constructor() {
    super();
  }
}
