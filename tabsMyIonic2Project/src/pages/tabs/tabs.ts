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

  iconArray: Array<string> = ["iconfont-home","iconfont-house","iconfont-gongyu","iconfont-life"];
  change(a: number) {
  	for (let i = 0; i < 4; i++) {
  		if (i === a) {
  			if(this.iconArray[i].indexOf('outline') > 0){
  				let array1 = this.iconArray[i].split("-");
  				let array2 = [array1[0],array1[1]].join('-');
  				this.iconArray[i] = array2;
  			}
  			this.iconArray[i] = this.iconArray[i];
  		}
  		else if(i != a && this.iconArray[i].indexOf('outline') < 0){
  			this.iconArray[i] = this.iconArray[i] + "-outline";
  		} 
  	} 
  }
}
