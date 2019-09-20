import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  //value : string = 'Techiediaries';
  value : string='C:\Users\Ajmath\Downloads/img5'
  constructor() { }

  ngOnInit() {
  }

}
