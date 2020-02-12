import { Component, OnInit } from '@angular/core';
import { Credentials } from '../../classes/credentials';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html'
})
export class UserDeleteComponent implements OnInit {
  credentials: Credentials;
  constructor(
    private u: UserService
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
  }
}
