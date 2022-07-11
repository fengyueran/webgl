import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// @ts-ignore: ignore next line
import { getWebGLContext, initShaders } from 'src/utils';

const Canvas = styled.canvas`
  background: #dad4d8;
`;

const g_points: number[] = []; // The array for the position of a mouse press

const click = (
  ev: MouseEvent,
  gl: any,
  canvas: HTMLCanvasElement,
  a_Position: any
) => {
  const x = ev.clientX; // x coordinate of a mouse pointer
  const y = ev.clientY; // y coordinate of a mouse pointer
  const rect = (ev.target as HTMLElement).getBoundingClientRect();

  const newX = (x - rect.left - canvas.width / 2) / (canvas.width / 2);
  const newY = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);
  // Store the coordinates to g_points array
  g_points.push(newX);
  g_points.push(newY);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  const len = g_points.length;

  for (let i = 0; i < len; i += 2) {
    // Pass the position of a point to a_Position constiable
    gl.vertexAttrib3f(a_Position, g_points[i], g_points[i + 1], 0.0);

    // Draw
    gl.drawArrays(gl.POINTS, 0, 1);
  }
};

var VSHADER_SOURCE = `
    attribute vec4 a_Position; // attribute variable
    void main() {
     gl_Position = a_Position;
     gl_PointSize = 40.0;
   }`;

// Fragment shader program
var FSHADER_SOURCE = `void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }`;
export const ClickedPoints = () => {
  const nodeRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = nodeRef.current;
    // Get the rendering context for WebGL
    const gl = getWebGLContext(canvas);
    if (!gl) {
      console.log('Failed to get the rendering context for WebGL');
      return;
    }

    // Initialize shaders
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
      console.log('Failed to intialize shaders.');
      return;
    }

    // // Get the storage location of a_Position
    const a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
      console.log('Failed to get the storage location of a_Position');
      return;
    }

    // Register function (event handler) to be called on a mouse press
    canvas!.onmousedown = function (ev) {
      click(ev, gl, canvas!, a_Position);
    };

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);
  }, []);

  return <Canvas ref={nodeRef} width="600px" height="700px" />;
};
