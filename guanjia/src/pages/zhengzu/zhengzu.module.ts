import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Zhengzu } from './zhengzu';

@NgModule({
  declarations: [
    Zhengzu,
  ],
  imports: [
    IonicPageModule.forChild(Zhengzu),
  ],
  exports: [
    Zhengzu
  ]
})
export class ZhengzuModule {}
