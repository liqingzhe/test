import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gongyudetail } from './gongyudetail';

@NgModule({
  declarations: [
    Gongyudetail,
  ],
  imports: [
    IonicPageModule.forChild(Gongyudetail),
  ],
  exports: [
    Gongyudetail
  ]
})
export class GongyudetailModule {}
