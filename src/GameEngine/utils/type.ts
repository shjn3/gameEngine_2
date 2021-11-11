import Scene from "../Scenes/Scene";

export type GameConfig = {
  width: number;
  height: number;
  canvasId: string;
  scenes: any[];
};

export type Position = {
  x: number;
  y: number;
};

export type Size = {
  width: number;
  height: number;
};

export interface IPosition {
  x: number;
  y: number;
}
export interface ISize {
  width: number;
  height: number;
}

export interface IFrameInSprite {
  key: string;
  sourcePosition: IPosition;
  sourceSize: ISize;
}

export interface IConfigAnimation {
  key: string;
  frames: {
    nameImage: string;
    frames: Array<string>;
  };
  frameRate: number;
}
export interface IConfigImageAnimation {
  key: string;
  frameInSpriteOfAnimation: Array<IFrameInSprite>;
  frameRate: number;
  image: HTMLImageElement;
}
export interface IImageAnimation {
  image: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  frameInSprite: Array<IFrameInSprite>;
  frames: Array<IFrameInSprite>;
}
