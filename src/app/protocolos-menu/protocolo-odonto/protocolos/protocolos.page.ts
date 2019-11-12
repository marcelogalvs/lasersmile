import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-protocolos',
  templateUrl: './protocolos.page.html',
  styleUrls: ['./protocolos.page.scss'],
})
export class ProtocolosPage implements OnInit {

  constructor(
    private callNumber:CallNumber
  ) { }

  ngOnInit() {
  }

  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
