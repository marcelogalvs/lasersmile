import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProtocolosMenuPage } from './protocolos-menu.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocolosMenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProtocolosMenuPage]
})
export class ProtocolosMenuPageModule {}
