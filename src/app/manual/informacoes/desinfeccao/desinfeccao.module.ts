import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DesinfeccaoPage } from './desinfeccao.page';

const routes: Routes = [
  {
    path: '',
    component: DesinfeccaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DesinfeccaoPage]
})
export class DesinfeccaoPageModule {}
