import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-gerais',
  templateUrl: './gerais.page.html',
  styleUrls: ['./gerais.page.scss'],
})
export class GeraisPage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
