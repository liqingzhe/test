import { Component , ViewChild} from '@angular/core';

import {NavController, Nav} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {Auth} from "../auth/auth";

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
      { title: '实名认证', component: Auth}
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}