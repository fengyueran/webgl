import * as chapter2 from 'src/examples/ch02';
import { LESSONS } from './views/root/catalogue-tree';

export const LessonRoutes = [
  { path: LESSONS.C2_01, component: chapter2.DrawRectangle },
  { path: LESSONS.C2_02, component: chapter2.HelloCanvas },
];
