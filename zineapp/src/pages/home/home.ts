import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { informationPage } from "../information/information";
import { columnPage } from "../column/column";
import { articlePage } from "../article/article";
import { examplePage } from "../example/example";
import { addPage } from "../add/add";
import { ToastController } from "../../../node_modules/_ionic-angular@3.4.2@ionic-angular/components/toast/toast-controller";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  public  toastCtrl: ToastController) {

  }
  openEdit(){

    this.navCtrl.setRoot(articlePage);
  }
  
  openInformation(){
    this.navCtrl.setRoot(informationPage);
  }

  openColumn(){
    this.navCtrl.setRoot(columnPage);
  }

  openExample(){
    this.navCtrl.setRoot(examplePage)
  }

  openAdd(){
    this.navCtrl.setRoot(addPage);
  }

  warn(position: string) {
    let toast = this.toastCtrl.create({
      message: '同步成功',
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }
}
