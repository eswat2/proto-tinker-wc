import { FunctionalComponent, h } from '@stencil/core';
import { Radio } from './radio';
import { colorKeys, colorFor, ActiveProps } from '../../utils';

const ColorPicker: FunctionalComponent<ActiveProps> = props => {
  const { actions, state } = props;
  const { pick } = state;

  return (
    <div id="toolbar" class="flex flex-wrap" role="radiogroup">
      {colorKeys.map((key: string) => {
        const hex = colorFor(key);
        const selected = pick == key;
        return (
          <div
            aria-label={key}
            aria-checked={selected}
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
