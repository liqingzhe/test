import { Component , ViewChild} from '@angular/core';

import {NavController, Nav, App} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
import {Auth} from "../auth/auth";
import {Housedetail} from "../housedetail/housedetail";
import {Contact} from "../contact/contact";
import {Pay} from "../pay/pay";
import {Livinggoods} from "../livinggoods/livinggoods";
import {Livingservice} from "../livingservice/livingservice";
import { Goodspay } from '../goodspay/goodspay';
import { Baochepay } from '../baochepay/baochepay';
import { Baojiepay } from '../baojiepay/baojiepay';
import { Dingcanpay } from '../dingcanpay/dingcanpay';
import { Baoche } from '../baoche/baoche';
import { Baojie } from '../baojie/baojie';
import { Dingcan } from '../dingcan/dingcan';
import { Dingcanfuwu } from '../dingcanfuwu/dingcanfuwu';
import { Authstep2 } from '../authstep2/authstep2';
import { Gongyudetail } from '../gongyudetail/gongyudetail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, private app:App) {
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: '实名认证', component: Auth},
      { title: '认证第二步', component: Authstep2},
      { title: '房屋详情', component: Housedetail},
      { title: '联系管家', component: Contact},
      { title: '支付', component: Pay},
      { title: '生活服务', component: Livingservice},
      { title: '生活用品', component: Livinggoods},
      { title: '生活用品支付', component: Goodspay},
      { title: '包车支付', component: Baochepay},
      { title: '保洁支付', component: Baojiepay},
      { title: '订餐支付', component: Dingcanpay},
      { title: '订餐服务', component: Dingcanfuwu},
      { title: '订餐详情', component: Dingcan},
      { title: '包车', component: Baoche},
      { title: '保洁', component: Baojie},
      { title: '公寓房屋详情页', component: Gongyudetail}
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.app.getRootNav().push(page.component);
  }

}