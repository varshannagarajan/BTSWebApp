import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { Contact } from '../../classes/contact';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html'
})
export class UserUpdateComponent implements OnInit {
  user: User;
  constructor(private u: UserService) {
    this.user = new User();
    this.user.user_email = '';
    this.user.user_firstName = '';
    this.user.user_lastName = '';
    this.user.user_bio = '';
    this.user.user_statusActivated = false;
    this.user.user_photos = [''];
    this.user.user_contacts = [''];
    this.user.user_favourites = [''];
    this.user.user_eventsList = [''];
    this.user.user_contactInfo = new Contact();
  }

  ngOnInit() {}
  // Methods
  onSubmit(): void {
    this.u.updateUser(this.user).subscribe();
    // console.log(this.credentials);
  }
}
