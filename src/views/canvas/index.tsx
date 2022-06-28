import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { LessonRoutes } from 'src/views/root/routes';

const Container = styled.div`
  flex-grow: 1;
  height: 100%;
`;

const Canvas = () => (
  <Container>
    <Routes>
      {LessonRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </Container>
);

export default Canvas;
