import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas``;

export const DrawRectangle = () => {
  const nodeRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = nodeRef.current;

    // Get the rendering context for 2DCG
    const ctx = canvas!.getContext('2d');

    // Draw a blue rectangle
    ctx!.fillStyle = 'rgba(0, 0, 255, 1.0)'; // Set color to blue
    ctx!.fillRect(40, 40, 300, 300); // Fill a rectangle with the color
  }, []);

  return <Canvas ref={nodeRef} width="600px" height="700px" />;
};
