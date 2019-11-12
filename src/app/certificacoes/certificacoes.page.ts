import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-certificacoes',
  templateUrl: './certificacoes.page.html',
  styleUrls: ['./certificacoes.page.scss'],
})
export class CertificacoesPage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
