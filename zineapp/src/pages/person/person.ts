import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { informationPage } from "../information/information";

import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class personPage {
  constructor(public navCtrl: NavController,
  public  toastCtrl: ToastController) {
  }
  ipage(){
    this.navCtrl.setRoot(informationPage);
  }

  warn(position: string) {
    let toast = this.toastCtrl.create({
      message: '保存二维码到手机成功，请在手机相册中查看图片',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
}