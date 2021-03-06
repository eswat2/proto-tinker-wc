import { Component, h, Prop } from '@stencil/core';
import { ColorPicker } from './color-picker';
import { DataSource } from './data-source';
import { DataValues } from './data-values';
import { Eswat2Io } from './eswat2-io';
import { actions, state } from '../../utils';

@Component({
  tag: 'proto-tinker',
  styleUrl: './proto-tinker.css',
  shadow: true,
})
export class ProtoTinker {
  @Prop() tag: string = 'proto-tinker';

  render() {
    return (
      <div id="app" class="ds1-main">
        <Eswat2Io />
        <DataSource actions={actions} state={state} />
        <ColorPicker actions={actions} state={state} />
        <hr class="mr-0 ml-0" />
        <DataValues state={state} />
      </div>
    );
  }
}
