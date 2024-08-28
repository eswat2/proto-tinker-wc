import { map } from 'nanostores';
import { bag } from './bag';
import { funnelDefs } from './funnel-defs';
import { ActionsDef } from './types';

const state = map({
  count: 0,
  pick: 'bada55',
  values: [],
});

const saveState = () => {
  const { count, pick, values } = state.get();

  bag.store({ count, pick, values });
};

const init = () => {
  const data = bag.get();

  if (data) {
    const { count, pick, values } = data;

    state.setKey('count', count);
    state.setKey('pick', pick);
    state.setKey('values', values);
  } else {
    state.setKey('count', 0);
    state.setKey('pick', 'bada55');
    state.setKey('values', []);
  }
};

const refresh = () => {
  const clicks = state.get().count;
  const count = clicks + 1;
  const list = funnelDefs.map(() => {
    return Math.floor(Math.random() * 100);
  });

  state.setKey('count', count);
  state.setKey('values', [...list]);

  saveState();
};

const reset = () => {
  state.setKey('count', 0);
  state.setKey('values', []);

  saveState();
};

const setPick = value => {
  state.setKey('pick', value);

  saveState();
};

const actions: ActionsDef = {
  init,
  refresh,
  reset,
  setPick,
};

export { actions, state };
export default state;
