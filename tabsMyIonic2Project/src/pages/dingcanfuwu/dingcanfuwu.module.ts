import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dingcanfuwu } from './dingcanfuwu';

@NgModule({
  declarations: [
    Dingcanfuwu,
  ],
  imports: [
    IonicPageModule.forChild(Dingcanfuwu),
  ],
  exports: [
    Dingcanfuwu
  ]
})
export class DingcanfuwuModule {}
