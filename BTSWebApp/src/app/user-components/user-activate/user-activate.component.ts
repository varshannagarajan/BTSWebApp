import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Credentials } from '../../classes/credentials';

@Component({
  selector: 'app-user-activate',
  templateUrl: './user-activate.component.html'
})
export class UserActivateComponent implements OnInit {
  credentials: Credentials;
  activateError: string;

  constructor(private a: AuthService, private router: Router) {
    this.credentials = new Credentials();
    this.credentials.user_email = '';
    this.credentials.user_password = '';
    this.credentials.user_passwordConfirm = '';
  }

  ngOnInit() {}

  onSubmit(): void {
    this.a.activate(this.credentials).subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        this.activateError = error;
      }
    );
  }
}
