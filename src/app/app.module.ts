import { TixingPage } from './../pages/tixing/tixing';
import { ShixiangPage } from './../pages/shixiang/shixiang';
import { SettingsPage } from './../pages/settings/settings';
import { MubanPage } from './../pages/muban/muban';
import { LianxirenPage } from './../pages/lianxiren/lianxiren';
import { DaifaPage } from './../pages/daifa/daifa';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // 自定义页面
    DaifaPage,
    LianxirenPage,
    MubanPage,
    SettingsPage,
    ShixiangPage,
    TixingPage,

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    // 自定义页面
    DaifaPage,
    LianxirenPage,
    MubanPage,
    SettingsPage,
    ShixiangPage,
    TixingPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
