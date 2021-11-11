import InputManager from "../InputManger";

export default class MouseManager {
  private arrayOnClick: Array<(e: MouseEvent) => void> = [];
  input: InputManager;
  constructor(inputManger: InputManager) {
    this.input = inputManger;
  }
  addClick(callback: (e: MouseEvent) => void) {
    this.input.game.renderer.canvas.addEventListener("click", callback);
    this.arrayOnClick.push(callback);
  }
  destroy() {
    if (this.arrayOnClick.length > 0) {
      this.arrayOnClick.forEach((_e) => {
        this.input.game.renderer.canvas.removeEventListener("click", _e, false);
      });
    }
  }
}
