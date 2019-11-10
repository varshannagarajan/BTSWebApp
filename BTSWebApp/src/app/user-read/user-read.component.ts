import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { setDefaultService } from 'selenium-webdriver/chrome';

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
  ) {
    this.id = "";
    this.viewUser = new User();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('_id');
    console.log(this.id);
    /*this.u.reqresUserGetById(this.id).subscribe(s => {
      this.user = s;
    });
    */
   this.u.reqresUserGetByUsername(this.id).subscribe(s => {
    console.log(s);
    this.setUser(s);    
  });
  
  }

  setUser(newUser: User){
    this.viewUser = newUser;
    console.log("kobe hoe");
    console.log(this.viewUser);
  }
    
}

