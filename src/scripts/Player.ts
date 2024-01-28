import type P5 from 'p5';

// we need to export a function from player that will set it's position
// this should be called on on every frame as part of update
// we should set the Player target position
// well prbably get the coordinate in exact terms of the letter grid

class Player {
  p5: P5;
  position: P5.Vector;
  targetPosition: P5.Vector;
  size: number;

  constructor(p5: P5, position: P5.Vector, size: number) {
    this.p5 = p5;
    this.position = position;
    this.targetPosition = position;
    this.size = size;
  }

  display(p5: P5): void {
    p5.rect(this.position.x, this.position.y, this.size, this.size);
  }

  update(): void {
    // if (keyIsDown(LEFT_ARROW)) {
    //   this.x -= this.speed;
    // } else if (keyIsDown(RIGHT_ARROW)) {
    //   this.x += this.speed;
    // }
    // if (keyIsDown(UP_ARROW)) {
    //   this.y -= this.speed;
    // } else if (keyIsDown(DOWN_ARROW)) {
    //   this.y += this.speed;
    // }
  }

  setTargetPosition(position: P5.Vector, relative?: boolean): void {
    if (relative) {
      this.targetPosition.add(position);
    } else {
      this.targetPosition = position;
    }
  }
}

export default Player;
