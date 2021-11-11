import BaseObject from "../base/BaseObject";
export default class ImageObject extends BaseObject {
  nameImage: string;
  image: HTMLImageElement;
  constructor() {
    super();
    this.nameImage = "";
    this.image = new Image();
  }
}
