import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { Gongyu } from '../pages/gongyu/gongyu';
import { Zhengzu } from '../pages/zhengzu/zhengzu';
import { Auth } from '../pages/auth/auth';
import { Housedetail } from '../pages/housedetail/housedetail';
import { Contact } from '../pages/contact/contact';
import { Pay } from '../pages/pay/pay';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,//注册
    LoginPage,//登录
    RegisterPage,
    Gongyu,//公寓宿舍
    Zhengzu,//整租合租
    Auth,//认证
    Housedetail,//详情页
    Contact,//联系管家页
    Pay//支付
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    Gongyu,
    Zhengzu,
    Auth,
    Housedetail,//详情页
    Contact,//联系管家页
    Pay//支付

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
