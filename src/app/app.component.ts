import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit {
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

  constructor(translate: TranslateService, public router: Router, private cookieService: CookieService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.validateAuth();
  }

  ngAfterViewInit() {
    // obtener ruta actual
    console.log(window.location.pathname);
    this.manageUnAuth();
  }

  manageUnAuth() {
    if (this.isAuth && (window.location.pathname == '/login' || window.location.pathname == '/register')) {
      this.router.navigate(['home'], { replaceUrl: true });
    } else {
      console.log('No hay usuario');
    }
  }

  validateAuth() {
    const userData = this.cookieService.get('user');
    console.log(userData);
    this.isAuth = userData !== '';
    console.log(this.isAuth);
    this.manageUnAuth();
  }
}
