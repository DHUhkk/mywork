import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { personPage } from "../person/person";
import { enterPage } from "../enter/enter";

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class informationPage {
  constructor(public navCtrl: NavController,
  public alerCtrl: AlertController) {
  }
  hpage(){
    this.navCtrl.setRoot(HomePage);
  }
  ppage(){
    this.navCtrl.setRoot(personPage);
  }
  epage(){
    this.navCtrl.setRoot(enterPage);
  }
  altre(){
    let confirm = this.alerCtrl.create({
      title: '确定退出登录？',
      buttons: [{
          text: '确定',
          handler: () => {
           console.log('Agree clicked');
           this.epage();
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        }
      ]
    });
    confirm.present()
  }
}
