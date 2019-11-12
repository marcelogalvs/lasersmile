import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-baixa-potencia',
  templateUrl: './baixa-potencia.page.html',
  styleUrls: ['./baixa-potencia.page.scss'],
})
export class BaixaPotenciaPage implements OnInit {

  constructor(
    private callNumber: CallNumber,
    
  ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
