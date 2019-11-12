import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-biocompatibilidade',
  templateUrl: './biocompatibilidade.page.html',
  styleUrls: ['./biocompatibilidade.page.scss'],
})
export class BiocompatibilidadePage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
