import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgForm } from '@angular/forms'
import { Events } from '../events';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

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
  updateEvent(): void{
    this.a.updateEv(this.credentials).subscribe();
    //console.log(this.credentials);
  }

}
