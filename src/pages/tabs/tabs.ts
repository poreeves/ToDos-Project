import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ToDoPage } from '../to-do/to-do';
import { RegistrationPage } from '../registration/registration';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = LoginPage;
  tab3Root = ToDoPage;
  tab4Root = RegistrationPage;

  constructor() {

  }
}
