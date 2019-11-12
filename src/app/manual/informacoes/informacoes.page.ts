import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {

  constructor(
    private  navCrtl: NavController,
    private callNumber: CallNumber
  ) { }

  ngOnInit() {
  }

  goDescricao(){
    this.navCrtl.navigateForward("descricao");
  }

  goInstalacao(){
    this.navCrtl.navigateForward('instalacao');
  }

  goDesinfeccao(){
    this.navCrtl.navigateForward("desinfeccao");
  }

  goAdvertencias(){
    this.navCrtl.navigateForward("advertencias");
  }

  goLimpeza(){
    this.navCrtl.navigateForward("limpeza");
  }

  goFone(){
    this.callNumber.callNumber('1236218458', true);
  }
}
