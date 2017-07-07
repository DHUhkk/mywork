import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-example',
  templateUrl: 'example.html'
})
export class examplePage {
  constructor(public navCtrl: NavController) {
  }
  bhpage(){
      this.navCtrl.setRoot(HomePage);
  }
}