import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ServicePage } from '../pages/service/service';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PersonCenterPage } from '../pages/personCenter/personCenter';

import { MessageCenterPage } from '../pages/messageCenter/messageCenter';
import { NotificationPage } from '../pages/messageCenter/notification';
import { OfficialNewsPage } from '../pages/messageCenter/officialNews';
import { MessageDetailPage } from '../pages/messageCenter/messageDetail';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ServicePage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonCenterPage,
    MessageCenterPage,
    NotificationPage,
    OfficialNewsPage,
    MessageDetailPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: 'true'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ServicePage,
    ContactPage,
    HomePage,
    TabsPage,
    PersonCenterPage,
    MessageCenterPage,
    NotificationPage,
    OfficialNewsPage,
    MessageDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
