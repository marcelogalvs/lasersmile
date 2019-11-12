import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-protocolo-odonto',
  templateUrl: './protocolo-odonto.page.html',
  styleUrls: ['./protocolo-odonto.page.scss'],
})
export class ProtocoloOdontoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goBaixaPotencia(){
    this.navCtrl.navigateForward('baixa-potencia');
  }
  
  goBiosseguranca(){
    this.navCtrl.navigateForward('biosseguranca');
  }
  goParametros(){
    this.navCtrl.navigateForward('parametros');
  }

  goProtocolos(){
    this.navCtrl.navigateForward('protocolos');
  }

  goTerapia(){
    this.navCtrl.navigateForward('terapia');
    
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
