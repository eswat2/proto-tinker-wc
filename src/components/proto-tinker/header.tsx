import { FunctionalComponent, h } from '@stencil/core';
import { HeaderProps } from '../../utils';

const Header: FunctionalComponent<HeaderProps> = props => {
  return (
    <h1 class="mr-0 ml-0 mt-11 mb-11 text-center text-6xl font-thin uppercase text-clrs-red">
      {props.label}
    </h1>
  );
};

export { Header };
export default Header;
