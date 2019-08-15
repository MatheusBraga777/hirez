import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import {ReiArthurPage } from './ReiArthur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component:ReiArthurPage
      }
    ])
  ],
  declarations: [ReiArthurPage]
})
export class ReiArthurPageModule {}
