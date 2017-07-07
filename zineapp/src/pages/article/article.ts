import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class articlePage {
  constructor(public navCtrl: NavController) {
  }
  bHome(){
    this.navCtrl.setRoot(HomePage);
  }
}
