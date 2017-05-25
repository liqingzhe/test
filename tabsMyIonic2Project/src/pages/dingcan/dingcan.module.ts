import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Dingcan } from './dingcan';

@NgModule({
  declarations: [
    Dingcan,
  ],
  imports: [
    IonicPageModule.forChild(Dingcan),
  ],
  exports: [
    Dingcan
  ]
})
export class DingcanModule {}
