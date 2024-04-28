import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { MatDialog } from "@angular/material/dialog";
import { ContactComponent } from "./contacts/pages/contact/contact.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PocketPartners';
  options = [
    { path: '/home', title: 'Home' },
    { path: '/groups', title: 'Groups' },
    { path: '/contacts', title: 'Contacts' },
    { path: '/incoming', title: 'Incoming payments' },
    { path: '/outgoing', title: 'Outgoing  payments' },
    { path: '/expenses', title: 'Expenses' },
  ];

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

  }



  ngOnInit() {
  }
}
