import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {}

  loginPage(){
    console.log('yea buddy')
    this.navCtrl.push(LoginPage);
  }
  registerPage(){
    console.log('get it')
    this.navCtrl.push(RegistrationPage);
  }
}
