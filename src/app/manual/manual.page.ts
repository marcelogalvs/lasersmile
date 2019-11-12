import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.page.html',
  styleUrls: ['./manual.page.scss'],
})
export class ManualPage implements OnInit {

  constructor(
    private callNumber: CallNumber,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goInformacoes(){
    this.navCtrl.navigateForward('informacoes');
  }

  goManutencao(){
    this.navCtrl.navigateForward('manutencao');
  }

  goInstrucoes(){
    this.navCtrl.navigateForward('instrucoes');
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
