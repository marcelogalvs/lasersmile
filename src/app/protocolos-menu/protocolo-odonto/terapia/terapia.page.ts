import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-terapia',
  templateUrl: './terapia.page.html',
  styleUrls: ['./terapia.page.scss'],
})
export class TerapiaPage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }

}
