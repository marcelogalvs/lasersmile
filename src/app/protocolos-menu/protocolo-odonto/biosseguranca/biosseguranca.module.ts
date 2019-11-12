import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BiossegurancaPage } from './biosseguranca.page';

const routes: Routes = [
  {
    path: '',
    component: BiossegurancaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BiossegurancaPage]
})
export class BiossegurancaPageModule {}
