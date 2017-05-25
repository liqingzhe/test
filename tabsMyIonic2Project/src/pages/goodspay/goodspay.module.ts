import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Goodspay } from './goodspay';

@NgModule({
  declarations: [
    Goodspay,
  ],
  imports: [
    IonicPageModule.forChild(Goodspay),
  ],
  exports: [
    Goodspay
  ]
})
export class GoodspayModule {}
