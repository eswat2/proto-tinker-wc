import { createStore } from '@stencil/store';
import { sample } from './funnel-defs';
import { StateDef, ActionsDef } from './types';

const initStore: StateDef = {
  count: 0,
  pick: 'bada55',
  values: [...sample],
};

const store = createStore(initStore);

const { state } = store;

const actions: ActionsDef = {
  refresh: () => {
    const values: number[] = sample.map(() => Math.floor(Math.random() * 100));

    state.count = state.count + 1;
    state.values = values;
  },
  reset: () => {
    state.count = 0;
    state.values = [...sample];
  },
  updatePick: pick => {
    state.pick = pick;
  },
};

export { state, actions };
export default store;
