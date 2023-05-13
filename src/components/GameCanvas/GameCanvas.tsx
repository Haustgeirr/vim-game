import React, { useEffect } from 'react';
import type P5 from 'p5';
import dynamic from 'next/dynamic';
import { initInputBindings } from '@/input/bindings';

// import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

const CELL_SIZE = 32;

function calcGrid(windowWidth: number, windowHeight: number, cellSize: number) {
  function calcCellsInDimension(dimension: number) {
    const cells = Math.floor(dimension / cellSize);
    const rem = dimension % cellSize;

    return rem === 0 ? cells - 1 : cells;
  }

  const cellsX = calcCellsInDimension(windowWidth);
  const cellsY = calcCellsInDimension(windowHeight);

  return {
    cellsX,
    cellsY,
    width: cellsX * cellSize,
    height: cellsY * cellSize,
  };
}

const GameCanvas = () => {
  useEffect(() => {
    document.addEventListener('keydown', initInputBindings);

    return () => {
      document.removeEventListener('keydown', initInputBindings);
    };
  }, []);

  const { cellsX, cellsY, width, height } = calcGrid(window.innerWidth, window.innerHeight, CELL_SIZE);

  const setup = (p5: P5, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
  };

  const draw = (p5: P5) => {
    p5.background(50);
    p5.stroke(p5.color(100));
    p5.strokeWeight(1);
    for (let x = 0; x < cellsX; x++) {
      for (let y = 0; y < cellsY; y++) {
        p5.noFill();
        p5.rect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }

    p5.noStroke();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default GameCanvas;
