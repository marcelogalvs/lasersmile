import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-limpeza',
  templateUrl: './limpeza.page.html',
  styleUrls: ['./limpeza.page.scss'],
})
export class LimpezaPage implements OnInit {

  constructor(
    private callNumber:CallNumber
  ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
