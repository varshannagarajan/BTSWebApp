import { Component, OnInit } from '@angular/core';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html'
})
export class EventCreateComponent implements OnInit {
  currentUser: User;
  newEvent: Events;
  loginError: string;

  constructor(
    private em: EventService,
    private um: UserService
  ) {
    this.newEvent = new Events();
    this.newEvent.ev_name = '';
    this.currentUser = this.um.currentUser;
    console.log(this.currentUser.user_firstName);
  }

  ngOnInit() {
    // this.currentUser = this.um.getCurrentUser();
    // console.log(this.newEvent.ev_name);
    // console.log(this.currentUser.user_firstName);
  }

  // Methods
  onSubmit(): void {
    // this.newEvent.ev_coordinator = this.currentUser.user_email;
    this.em.eventsCreate(this.newEvent).subscribe(data => {
      console.log('Event Created');
    });
  }
}
