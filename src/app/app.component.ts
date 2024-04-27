import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

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
    { path: '/incoming', title: 'Incoming payments'},
    { path: '/outgoing', title: 'Outgoing  payments'},
  ];

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
  }
}
