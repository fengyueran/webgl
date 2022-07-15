import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// @ts-ignore: ignore next line
import { getWebGLContext } from 'src/utils';

const Canvas = styled.canvas`
  background: #dad4d8;
`;

export const HelloCanvas = () => {
  const nodeRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = nodeRef.current;
    // Get the rendering context for WebGL
    const gl = getWebGLContext(canvas);
    if (!gl) {
      console.log('Failed to get the rendering context for WebGL');
      return;
    }

    // Set clear color
    gl.clearColor(0, 0, 0, 1.0);

    // Clear <canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);
  }, []);

  return <Canvas ref={nodeRef} width="600px" height="600px" />;
};
