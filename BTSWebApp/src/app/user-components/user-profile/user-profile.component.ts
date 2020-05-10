import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styles: [`
  .userInfo{
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-flow: row wrap;
  }
  .userInfo button{
    height: 30px;
  }
`]
})
export class UserProfileComponent implements OnInit {
  user: User;
  staticAlertClosed = true;

  constructor(private u: UserService) { }

  ngOnInit(): void {
    this.user = this.u.getCurrentUser();
  }
}
