import { FunctionalComponent, h } from '@stencil/core';
import { ChevronDoubleLeft } from './chevron-double-left';
import { Close } from './close';
import { Refresh } from './refresh';
import { ActiveProps } from '../../utils';

const help: string = 'click a button... ';

const DataSource: FunctionalComponent<ActiveProps> = props => {
  const { actions, count } = props;

  return (
    <div class="mb-10px mt-3 flex items-center">
      <button
        aria-label="Refresh"
        class="ds1-button data-button bg-clrs-blue"
        onClick={() => {
          actions.refresh();
        }}
      >
        <Refresh label="Refresh" />
      </button>
      <button
        aria-label="Reset"
        class="ds1-button data-button bg-clrs-red"
        onClick={() => {
          actions.reset();
        }}
      >
        <Close label="Reset" />
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
