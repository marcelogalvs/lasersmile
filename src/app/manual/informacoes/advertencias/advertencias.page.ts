import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-advertencias',
  templateUrl: './advertencias.page.html',
  styleUrls: ['./advertencias.page.scss'],
})
export class AdvertenciasPage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }
  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
