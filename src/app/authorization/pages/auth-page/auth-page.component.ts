import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements AfterViewInit {
  wantToRegister = true;


  ngAfterViewInit() {
    if (window.location.pathname == '/login') {
      this.wantToRegister = false;
    }
    if (window.location.pathname == '/register') {
      this.wantToRegister = true;
    }
  }

  toggleRegister() {
    this.wantToRegister = !this.wantToRegister;
  }

}
