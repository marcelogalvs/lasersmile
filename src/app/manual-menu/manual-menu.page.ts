import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-manual-menu',
  templateUrl: './manual-menu.page.html',
  styleUrls: ['./manual-menu.page.scss'],
})
export class ManualMenuPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goManualOdonto(){
    this.navCtrl.navigateForward('manual')
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
