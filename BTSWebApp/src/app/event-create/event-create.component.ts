import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms'
import { Events } from '../events';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  credentials: Events;
  loginError: string;


  constructor(
    
    private router: Router,
    private a: AuthService,
    private jwtHelper: JwtHelperService
  ) {

    this.credentials = new Events();
    this.credentials.ev_name = '';
    this.credentials.ev_description = '';
    this.credentials.ev_company = '';

    this.loginError = '';
  }

  ngOnInit() {
  }

  // Methods
  createEvent(): void{
    this.a.createEv(this.credentials).subscribe();
    //console.log(this.credentials);
  }

}
