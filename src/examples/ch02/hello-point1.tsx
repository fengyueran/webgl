import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// @ts-ignore: ignore next line
import { getWebGLContext, initShaders } from 'src/utils';

const Canvas = styled.canvas`
  background: #dad4d8;
`;

// Vertex shader program
var VSHADER_SOURCE = `void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);// Set the vertex coordinates of the point
    gl_PointSize = 10.0;  // Set the point size
  }`;

// Fragment shader program
var FSHADER_SOURCE = `void main() { 
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);// Set the point color
  }`;

export const HelloPoint1 = () => {
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

    // Specify the color for clearing <canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Draw a point
    gl.drawArrays(gl.POINTS, 0, 1);
  }, []);

  return <Canvas ref={nodeRef} width="600px" height="600px" />;
};
