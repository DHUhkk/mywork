import { Component } from '@angular/core';
import { NavController, Platform } from "../../../node_modules/_ionic-angular@3.4.2@ionic-angular";
import { HomePage } from "../home/home";


@Component({
   selector: 'page-column',
  templateUrl: 'column.html'
})

export class columnPage {
  segmentsArray = ['search','text','person','heart'];
  segmentModel: string = this.segmentsArray[0];
  public tap:number=1;
  public tap1:number=2;
  constructor(public navCtrl: NavController,
            platform:Platform,
            ) {
  }


  backPage(){
    this.navCtrl.setRoot(HomePage);
  }
  tapEvent(e){
    this.tap++;
  }

  tap1Event(e){
    this.tap1++;
  }
}




