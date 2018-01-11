import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MessageDetailPage } from './messageDetail';


@Component({
  selector: 'notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  constructor(public navCtrl: NavController) {

  };
  dataList = [{
    "titleName":"关于取消联通A套餐计划",
    "status":0,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":0,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":1,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":0,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":1,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":1,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":0,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":0,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":1,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  },{
    "titleName":"关于取消联通A套餐计划",
    "status":0,
    "mainInfo":"联通取消了关于A套餐的所以计划，营业厅以及集团内将取消这项服务。希望所有的用户都您呢个追到这项套餐的服务和取消内容",
    "date":"2018年1月10日 10:10:00"
  }];


  goDetail = function(data){
    console.log(data);
    this.navCtrl.push(MessageDetailPage,{"name":data.titleName});

  }







}
