import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms';
import { Credentials } from '../credentials';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  credentials: Credentials;
  constructor(
    private router: Router,
    private u: UserService,
    private jwtHelper: JwtHelperService
  ) {
    this.credentials = new Credentials();
    this.credentials.user_email = '';
    this.credentials.user_password = '';
    this.credentials.user_passwordConfirm = '';
  }

  ngOnInit() {}
  // Methods
  onSubmit(): void {
    this.u.deleteUser(this.credentials).subscribe();
    // console.log(this.credentials);
  }
}
