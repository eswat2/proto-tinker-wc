import { FunctionalComponent, h } from '@stencil/core';
import { TwLabel } from './tw-label';
import { FunctionalProps } from '../../utils';

const DataValues: FunctionalComponent<FunctionalProps> = props => {
  const { state } = props;
  const { values, pick, count } = state;

  return (
    <div class="flex">
      <div class="flex flex-col">
        <div class="flex">
          <span class="font-bold mr-10px">color:</span>
          <span class="italic text-clrs-slate4">{pick}</span>
        </div>
        <div class="flex mt-5px">
          <span class="font-bold mr-10px">sample:</span>
          <span class="italic text-clrs-slate4">{`${
            count > 0 ? values : '...'
          }`}</span>
        </div>
      </div>
      <TwLabel />
    </div>
  );
};

export { DataValues };
export default DataValues;
