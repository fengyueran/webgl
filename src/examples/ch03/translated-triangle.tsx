import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// @ts-ignore: ignore next line
import { getWebGLContext, initShaders } from 'src/utils';

const Canvas = styled.canvas`
  background: #dad4d8;
`;

function initVertexBuffers(gl: any) {
  var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
  var n = 3; // The number of vertices

  // Create a buffer object
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }

  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if (a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return -1;
  }
  // Assign the buffer object to a_Position variable
  gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

  // Enable the assignment to a_Position variable
  gl.enableVertexAttribArray(a_Position);

  return n;
}

var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  uniform vec4 u_Translation;
  void main() {
    gl_Position = a_Position + u_Translation;
  }`;

// Fragment shader program
var FSHADER_SOURCE = ` 
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);;
  }`;

export const TranslatedTriangle = () => {
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

    // Pass the translation distance to the vertex shader
    var u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');
    if (!u_Translation) {
      console.log('Failed to get the storage location of u_Translation');
      return;
    }
    // The translation distance for x, y, and z direction
    var Tx = 0.5,
      Ty = 0.5,
      Tz = 0.0;
    gl.uniform4f(u_Translation, Tx, Ty, Tz, 0.0);

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw three points
    gl.drawArrays(gl.TRIANGLES, 0, n);
    // gl.drawArrays(gl.LINES, 0, n);
    // gl.drawArrays(gl.LINE_STRIP, 0, n);
    // gl.drawArrays(gl.LINE_LOOP, 0, n);
  }, []);

  return <Canvas ref={nodeRef} width="600px" height="700px" />;
};
