import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-biosseguranca',
  templateUrl: './biosseguranca.page.html',
  styleUrls: ['./biosseguranca.page.scss'],
})
export class BiossegurancaPage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
