import { FunctionalComponent, h } from '@stencil/core';
import { Radio } from './radio';
import { colorKeys, colorFor, store, actions } from '../../utils';

const ColorPicker: FunctionalComponent = _props => {
  const { pick } = store.state;

  return (
    <div id="toolbar" class="flex flex-wrap" role="radiogroup">
      {colorKeys.map((key: string) => {
        const hex = colorFor(key);
        const selected = pick == key;
        return (
          <div
            aria-label={key}
            role="radio"
            title={key}
            onClick={() => {
              actions.updatePick(key);
            }}
          >
            <Radio hex={hex} selected={selected} />
          </div>
        );
      })}
    </div>
  );
};

export { ColorPicker };
export default ColorPicker;
