import InputManager from "../InputManger";
enum _eventListen {
  KeyDown,
  KeyUp,
}
export default class KeyBoardManager {
  input: InputManager;
  arrayEventListen: Array<{
    type: _eventListen;
    function: (e: KeyboardEvent) => void;
  }> = [];
  constructor(inputManger: InputManager) {
    this.input = inputManger;
  }
  addKeyDown(key: string, callback: Function) {
    let functionKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
      }
    };
    window.addEventListener("keydown", functionKeyDown, false);

    this.arrayEventListen.push({
      type: _eventListen.KeyDown,
      function: functionKeyDown,
    });
  }
  addKeyUp(key: string, callback: Function) {
    let functionKeyUp = (e: KeyboardEvent) => {
      if (e.key === key) {
        callback();
      }
    };
    window.addEventListener("keyup", functionKeyUp, false);

    this.arrayEventListen.push({
      type: _eventListen.KeyUp,
      function: functionKeyUp,
    });
  }
  destroy() {
    if (this.arrayEventListen.length > 0) {
      this.arrayEventListen.forEach((_e) => {
        if (_e.type === _eventListen.KeyDown) {
          window.removeEventListener("keydown", _e.function, false);
        } else {
          window.removeEventListener("keyup", _e.function, false);
        }
      });
    }
  }
}
