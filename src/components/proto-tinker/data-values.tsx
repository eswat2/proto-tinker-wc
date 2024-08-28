import { FunctionalComponent, h } from '@stencil/core';
import { TwLabel } from './tw-label';
import { PassiveProps } from '../../utils';

const DataValues: FunctionalComponent<PassiveProps> = props => {
  const { values, pick, count } = props;

  return (
    <div class="flex">
      <div class="flex flex-col">
        <div class="flex">
          <span class="mr-10px font-bold">color:</span>
          <span class="italic text-clrs-slate4">{pick}</span>
        </div>
        <div class="mt-5px flex">
          <span class="mr-10px font-bold">sample:</span>
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
