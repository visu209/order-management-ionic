import { Component } from '@angular/core';

import { OrdersPage } from '../orders/orders';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OrdersPage;
  tab2Root = ContactPage;


  constructor() {

  }
}
