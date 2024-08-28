type BarObj = {
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
};

type FunnelObj = {
  id: number;
  height: number;
  width: number;
  x: number;
  y: number;
  drop: number;
};

type ColorDict = {
  [index: string]: string;
};

type CreateFn = (props: FunnelObj) => BarObj;

type ActionsDef = {
  init: () => void;
  refresh: () => void;
  reset: () => void;
  setPick: (pick: string) => void;
};

type StateDef = {
  count: number;
  pick: string;
  values: number[];
};

type ActiveProps = {
  actions: ActionsDef;
  count?: number;
  pick?: string;
};

type PassiveProps = {
  count: number;
  pick: string;
  values: number[];
};

type IconProps = {
  hex?: string;
  class?: string;
  label?: string;
  selected?: boolean;
  size?: number;
};

type HeaderProps = {
  label?: string;
};

export type {
  BarObj,
  FunnelObj,
  ColorDict,
  CreateFn,
  ActionsDef,
  StateDef,
  ActiveProps,
  PassiveProps,
  IconProps,
  HeaderProps,
};
