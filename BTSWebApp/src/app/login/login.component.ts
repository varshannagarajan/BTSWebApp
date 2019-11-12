import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credentials } from '../credentials';
import { UserService } from '../user.service';

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

  constructor(private m: UserService, private router: Router, private a: AuthService, private jwtHelper: JwtHelperService) {
    this.credentials = new Credentials();
    this.credentials.user_email = '';
    this.credentials.user_password = '';

    this.loginError = '';
  }

  ngOnInit() {}

  // Methods

  onSubmit(): void {
    console.log(this.credentials);

    // Clear the existing toke
    localStorage.removeItem('access-token');
    // Attempt to login, by calling the login method of the auth service
    // Complete this method...
    this.a.login(this.credentials).subscribe(c => {
      localStorage.setItem('access_token', c.token);
      console.log(c);
      let tokenDecoded = this.jwtHelper.decodeToken(c.token);
      this.m.reqresUserGetById(tokenDecoded._id).subscribe(s => {
        this.m.setCurrentUser(s);
        console.log("yerrrr");
        console.log(this.m.getCurrentUser());
      });

    });
    //this.router.navigate(['/userContacts']);
    this.router.navigate(['/home']);

    // If successful...
    //   Save the token in the browser's local storage
    //   Navigate to a landing/info view (home page?)
    // If not successful...
    //   console.log the error
    //   Write an info message in the loginError property
  }
}
