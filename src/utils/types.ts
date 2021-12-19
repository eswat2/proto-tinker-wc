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

interface ColorDict {
  [index: string]: string;
}

type CreateFn = (props: FunnelObj) => BarObj;

interface ActionsDef {
  refresh: () => void;
  reset: () => void;
  updatePick: (pick: string) => void;
}

interface StateDef {
  count: number;
  pick: string;
  values: number[];
}

interface FunctionalProps {
  actions?: ActionsDef;
  state?: StateDef;
}

interface IconProps {
  hex?: string;
  class?: string;
  label?: string;
  selected?: boolean;
  size?: number;
}

export type {
  BarObj,
  FunnelObj,
  ColorDict,
  CreateFn,
  ActionsDef,
  StateDef,
  FunctionalProps,
  IconProps,
};
