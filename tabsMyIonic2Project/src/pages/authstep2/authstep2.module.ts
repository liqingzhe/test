import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Authstep2 } from './authstep2';

@NgModule({
  declarations: [
    Authstep2,
  ],
  imports: [
    IonicPageModule.forChild(Authstep2),
  ],
  exports: [
    Authstep2
  ]
})
export class Authstep2Module {}
