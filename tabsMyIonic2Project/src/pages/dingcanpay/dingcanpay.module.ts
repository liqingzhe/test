import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dingcanpay } from './dingcanpay';

@NgModule({
  declarations: [
    Dingcanpay,
  ],
  imports: [
    IonicPageModule.forChild(Dingcanpay),
  ],
  exports: [
    Dingcanpay
  ]
})
export class DingcanpayModule {}
