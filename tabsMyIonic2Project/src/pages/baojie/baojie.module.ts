import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Baojie } from './baojie';

@NgModule({
  declarations: [
    Baojie,
  ],
  imports: [
    IonicPageModule.forChild(Baojie),
  ],
  exports: [
    Baojie
  ]
})
export class BaojieModule {}
