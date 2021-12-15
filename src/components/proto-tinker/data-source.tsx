import { FunctionalComponent, h } from '@stencil/core';
import { ChevronDoubleLeft } from './chevron-double-left';
import { Close } from './close';
import { Refresh } from './refresh';
import { store, actions } from '../../utils';

const help: string = 'click a button... ';

const DataSource: FunctionalComponent = _props => {
  const { count } = store.state;

  return (
    <div class="flex mt-3 mb-10px items-center">
      <button
        aria-label="Refresh"
        title="Refresh"
        class="ds1-button data-button bg-clrs-blue"
        onClick={() => {
          actions.refresh();
        }}
      >
        <Refresh />
      </button>
      <button
        aria-label="Reset"
        title="Reset"
        class="ds1-button data-button bg-clrs-red"
        onClick={() => {
          actions.reset();
        }}
      >
        <Close />
      </button>
      <span class="flex items-center">
        <ChevronDoubleLeft size={28} />
        <span class="italic">
          {help}
          <sup>{count}</sup>
        </span>
      </span>
    </div>
  );
};

export { DataSource };
export default DataSource;