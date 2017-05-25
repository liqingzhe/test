import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Baochepay } from './baochepay';

@NgModule({
  declarations: [
    Baochepay,
  ],
  imports: [
    IonicPageModule.forChild(Baochepay),
  ],
  exports: [
    Baochepay
  ]
})
export class BaochepayModule {}
