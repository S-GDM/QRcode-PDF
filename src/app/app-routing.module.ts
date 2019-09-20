import { QrcodeComponent } from './qrcode/qrcode.component';
import { PdfComponent } from './pdf/pdf.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, } from '@angular/router';
import { QrcodeModule } from './qrcode/qrcode.module';
import {PdfModule} from './pdf/pdf.module';
const routes :Routes=[
   {path:'qrcode',component:QrcodeComponent},
  {path:'',redirectTo:'qrcode',pathMatch:'full'},
 // {path:'qrcode', loadChildren:'./qrcode/qrcode.module#QrcodeModule'},
 // {path:'pdf',loadChildren:'./pdf/pdf.module#PdfModule'},
 {path:'pdf',component:PdfComponent},
  
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes),
    QrcodeModule, PdfModule
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
