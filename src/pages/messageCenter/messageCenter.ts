import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NotificationPage } from './notification';
import { OfficialNewsPage } from './officialNews';

@Component({
  templateUrl: 'messageCenter.html'
})
export class MessageCenterPage {
  //@ViewChild('mainTabs') tabRef:Tabs;

  constructor(public navCtrl: NavController) { }
  tab1Root:any = NotificationPage;
  tab2Root:any = OfficialNewsPage;


  /*ionViewDidEnter(){
    let mainTabs = this.tabRef;
    mainTabs.select(1);
  }*/

}
