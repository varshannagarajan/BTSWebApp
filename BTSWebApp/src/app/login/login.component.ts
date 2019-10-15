import { Component, OnInit } from '@angular/core';

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

  constructor(
    private m: UserService,
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

    // Clear the existing toke
    localStorage.removeItem('access-token');
    // Attempt to login, by calling the login method of the auth service
    // Complete this method...
    this.a.login(this.credentials).subscribe(
      (data) => {
        localStorage.setItem('access_token', this.a.getToken());
        let tokenDecoded = this.jwtHelper.decodeToken(data.token);
        this.router.navigate(["/userRead", tokenDecoded._id]);
        /*this.m.reqresUserGetById(tokenDecoded._id).subscribe((user) => {
          this.m.user = user;
          this.router.navigate(["/users/userRead"], tokenDecoded._id);
        });*/
        
        //this.router.navigate(['/students/username/', tokenDecoded.userName]);
      
      }, error => {
        console.log(error)
        this.loginError = error;
      }
    );
    // If successful...
    //   Save the token in the browser's local storage
    //   Navigate to a landing/info view (home page?)
    // If not successful...
    //   console.log the error
    //   Write an info message in the loginError property


  }

}
