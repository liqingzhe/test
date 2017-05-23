import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Livinggoods } from './livinggoods';

@NgModule({
  declarations: [
    Livinggoods,
  ],
  imports: [
    IonicPageModule.forChild(Livinggoods),
  ],
  exports: [
    Livinggoods
  ]
})
export class LivinggoodsModule {}
