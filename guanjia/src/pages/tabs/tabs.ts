import { Component } from '@angular/core';


import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { Zhengzu } from '../zhengzu/zhengzu';
import { User } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = Zhengzu;
  tab3Root = User;
  tab4Root = AboutPage;

  constructor() {

  }
}
