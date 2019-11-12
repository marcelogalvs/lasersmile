import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-instalacao',
  templateUrl: './instalacao.page.html',
  styleUrls: ['./instalacao.page.scss'],
})
export class InstalacaoPage implements OnInit {

  constructor( private callNumber: CallNumber ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
