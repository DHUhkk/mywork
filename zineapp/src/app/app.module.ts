import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { columnPage } from "../pages/column/column";
import { informationPage } from "../pages/information/information";
import { personPage } from "../pages/person/person";
import { articlePage } from "../pages/article/article";
import { examplePage } from "../pages/example/example";
import { enterPage } from "../pages/enter/enter";
import { obtainPage } from "../pages/obtain/obtain";
import { registerPage } from "../pages/register/register";
import { addPage } from "../pages/add/add";

@NgModule({
  declarations: [
    MyApp,
    informationPage,
    HomePage,
    columnPage,
    personPage,
    articlePage,
    examplePage,
    enterPage,
    obtainPage,
    registerPage,
    addPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    columnPage,
    informationPage,
    personPage,
    articlePage,
    examplePage,
    enterPage,
    obtainPage,
    registerPage,
    addPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
