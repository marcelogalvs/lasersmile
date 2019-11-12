import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BaixaPotenciaPage } from './baixa-potencia.page';

const routes: Routes = [
  {
    path: '',
    component: BaixaPotenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BaixaPotenciaPage]
})
export class BaixaPotenciaPageModule {}
