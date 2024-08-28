import { Component, h, Prop } from '@stencil/core';
import { ColorPicker } from './color-picker';
import { DataSource } from './data-source';
import { DataValues } from './data-values';
import { Eswat2Io } from './eswat2-io';
import { Header } from './header';
import { actions, state } from '../../utils';

@Component({
  tag: 'proto-tinker',
  styleUrl: './proto-tinker.css',
  shadow: true,
})
export class ProtoTinker {
  @Prop() tag: string = 'proto-tinker';

  componentDidLoad() {
    actions.initApp();
  }

  render() {
    return (
      <div id="app" class="ds1-main relative">
        <Header label="tinker wc" />
        <Eswat2Io />
        <DataSource actions={actions} state={state} />
        <ColorPicker actions={actions} state={state} />
        <hr class="ml-0 mr-0" />
        <DataValues state={state} />
      </div>
    );
  }
}
