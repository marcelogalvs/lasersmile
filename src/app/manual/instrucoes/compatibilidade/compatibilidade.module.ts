import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CompatibilidadePage } from './compatibilidade.page';

const routes: Routes = [
  {
    path: '',
    component: CompatibilidadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CompatibilidadePage]
})
export class CompatibilidadePageModule {}
