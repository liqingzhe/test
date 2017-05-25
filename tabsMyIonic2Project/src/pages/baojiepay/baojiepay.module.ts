import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Baojiepay } from './baojiepay';

@NgModule({
  declarations: [
    Baojiepay,
  ],
  imports: [
    IonicPageModule.forChild(Baojiepay),
  ],
  exports: [
    Baojiepay
  ]
})
export class BaojiepayModule {}
