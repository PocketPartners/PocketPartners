import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required]
  });
  email: string = '';
  password: string = '';
  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder, private authService: AuthService, private cookieService: CookieService) { }

  login() {
    this.email = this.firstFormGroup.get('firstCtrl')?.value as string;
    this.password = this.firstFormGroup.get('secondCtrl')?.value as string;
    // TODO: Call the service and ret urn the user
    //this.authService.login(this.email, this.password);
    this.authService.getAll().subscribe((partner: any) => {
      partner.forEach((element: any) => {
        if (element.email == this.email && element.password == this.password) {
          console.log('User Found');
          console.log(element);
          this.cookieService.set('user', JSON.stringify(element));
        }
      });
    });
  }
}

