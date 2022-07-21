import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import * as chapter2 from 'src/examples/ch02';
import * as chapter3 from 'src/examples/ch03';
import * as chapter4 from 'src/examples/ch04';
import * as chapter5 from 'src/examples/ch05';
import * as chapter7 from 'src/examples/ch07';
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
  { path: LESSONS.C3_06, component: chapter3.RotatedTriangleMatrix },
  { path: LESSONS.C3_07, component: chapter3.ScaledTriangleMatrix },

  { path: LESSONS.C4_01, component: chapter4.RotatedTriangleMatrix4 },
  { path: LESSONS.C4_02, component: chapter4.RotatedTranslatedTriangle },
  { path: LESSONS.C4_03, component: chapter4.RotatingTriangle },

  { path: LESSONS.C5_01, component: chapter5.MultiAttributeSize },
  { path: LESSONS.C5_02, component: chapter5.MultiAttributeSizeInterleaved },
  { path: LESSONS.C5_03, component: chapter5.MultiAttributeColor },
  { path: LESSONS.C5_04, component: chapter5.ColoredTriangle },
  { path: LESSONS.C5_05, component: chapter5.HelloTriangleFragCoord },
  { path: LESSONS.C5_06, component: chapter5.TexturedQuad },
  { path: LESSONS.C5_07, component: chapter5.MultiTexture },

  { path: LESSONS.C7_01, component: chapter7.LookAtTriangles },
  { path: LESSONS.C7_02, component: chapter7.LookAtRotatedTriangles },
  { path: LESSONS.C7_03, component: chapter7.LookAtRotatedTrianglesMVMatrix },
  { path: LESSONS.C7_04, component: chapter7.LookAtTrianglesWithKeys },
  { path: LESSONS.C7_05, component: chapter7.OrthoView },
  {
    path: LESSONS.C7_06,
    component: chapter7.LookAtTrianglesWithKeysViewVolume,
  },
  {
    path: LESSONS.C7_07,
    component: chapter7.OrthoViewHalfSize,
  },
  {
    path: LESSONS.C7_08,
    component: chapter7.OrthoViewHalfWidth,
  },
  {
    path: LESSONS.C7_09,
    component: chapter7.PerspectiveView,
  },
  {
    path: LESSONS.C7_10,
    component: chapter7.PerspectiveViewMvp,
  },
  {
    path: LESSONS.C7_11,
    component: chapter7.PerspectiveViewMVPMatrix,
  },
  {
    path: LESSONS.C7_12,
    component: chapter7.DepthBuffer,
  },
  {
    path: LESSONS.C7_13,
    component: chapter7.ZFighting,
  },
  {
    path: LESSONS.C7_14,
    component: chapter7.HelloCube,
  },
  {
    path: LESSONS.C7_15,
    component: chapter7.ColoredCube,
  },
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
