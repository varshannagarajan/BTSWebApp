import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Events } from '../events';
import { EventManagerService } from '../event-manager.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  currentUser: User;
  newEvent: Events;
  loginError: string;


  constructor(private route: ActivatedRoute, private em: EventManagerService, private um: UserService) { 
    this.newEvent = new Events();
    this.newEvent.ev_name = '';
    // set event empty
  }

  ngOnInit() {
    //this.currentUser = this.um.getCurrentUser();
    //console.log(this.newEvent.ev_name);
    //console.log(this.currentUser.user_firstName);
  }

  // Methods
  onSubmit(): void {
    //this.newEvent.ev_coordinator = this.currentUser.user_email;
    this.em.eventsCreate(this.newEvent).subscribe((data)=>{
      console.log("Event Created");
    });;
  }
}
