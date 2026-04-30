import React, { useEffect, useMemo, useRef, useState } from 'react';
import data from './map.snapshot.json' with { type: "json" };
import { cellId, walls } from './utils.js';

const rows = 100, cols = 100;
const cell_size = 50;

export function Map() {
  const ref = useRef<HTMLCanvasElement>(null);
  const canvas_width = rows * cell_size,
    canvas_height = cols * cell_size;


  
  const cells = useMemo(() => {
    const maze: number[][] = [];
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < cols; y++) {
        const cell = cellId(x, y);
        if (data[cell]) {
          if (maze[x] === undefined) {
            maze[x] = [];
          }
          maze[x][y] = data[cell].val;
        }

      }
    }

    return maze;
  }, [data]);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || !cells) {
      return;
    }
    const con = canvas.getContext('2d');
    if (!con) {
      return;
    }
    cells.forEach((v, x) => {
      if (!v) {
        return;
      }
      v.forEach((c, y) => {
        con.beginPath(); // Start a new path
        con.rect(cell_size * x + 2, cell_size * y + 2, cell_size - 4, cell_size - 4); // Add a rectangle to the current path
        con.fillStyle = 'silver';
        con.fill();

        const w = walls(c);

        //if (w.top === 0) {
          con.beginPath(); // Start a new path
          con.rect(cell_size * x, cell_size * y, cell_size, 2);
          con.fillStyle = w.top === 0 ? 'black' : 'silver';
          con.fill();
        //}

        //if (w.bottom === 0) {
          con.beginPath(); // Start a new path
          con.rect(cell_size * x, cell_size * y + cell_size - 2, cell_size, 2);
          con.fillStyle = w.bottom === 0 ? 'black' : 'silver';
          con.fill();
        //}

        //if (w.left === 0) {
          con.beginPath(); // Start a new path
          con.rect(cell_size * x, cell_size * y, 2, cell_size);
          con.fillStyle = w.left === 0 ? 'black' : 'silver';
          con.fill();
        //}

        //if (w.right === 0) {
          con.beginPath(); // Start a new path
          con.rect(cell_size * x + cell_size - 2, cell_size * y, 2, cell_size);
          con.fillStyle = w.right === 0 ? 'black' : 'silver';
          con.fill();
        //}
      });
    });
  }, [cells])

  return (<div>
    <canvas ref={ref} width={canvas_width} height={canvas_height} />
  </div>)
}