interface BarObj {
  id: number;
  height: number;
  width: number;
  x: number;
  y: number;
  maskId: string;
  maskUri: string;
  mask: string;
  matrix: string;
  points: string;
}

interface FunnelObj {
  id: number;
  height: number;
  width: number;
  x: number;
  y: number;
  drop: number;
}

interface StoreDef {
  count: number;
  pick: string;
  values: number[];
}

interface ActionsDef {
  refresh: () => void;
  reset: () => void;
  updatePick: (pick: string) => void;
}

interface ColorDict {
  [index: string]: string;
}

interface IconProps {
  hex?: string;
  class?: string;
  label?: string;
  selected?: boolean;
  size?: number;
}

type CreateFn = (props: FunnelObj) => BarObj;

export type {
  BarObj,
  FunnelObj,
  StoreDef,
  ActionsDef,
  ColorDict,
  CreateFn,
  IconProps,
};
