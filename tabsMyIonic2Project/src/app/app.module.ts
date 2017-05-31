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
import { Livinggoods } from '../pages/livinggoods/livinggoods';
import { Livingservice } from '../pages/livingservice/livingservice';
import { Goodspay } from '../pages/goodspay/goodspay';
import { Baochepay } from '../pages/baochepay/baochepay';
import { Baojiepay } from '../pages/baojiepay/baojiepay';
import { Dingcanpay } from '../pages/dingcanpay/dingcanpay';
import { Baoche } from '../pages/baoche/baoche';
import { Baojie } from '../pages/baojie/baojie';
import { Dingcan } from '../pages/dingcan/dingcan';
import { Dingcanfuwu } from '../pages/dingcanfuwu/dingcanfuwu';
import { Authstep2 } from '../pages/authstep2/authstep2';
import { Gongyudetail } from '../pages/gongyudetail/gongyudetail';

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
    Pay,//支付
    Livinggoods,//生活用品
    Livingservice,//生活服务
    Goodspay,//生活用品支付
    Baochepay,//包车支付
    Baojiepay,//保洁支付
    Dingcanpay,//订餐支付
    Dingcan,//订餐
    Baojie,//保洁
    Baoche,//包车
    Dingcanfuwu,
    Authstep2,
    Gongyudetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
        backButtonText: '',
        iconMode: 'ios',  
        mode: 'ios'
    })
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
    Pay,//支付
    Livinggoods,//生活用品
    Livingservice,//生活服务
    Goodspay,//生活用品支付
    Baochepay,//包车支付
    Baojiepay,//保洁支付
    Dingcanpay,//订餐支付
    Dingcan,//订餐
    Baojie,//保洁
    Baoche,//包车
    Dingcanfuwu,
    Authstep2,
    Gongyudetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
