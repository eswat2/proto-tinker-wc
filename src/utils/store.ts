import { createStore } from '@stencil/store';
import { bag } from './bag';
import { sample } from './funnel-defs';
import { StateDef, ActionsDef } from './types';

const initStore: StateDef = {
  count: 0,
  pick: 'bada55',
  values: [...sample],
};

const store = createStore(initStore);

const { state, onChange } = store;

const saveState = () => {
  const { count, pick, values } = state;

  bag.store({ count, pick, values });
};

const actions: ActionsDef = {
  initApp: () => {
    const data: StateDef = bag.get();

    if (data) {
      const { count, pick, values } = data;

      state.count = count;
      state.pick = pick;
      state.values = values;
    }
  },
  refresh: () => {
    const values: number[] = sample.map(() => Math.floor(Math.random() * 100));

    state.count = state.count + 1;
    state.values = values;

    saveState();
  },
  reset: () => {
    state.count = 0;
    state.values = [...sample];

    saveState();
  },
  updatePick: pick => {
    state.pick = pick;

    saveState();
  },
};

export { actions, state, onChange };
export default store;
