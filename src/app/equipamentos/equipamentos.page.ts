import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-equipamentos',
  templateUrl: './equipamentos.page.html',
  styleUrls: ['./equipamentos.page.scss'],
})
export class EquipamentosPage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
