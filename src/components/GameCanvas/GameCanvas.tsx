import React from "react";
import type P5 from "p5";
import dynamic from "next/dynamic";

// import `react-p5` on client-side
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

type CanvasProps = {
  // Your component props
};

let x = 50;
const y = 50;

const GameCanvas = (props: CanvasProps) => {
  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
  };

  const draw = (p5: P5) => {
    p5.background(0);
    p5.ellipse(x, y, 70, 70);
    x++;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default GameCanvas;
