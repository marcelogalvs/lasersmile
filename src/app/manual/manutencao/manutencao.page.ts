import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-manutencao',
  templateUrl: './manutencao.page.html',
  styleUrls: ['./manutencao.page.scss'],
})
export class ManutencaoPage implements OnInit {

  constructor(private callNumber: CallNumber, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goCorretiva(){
    this.navCtrl.navigateForward('corretiva');
  }
  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
