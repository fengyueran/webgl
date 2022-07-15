import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// @ts-ignore: ignore next line
import { getWebGLContext, initShaders, Matrix4 } from 'src/utils';

const Canvas = styled.canvas`
  background: #dad4d8;
`;

function initVertexBuffers(gl: any) {
  // prettier-ignore
  var verticesColors = new Float32Array([
    // Vertex coordinates and color
     0.0,  0.5,  1.0,  0.0,  0.0, 
    -0.5, -0.5,  0.0,  1.0,  0.0, 
     0.5, -0.5,  0.0,  0.0,  1.0, 
  ]);
  var n = 3; // The number of vertices

  // Create a buffer object
  var vertexColorBuffer = gl.createBuffer();
  if (!vertexColorBuffer) {
    console.log('Failed to create the buffer object');
    return false;
  }

  // Write the vertex coordinates and colors to the buffer object
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW);

  var FSIZE = verticesColors.BYTES_PER_ELEMENT;
  //Get the storage location of a_Position, assign and enable buffer
  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, FSIZE * 5, 0);
  gl.enableVertexAttribArray(a_Position); // Enable the assignment of the buffer object

  // Get the storage location of a_Position, assign buffer and enable
  var a_Color = gl.getAttribLocation(gl.program, 'a_Color');
  if (a_Color < 0) {
    console.log('Failed to get the storage location of a_Color');
    return -1;
  }
  gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 5, FSIZE * 2);
  gl.enableVertexAttribArray(a_Color); // Enable the assignment of the buffer object

  return n;
}

// MultiAttributeColor.js (c) 2012 matsuda
// Vertex shader program
var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  attribute vec4 a_Color;
  varying vec4 v_Color; // varying variable
  void main() {
    gl_Position = a_Position;
    gl_PointSize = 10.0;
    v_Color = a_Color; // Pass the data to the fragment shader
  }`;

// Fragment shader program
var FSHADER_SOURCE = `
  precision mediump float; // Precision qualifier (See Chapter 6)
  varying vec4 v_Color; // Receive the data from the vertex shader
  void main() {
    gl_FragColor = v_Color;
  }`;

export const ColoredTriangle = () => {
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

    // Write the positions of vertices to a vertex shader
    var n = initVertexBuffers(gl);
    if (n < 0) {
      console.log('Failed to set the positions of the vertices');
      return;
    }

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw TRIANGLES
    gl.drawArrays(gl.TRIANGLES, 0, n);
  }, []);

  return <Canvas ref={nodeRef} width="600px" height="600px" />;
};
