import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';


@Component({
  selector: 'message-detail',
  templateUrl: 'messageDetail.html'
})
export class MessageDetailPage {
  paramsInfo = {};
  constructor(public navCtrl: NavController,navParams:NavParams) {
    this.paramsInfo = navParams.get('name');
    console.log(this.paramsInfo);
  }

}
