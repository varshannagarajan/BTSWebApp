import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Properties

  credentials: Credentials;
  loginError: string;

  // Initialization

  constructor(

    private router: Router,
    private a: AuthService,
    private jwtHelper: JwtHelperService
  ) {

    this.credentials = new Credentials();
    this.credentials.user_email = '';
    this.credentials.user_password = '';

    this.loginError = '';
  }

  ngOnInit() {
  }

  // Methods

  onSubmit(): void {

    console.log(this.credentials);

    // Complete this method...

    // Clear the existing token

    // Attempt to login, by calling the login method of the auth service
    // If successful...
    //   Save the token in the browser's local storage
    //   Navigate to a landing/info view (home page?)
    // If not successful...
    //   console.log the error
    //   Write an info message in the loginError property

  }

}

// User name and password

export class Credentials {
  user_email: string;
  user_password: string;
}
