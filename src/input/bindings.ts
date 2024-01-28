// we need a function to move the player a set amount of rows and columns
// this is so when we create functions we can return a coordinate based on a vim instruction

import type Player from '@/scripts/Player';
import type P5 from 'p5';

// TODO: exctend this to unity actions. We define a key and then specify down, press, up, longpress etc.
type KeyMap = { key: string; keyFn: () => void }[];

class Input {
  p5: P5;
  player: Player;
  keyDownMap: KeyMap;

  constructor(p5: P5, player: Player) {
    this.p5 = p5;
    this.player = player;
    this.keyDownMap = [
      { key: 'h', keyFn: () => this.setPlayerTarget(-1, 0, true) },
      { key: 'j', keyFn: () => this.setPlayerTarget(0, 1, true) },
      { key: 'k', keyFn: () => this.setPlayerTarget(0, -1, true) },
      { key: 'l', keyFn: () => this.setPlayerTarget(1, 0, true) },
    ];
  }

  setPlayerTarget(x: number, y: number, relative?: boolean) {
    this.player.setTargetPosition(this.p5.createVector(x, y), relative ?? false);
  }

  initKeydownBindings(event: KeyboardEvent) {
    this.keyDownMap.find(({ key, keyFn }) => {
      if (event.key === key) {
        keyFn();
        return true;
      }
    });
  }
}

export default Input;
