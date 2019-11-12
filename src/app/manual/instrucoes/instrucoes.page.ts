import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-instrucoes',
  templateUrl: './instrucoes.page.html',
  styleUrls: ['./instrucoes.page.scss'],
})
export class InstrucoesPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goBiocompatibilidade(){
    this.navCtrl.navigateForward('biocompatibilidade');
  }

  goCompatibilidade(){
    this.navCtrl.navigateForward('compatibilidade');
  }

  goOperacao(){
    this.navCtrl.navigateForward("operacao");
  }
  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
