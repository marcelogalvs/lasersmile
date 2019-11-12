import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-desinfeccao',
  templateUrl: './desinfeccao.page.html',
  styleUrls: ['./desinfeccao.page.scss'],
})
export class DesinfeccaoPage implements OnInit {

  constructor(
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }
  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
