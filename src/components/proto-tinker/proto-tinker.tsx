import { Component, h, Prop, State } from '@stencil/core';
import { ColorPicker } from './color-picker';
import { DataSource } from './data-source';
import { DataValues } from './data-values';
import { Eswat2Io } from './eswat2-io';
import { Header } from './header';
import { StateDef, actions, state } from '../../utils';

@Component({
  tag: 'proto-tinker',
  styleUrl: './proto-tinker.css',
  shadow: true,
})
export class ProtoTinker {
  @Prop() tag: string = 'proto-tinker';
  @State() store: StateDef = undefined;

  componentWillLoad() {
    state.listen((value, _old, _key) => {
      const { count, pick, values } = value;

      this.store = { count, pick, values };
    });

    actions.init();
  }

  render() {
    const { count, pick, values } = this.store;

    return (
      <div id="app" class="ds1-main">
        <Header label="tinker wc" />
        <Eswat2Io />
        <DataSource actions={actions} count={count} />
        <ColorPicker actions={actions} pick={pick} />
        <hr class="ml-0 mr-0" />
        <DataValues count={count} pick={pick} values={values} />
      </div>
    );
  }
}
