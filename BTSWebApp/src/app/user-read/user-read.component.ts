import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  id: String;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private u: UserService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.u.reqresUserGetById(this.id).subscribe(s => (this.user = s));
  }
  ngDoCheck() {
    this.u.user = this.user;
  }
}
