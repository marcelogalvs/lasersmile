import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private callNumber: CallNumber,
    private navCrtl: NavController
  ) {}

  slider=[
    {
      titulo: "Laserterapia",
      descricao: "Alívio de dores, reparações cirúrgicas e auxílio na endodontia.",
      imagem: "../../assets/imagens/rosto_dolorido.png"
    },
    {
      titulo: "Clareamento com Luz Violeta",
      descricao: "Sorriso perfeito em 20 minutos! Sem sensibilidade, sem restrições e sem intervalo entre aplicações.",
      imagem: "../../assets/imagens/dentes_brancos.png"
    },
    {
      titulo: "Terapia Sistêmica ILIB",
      descricao: "Tratamento de doenças crônicas, rejuvenescimento e anti-inflamatório.",
      imagem: "../../assets/imagens/terapia-ilib.png"
    }
  ];

  goEquipamentos(){
    this.navCrtl.navigateForward("equipamentos");
  }

  goKits(){
    this.navCrtl.navigateForward("kits");
  }
  
  goAcessorios(){
    this.navCrtl.navigateForward("acessorios");
  }
  
  goManual(){
    this.navCrtl.navigateForward("manual-menu");
  }

  goFone(): void {
    this.callNumber.callNumber('0211236218458', true);
  }

}
