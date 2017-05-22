import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Pay } from './pay';

@NgModule({
  declarations: [
    Pay,
  ],
  imports: [
    IonicPageModule.forChild(Pay),
  ],
  exports: [
    Pay
  ]
})
export class PayModule {}
