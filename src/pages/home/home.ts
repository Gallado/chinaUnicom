import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MessageCenterPage } from '../messageCenter/messageCenter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl =navCtrl;


  }

  scrollToTop = false;

 /* getScrollTop = function () {
    console.log('滚动了');

  };*/
  goLiuLiang = function () {
    console.log('点击了流量专区');
  };
  goMessageCenter = function(){
    this.navCtrl.push(MessageCenterPage);
  }


  /*doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (var i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }*/

}
