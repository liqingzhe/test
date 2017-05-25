import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Baoche } from './baoche';

@NgModule({
  declarations: [
    Baoche,
  ],
  imports: [
    IonicPageModule.forChild(Baoche),
  ],
  exports: [
    Baoche
  ]
})
export class BaocheModule {}
