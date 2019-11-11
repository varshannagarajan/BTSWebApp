import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.css']
})
export class UserContactsComponent implements OnInit {

  id: String;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private m: UserService,
    private router: Router
  ) {
    this.user = new User();
    this.user.user_firstName = "George of the Jungle";
  }

  ngOnInit() {
    this.user = this.m.getCurrentUser();
    console.log(this.m.getCurrentUser());
  }


  viewContact(c:string){
    console.log(c);
    this.router.navigateByUrl('/userRead/'+ c);
    /*this.m.reqresUserGetByUsername(c).subscribe(s => {
      this.id = s._id;
      console.log(this.id);
      this.router.navigateByUrl('/userRead/'+ s._id);
    });
    */
  }

  addContact(c:string){
    console.log(c);
  }

}