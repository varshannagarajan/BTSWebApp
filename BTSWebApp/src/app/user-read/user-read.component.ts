import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  id: String;
  viewUser: User;
  constructor(
    private route: ActivatedRoute,
    private u: UserService
  ) {  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('_id');
    console.log(this.id);
   this.u.reqresUserGetByUsername(this.id).subscribe(s => {
    console.log(s);
    this.setViewUser(s);  
  });
  }

  setViewUser(user : User){
    this.viewUser = user;
  }
    
}

