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

  C4_01: '/01-rotated-triangle-matrix4',
  C4_02: '/02-rotated-translated-triangle',
  C4_03: '/03-rotating-triangle',

  C5_01: '/01-multi-attribute-size',
  C5_02: '/02-multi-attribute-size-interleaved',
  C5_03: '/03-multi-attribute-color',
  C5_04: '/04-colored-triangle',
  C5_05: '/05-hello-triangle-frag-coord',
  C5_06: '/06-textured-quad',
  C5_07: '/07-multi-texture',

  C7_01: '/01-look-at-triangles',
  C7_02: '/02-look-at-rotated-triangles',
  C7_03: '/03-look-at-rotated-triangles-mvMatrix',
  C7_04: '/04-look-at-triangles-with-keys',
  C7_05: '/05-ortho-view',
  C7_06: '/06-look-at-triangles-with-keys-view-volume',
  C7_07: '/07-ortho-view-half-size',
  C7_08: '/08-ortho-view-half-width',
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
  {
    title: '3、高级变换与动画基础',
    children: [
      {
        title: '01-rotated-triangle-matrix4',
        value: LESSONS.C4_01,
      },
      {
        title: '02-rotated-translated-triangle',
        value: LESSONS.C4_02,
      },
      {
        title: '03-rotating-triangle',
        value: LESSONS.C4_03,
      },
    ],
  },
  {
    title: '4、颜色与纹理',
    children: [
      {
        title: '01-multi-attribute-size',
        value: LESSONS.C5_01,
      },
      {
        title: '02-multi-attribute-size-interleaved',
        value: LESSONS.C5_02,
      },
      {
        title: '03-multi-attribute-color',
        value: LESSONS.C5_03,
      },
      {
        title: '04-colored-triangle',
        value: LESSONS.C5_04,
      },
      {
        title: '05-hello-triangle-frag-coord',
        value: LESSONS.C5_05,
      },
      {
        title: '06-textured-quad',
        value: LESSONS.C5_06,
      },
      {
        title: '07-multi-texture',
        value: LESSONS.C5_07,
      },
    ],
  },

  {
    title: '7、进入三维世界',
    children: [
      {
        title: '01-look-at-triangles',
        value: LESSONS.C7_01,
      },
      {
        title: '02-look-at-rotated-triangles',
        value: LESSONS.C7_02,
      },
      {
        title: '03-look-at-rotated-triangles-mvMatrix',
        value: LESSONS.C7_03,
      },
      {
        title: '04-look-at-triangles-with-keys',
        value: LESSONS.C7_04,
      },
      {
        title: '05-ortho-view',
        value: LESSONS.C7_05,
      },
      {
        title: '06-look-at-triangles-with-keys-view-volume',
        value: LESSONS.C7_06,
      },
      {
        title: '007-ortho-view-half-size',
        value: LESSONS.C7_07,
      },
      {
        title: '06-08-ortho-view-half-width',
        value: LESSONS.C7_08,
      },
    ],
  },
];
