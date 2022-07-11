export const LESSONS = {
  C2_01: '/01-draw-rectangle',
  C2_02: '/02-hello-canvas',
  C2_03: '/03-hello-point1',
  C2_04: '/04-hello-point2',
  C2_05: '/05-clicked-points',
  C2_06: '/06-colored-points',

  C3_01: '/01-multi-point',
  C3_02: '/02-hello-triangle',
  C3_03: '/03-hello-quad',
  C3_04: '/04-translated-triangle',
  C3_05: '/05-rotated-triangle',
  C3_06: '/06-rotated-triangle-matrix',
  C3_07: '/07-scaled-triangle-matrix',
};

export const catalogueTree = [
  {
    title: '1、绘制矩形',
    children: [
      {
        title: '01-draw-rectangle',
        value: LESSONS.C2_01,
      },
      {
        title: '02-hello-canvas',
        value: LESSONS.C2_02,
      },
      {
        title: '03-hello-point1',
        value: LESSONS.C2_03,
      },
      {
        title: '04-hello-point2',
        value: LESSONS.C2_04,
      },
      {
        title: '05-clicked-points',
        value: LESSONS.C2_05,
      },
      {
        title: '06-colored-points',
        value: LESSONS.C2_06,
      },
    ],
  },
  {
    title: '2、绘制和变换三角形',
    children: [
      {
        title: '01-multi-point',
        value: LESSONS.C3_01,
      },
      {
        title: '02-hello-triangle',
        value: LESSONS.C3_02,
      },
      {
        title: '03-hello-quad',
        value: LESSONS.C3_03,
      },
      {
        title: '04-translated-triangle',
        value: LESSONS.C3_04,
      },
      {
        title: '05-rotated-triangle',
        value: LESSONS.C3_05,
      },
      {
        title: '06-rotated-triangle-matrix',
        value: LESSONS.C3_06,
      },
      {
        title: '07-scaled-triangle-matrix',
        value: LESSONS.C3_07,
      },
    ],
  },
];
