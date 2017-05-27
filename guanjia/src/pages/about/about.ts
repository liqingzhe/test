import { Component , ViewChild} from '@angular/core';

import {NavController, Nav} from 'ionic-angular';
import {Housedetail} from "../housedetail/housedetail";
import {Userinfo} from "../userinfo/userinfo";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Housedetail;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '房屋详情', component: Housedetail},
      { title: '用户信息', component: Userinfo}
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}