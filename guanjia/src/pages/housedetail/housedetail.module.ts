import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Housedetail } from './housedetail';

@NgModule({
  declarations: [
    Housedetail,
  ],
  imports: [
    IonicPageModule.forChild(Housedetail),
  ],
  exports: [
    Housedetail
  ]
})
export class HousedetailModule {}
