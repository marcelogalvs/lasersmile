import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProtocoloOdontoPage } from './protocolo-odonto.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloOdontoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProtocoloOdontoPage]
})
export class ProtocoloOdontoPageModule {}
