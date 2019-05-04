import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToDoPage } from '../to-do/to-do';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  form = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signin(){
    console.log('signing in')
    console.log(this.form)
    this.navCtrl.setRoot(ToDoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
