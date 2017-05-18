import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Gongyu } from './gongyu';

@NgModule({
  declarations: [
    Gongyu,
  ],
  imports: [
    IonicPageModule.forChild(Gongyu),
  ],
  exports: [
    Gongyu
  ]
})
export class GongyuModule {}
