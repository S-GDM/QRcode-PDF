import { NgxQRCodeModule } from 'ngx-qrcode2';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrcodeRoutingModule } from './qrcode-routing.module';

@NgModule({
  imports: [
    CommonModule,
    QrcodeRoutingModule,NgxQRCodeModule
  ],
  declarations: []
})
export class QrcodeModule { }
