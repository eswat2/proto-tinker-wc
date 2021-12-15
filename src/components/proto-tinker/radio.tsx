import { FunctionalComponent, h } from '@stencil/core';
import { IconProps } from '../../utils';

const Radio: FunctionalComponent<IconProps> = props => {
  const hex = props.hex || 'currentColor';
  const klass = props.class;
  const label = props.label || 'radio';
  const selected = props.selected || false;
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
      <title>{label}</title>{' '}
      <g fill={hex}>
        {selected ? (
          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        ) : (
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
        )}
      </g>
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export { Radio };
export default Radio;
