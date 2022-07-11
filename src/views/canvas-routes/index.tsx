import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import * as chapter2 from 'src/examples/ch02';
import * as chapter3 from 'src/examples/ch03';
import { LESSONS } from 'src/constants';

const Container = styled.div`
  flex-grow: 1;
  height: 100%;
  overflow: hidden;
`;

const LessonRoutes = [
  { path: LESSONS.C2_01, component: chapter2.DrawRectangle },
  { path: LESSONS.C2_02, component: chapter2.HelloCanvas },
  { path: LESSONS.C2_03, component: chapter2.HelloPoint1 },
  { path: LESSONS.C2_04, component: chapter2.HelloPoint2 },
  { path: LESSONS.C2_05, component: chapter2.ClickedPoints },
  { path: LESSONS.C2_06, component: chapter2.ColoredPoints },

  { path: LESSONS.C3_01, component: chapter3.MultiPoint },
  { path: LESSONS.C3_02, component: chapter3.HelloTriangle },
  { path: LESSONS.C3_03, component: chapter3.HelloQuad },
  { path: LESSONS.C3_04, component: chapter3.TranslatedTriangle },
  { path: LESSONS.C3_05, component: chapter3.RotatedTriangle },
];

export const CanvasRoutes = () => (
  <Container>
    <Routes>
      {LessonRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </Container>
);
