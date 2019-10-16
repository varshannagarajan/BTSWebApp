import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivatedRoute } from '@angular/router';
import { EventManagerService } from '../event-manager.service'
import { NgForm } from '@angular/forms'
import { Events } from '../events';
import { User } from '../user';

@Component({
  selector: 'app-event-delete',
  templateUrl: './event-delete.component.html',
  styleUrls: ['./event-delete.component.css']
})
export class EventDeleteComponent implements OnInit {

  currentUser: User;
  event: Events;
  loginError: string;


  constructor(private route: ActivatedRoute, private m: EventManagerService) { 

  }

  ngOnInit() {
    this.event=this.m.getCurrentEvents();
  }

  // Methods
  onSubmit(){
    this.m.eventsDelete(this.event);
  }
}
