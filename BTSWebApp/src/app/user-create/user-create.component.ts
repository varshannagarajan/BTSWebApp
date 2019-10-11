import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Contact } from '../contact';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styles: []
})

export class UserCreateComponent implements OnInit {
  user: User;
  createError: string;

  constructor(private a: AuthService, private router: Router) {
    this.user = new User();
    this.user.user_email = '';
    this.user.user_firstName = '';
    this.user.user_lastName = '';
    this.user.user_password = '';
    this.user.user_bio = '';
    this.user.user_statusActivated = false;
    this.user.user_photos = [''];
    this.user.user_contacts = [''];
    this.user.user_favourites = [''];
    this.user.user_eventsList = [''];
    this.user.user_contactInfo = new Contact();

  }

  ngOnInit() {}

  onSubmit(): void {
    this.a.create(this.user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      error => {
        this.createError = error;
      }
    );
  }
}