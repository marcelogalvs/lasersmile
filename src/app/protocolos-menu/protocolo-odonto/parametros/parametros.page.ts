import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.page.html',
  styleUrls: ['./parametros.page.scss'],
})
export class ParametrosPage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
