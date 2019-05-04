import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToDoPage } from '../to-do/to-do';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  form = {};

  todo = {}
  logForm() {
    console.log(this.todo)
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register(){
    console.log('Registering')
    console.log(this.form)
    this.navCtrl.setRoot(ToDoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
