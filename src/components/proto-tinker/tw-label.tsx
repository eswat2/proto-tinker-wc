import { FunctionalComponent, h } from '@stencil/core';

const TW_VERSION = '3.0.7';

const TwLabel: FunctionalComponent = _props => {
  return (
    <label class="ml-auto align-top text-xs italic text-clrs-slate4">
      Tailwind {TW_VERSION}
    </label>
  );
};

export { TwLabel };
export default TwLabel;
