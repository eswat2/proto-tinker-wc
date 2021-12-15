import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../../utils';

const Close: FunctionalComponent<IconProps> = props => {
  const hex = props.hex || 'currentColor';
  const klass = props.class;
  const label = props.label || 'close';
  const size = props.size || 24;

  return (
    <svg
      class={klass}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label="title"
    >
      <title>{label}</title>
      <g fill={hex}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      </g>
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export { Close };
export default Close;
