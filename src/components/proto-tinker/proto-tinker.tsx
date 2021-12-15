import { Component, h, Prop } from '@stencil/core';
import { ColorPicker } from './color-picker';
import { DataSource } from './data-source';
import { DataValues } from './data-values';
import { Eswat2Io } from './eswat2-io';

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
        <DataSource />
        <ColorPicker />
        <hr class="mr-0 ml-0" />
        <DataValues />
      </div>
    );
  }
}
