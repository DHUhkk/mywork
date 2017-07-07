import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class addPage {
  constructor(public navCtrl: NavController) {
  }

  openHome(){
    this.navCtrl.setRoot(HomePage);
  }
}