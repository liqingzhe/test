import { Component } from '@angular/core';


// import { Auth } from '../auth/auth';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { Zhengzu } from '../zhengzu/zhengzu';
import { Gongyu } from '../gongyu/gongyu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Zhengzu;
  tab3Root = Gongyu;
  // tab4Root = Auth;
  tab4Root = AboutPage;

  constructor() {

  }

}
