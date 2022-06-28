import { Node } from 'src/components/tree-select';

export const LESSONS = {
  C2_01: '/01-draw-rectangle',
};

export const catalogueTree = [
  {
    title: '1、绘制矩形',
    children: [
      {
        title: '02-first-scene',
        value: LESSONS.C2_01,
      },
    ],
  },
] as Node[];
