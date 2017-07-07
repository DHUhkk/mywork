import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { obtainPage } from "../obtain/obtain";
import { registerPage } from "../register/register";

@Component({
  selector: 'page-enter',
  templateUrl: 'enter.html'
})
export class enterPage {
  constructor(public navCtrl: NavController) {
  }
  openHome(){
      this.navCtrl.setRoot(HomePage);
  }
  openObtain(){
    this.navCtrl.setRoot(obtainPage);
  }

  openRegister(){
    this.navCtrl.setRoot(registerPage);
  }
}