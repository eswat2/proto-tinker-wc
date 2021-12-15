import { FunnelObj } from './types';

const funnelDefs: Array<FunnelObj> = [
  { id: 1, height: 400, width: 100, x: 10, y: 10, drop: 20 },
  { id: 2, height: 356, width: 100, x: 120, y: 32, drop: 20 },
  { id: 3, height: 312, width: 100, x: 230, y: 54, drop: 20 },
  { id: 4, height: 268, width: 100, x: 340, y: 76, drop: 20 },
  { id: 5, height: 224, width: 100, x: 450, y: 98, drop: 20 },
];

const sample: number[] = funnelDefs.map(() => 0);

export { funnelDefs, sample };
export default funnelDefs;
