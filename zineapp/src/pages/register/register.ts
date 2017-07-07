import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';0
import { enterPage } from "../enter/enter";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class registerPage {
  constructor(public navCtrl: NavController) {
  }
  openEnter(){
      this.navCtrl.setRoot(enterPage);
  }
}