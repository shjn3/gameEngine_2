import BaseObject from "../base/BaseObject";
export default class ImageObject extends BaseObject {
  nameImage: string;
  image: HTMLImageElement;
  constructor() {
    super();
    this.nameImage = "";
    this.image = new Image();
  }
  setImage(url: string | HTMLImageElement): void {
    typeof url === "string" ? (this.image.src = url) : (this.image = url);
  }
  getImage(): HTMLImageElement {
    return this.image;
  }
  setNameImage(nameImage: string): void {
    this.nameImage = nameImage;
  }
  getNameImage(): string {
    return this.nameImage;
  }
}
