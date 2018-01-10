import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  scrollToTop = false;

  getScrollTop = function () {
    console.log('滚动了');

  };
  goLiuLiang = function () {
    console.log('点击了流量专区');
  }

}
