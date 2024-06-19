import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from './iam/services/authentication.service';

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
    { path: '/users', title: 'Users' },
    { path: '/incoming', title: 'Incoming payments' },
    { path: '/outgoing', title: 'Outgoing  payments' },
    { path: '/expenses', title: 'Expenses' },
  ];

  isAuth = false;
  currentUsername: string = '';
  currentId: number = 0;
  constructor(translate: TranslateService, public router: Router, private authenticationService: AuthenticationService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.authenticationService.isSignedIn.subscribe(
      (isAuth: any) => {
        this.isAuth = isAuth;
      }
    );
    this.authenticationService.currentUsername.subscribe(
      (username: any) => {
        this.currentUsername = username;
      }
    );
  }
}
