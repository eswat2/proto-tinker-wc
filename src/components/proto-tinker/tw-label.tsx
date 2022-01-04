import { FunctionalComponent, h } from '@stencil/core';
import { TW_VERSION } from '../../utils';

const TwLabel: FunctionalComponent = _props => {
  return (
    <label class="ml-auto align-top text-xs italic text-clrs-slate4">
      Tailwind {TW_VERSION}
    </label>
  );
};

export { TwLabel };
export default TwLabel;
