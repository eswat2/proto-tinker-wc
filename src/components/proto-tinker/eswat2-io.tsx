import { FunctionalComponent, h } from '@stencil/core';
import { Fingerprint } from './fingerprint';

const url = 'https://eswat2.dev';
const who = 'eswat2';

const Eswat2Io: FunctionalComponent = _props => {
  return (
    <a
      class="absolute right-8 top-8 text-clrs-gray hover:text-clrs-navy"
      href={url}
      aria-label={who}
      target="blank"
      title={who}
    >
      <Fingerprint label="eswat2" />
    </a>
  );
};

export { Eswat2Io };
export default Eswat2Io;
