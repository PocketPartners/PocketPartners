import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartnerEntity } from '../../../../pockets/model/partnerEntity';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  @Output() toggleRegister: EventEmitter<void> = new EventEmitter<void>();
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.registerForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  register(): void {
    if (this.registerForm.valid) {
      const { username, email, password } = this.registerForm.value;
      console.log(username, email, password);
      const partner = { fullName: username, email: email, password: password }
      this.authService.register(partner).subscribe((response: any) => {
        console.log(response);
        this.toggleRegister.emit();
        this.router.navigate(['/login']);
      });
    }
  }

  wantToLogin(): void {
    this.toggleRegister.emit();
    this.router.navigate(['/login']);
  }
}
