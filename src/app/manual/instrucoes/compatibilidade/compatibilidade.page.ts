import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-compatibilidade',
  templateUrl: './compatibilidade.page.html',
  styleUrls: ['./compatibilidade.page.scss'],
})
export class CompatibilidadePage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }


}
