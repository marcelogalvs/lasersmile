import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Sobre',
      url: '/sobre',
      icon: 'book'
    },
    {
      title: 'Equipamentos',
      url: '/equipamentos',
      icon: 'md-outlet'
    },
    {
      title: 'Produtos Quick Smile',
      url: '/kits',
      icon: 'cube'
    },
    {
      title: 'Acessórios',
      url: '/acessorios',
      icon: 'md-switch'
    },
    {
      title: 'Manuais de Instrução',
      url: '/manual-menu',
      icon: 'md-construct'
    },    
    {
      title: 'Protocolos de Uso',
      url: '/protocolos-menu',
      icon: 'list'
    },
    {
      title: 'Informações Gerais',
      url: '/gerais',
      icon: 'pin'
    },
    {
      title: 'Certificações',
      url: '/certificacoes',
      icon: 'md-lock'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
