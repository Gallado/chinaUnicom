import { Component } from '@angular/core';

import { ServicePage } from '../service/service';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PersonCenterPage } from '../personCenter/personCenter';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ServicePage;
  tab3Root = ContactPage;
  tab4Root = PersonCenterPage;

  constructor() {

  }
}
