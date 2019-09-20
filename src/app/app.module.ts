import { AppRoutingModule } from './app-routing.module';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PdfComponent} from './pdf/pdf.component';
import { QrcodeComponent } from './qrcode/qrcode.component';

@NgModule({
  declarations: [
    AppComponent,PdfComponent, QrcodeComponent
  ],
  imports: [
    BrowserModule,NgxQRCodeModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
