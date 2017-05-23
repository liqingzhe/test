import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Livingservice } from './livingservice';

@NgModule({
  declarations: [
    Livingservice,
  ],
  imports: [
    IonicPageModule.forChild(Livingservice),
  ],
  exports: [
    Livingservice
  ]
})
export class LivingserviceModule {}
