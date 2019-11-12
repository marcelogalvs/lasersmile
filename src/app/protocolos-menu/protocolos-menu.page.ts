import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-protocolos-menu',
  templateUrl: './protocolos-menu.page.html',
  styleUrls: ['./protocolos-menu.page.scss'],
})
export class ProtocolosMenuPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goProtocoloOdonto(){
    this.navCtrl.navigateForward('protocolo-odonto')
  }
  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
