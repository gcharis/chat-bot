import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule } from 'ngx-socket-io';
import { url } from '../../config';

@NgModule({
  declarations: [],
  imports: [CommonModule, SocketIoModule.forRoot({ url, options: {} })],
})
export class CoreModule {}
