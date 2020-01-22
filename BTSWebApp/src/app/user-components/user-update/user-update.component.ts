import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { Contact } from '../../classes/contact';
import { UserService } from '../../services/user.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styles: [`
    .buttonRow a{
      float: left;
    }
    .buttonRow button{
      float: right;
    }

  `],
})
export class UserUpdateComponent implements OnInit {
  user: User;
 
  constructor(
    private u: UserService,
    private router: Router
    ) {
    this.user = _.cloneDeep(this.u.currentUser, true);
    console.log(this.user);

  }

  ngOnInit() {}
  // Methods
  onSubmit(): void {
    this.user.user_employmentInfo.occupation = "Manager";
    console.log(this.user.user_employmentInfo.occupation);
    this.u.updateUser(this.user).subscribe();
    this.router.navigate(['/userContacts/']);
    console.log(this.user);
  }
}
