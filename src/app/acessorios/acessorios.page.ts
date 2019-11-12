import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-acessorios',
  templateUrl: './acessorios.page.html',
  styleUrls: ['./acessorios.page.scss'],
})
export class AcessoriosPage implements OnInit {

  constructor( private callNumber: CallNumber) { }

  ngOnInit() {
  }
  
  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
