import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
