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
  ) {  }

  ngOnInit() {
    this.user = this.m.getCurrentUser();
    console.log(this.m.getCurrentUser());
  }

  viewContact(c:string){
    this.router.navigate(['/userRead/', c]);
  }

}
