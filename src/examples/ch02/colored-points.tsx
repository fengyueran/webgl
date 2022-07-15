import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// @ts-ignore: ignore next line
import { getWebGLContext, initShaders } from 'src/utils';

const Canvas = styled.canvas`
  background: #dad4d8;
`;

const g_points: [number, number][] = []; // The array for the position of a mouse press
var g_colors: [number, number, number, number][] = [];
const click = (
  ev: MouseEvent,
  gl: any,
  canvas: HTMLCanvasElement,
  a_Position: any,
  u_FragColor: any
) => {
  const x = ev.clientX; // x coordinate of a mouse pointer
  const y = ev.clientY; // y coordinate of a mouse pointer
  const rect = (ev.target as HTMLElement).getBoundingClientRect();

  const newX = (x - rect.left - canvas.width / 2) / (canvas.width / 2);
  const newY = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);
  // Store the coordinates to g_points array

  g_points.push([newX, newY]);
  // Store the coordinates to g_points array
  if (newX >= 0.0 && newY >= 0.0) {
    // First quadrant
    g_colors.push([1.0, 0.0, 0.0, 1.0]); // Red
  } else if (newX < 0.0 && newY < 0.0) {
    // Third quadrant
    g_colors.push([0.0, 1.0, 0.0, 1.0]); // Green
  } else {
    // Others
    g_colors.push([1.0, 1.0, 1.0, 1.0]); // White
  }

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);

  var len = g_points.length;
  for (var i = 0; i < len; i++) {
    var xy = g_points[i];
    var rgba = g_colors[i];

    // Pass the position of a point to a_Position variable
    gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
    // Pass the color of a point to u_FragColor variable
    gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
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
var FSHADER_SOURCE = ` 
    precision mediump float;
    uniform vec4 u_FragColor;// uniform変数
    void main() {
      gl_FragColor = u_FragColor;
  }`;

export const ColoredPoints = () => {
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

    // Get the storage location of u_FragColor
    var u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
    if (!u_FragColor) {
      console.log('Failed to get the storage location of u_FragColor');
      return;
    }

    // Register function (event handler) to be called on a mouse press
    canvas!.onmousedown = function (ev) {
      click(ev, gl, canvas!, a_Position, u_FragColor);
    };

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);
  }, []);

  return <Canvas ref={nodeRef} width="600px" height="600px" />;
};
