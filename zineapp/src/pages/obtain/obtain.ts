import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { enterPage } from "../enter/enter";

@Component({
  selector: 'page-obtain',
  templateUrl: 'obtain.html'
})
export class obtainPage {
  constructor(public navCtrl: NavController) {
  }
  openEnter(){
      this.navCtrl.setRoot(enterPage);
  }
}