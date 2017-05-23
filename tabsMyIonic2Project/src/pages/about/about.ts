import { Component , ViewChild} from '@angular/core';

import {NavController, Nav} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {Auth} from "../auth/auth";
import {Housedetail} from "../housedetail/housedetail";
import {Contact} from "../contact/contact";
import {Pay} from "../pay/pay";
import {Livinggoods} from "../livinggoods/livinggoods";
import {Livingservice} from "../livingservice/livingservice";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: '实名认证', component: Auth},
      { title: '房屋详情', component: Housedetail},
      { title: '联系管家', component: Contact},
      { title: '支付', component: Pay},
      { title: '生活服务', component: Livingservice},
      { title: '生活用品', component: Livinggoods}
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}