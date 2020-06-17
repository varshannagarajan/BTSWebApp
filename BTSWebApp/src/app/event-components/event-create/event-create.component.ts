import { Component, OnInit } from '@angular/core';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { Address } from 'src/app/classes/address';
import { Attendee } from '../../classes/attendees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styles: [
    `
      .eventInfoFull {
        width: 100%;
      }
      .eventInfoHalf {
        width: 50%;
      }
      .eventInfoQuarter {
        width: 25%;
      }
    `
  ]
})
export class EventCreateComponent implements OnInit {
  currentUser: User;
  newEvent: Events;
  loginError: string;
  category: String;
  startDate: any;
  endDate: any;
  street: String;
  postalCode: String;
  city: String;
  province: String;
  country: String;
  private: boolean = false;

  constructor(
    private em: EventService,
    private um: UserService,
    private router: Router
  ) {
    this.newEvent = new Events();
    this.newEvent.ev_name = '';
    this.currentUser = this.um.currentUser;
    this.newEvent.ev_category = [];
    this.category = '';
    this.newEvent.ev_date = {start: new Date(), end: new Date()};
    this.newEvent.ev_address = new Address();
    this.newEvent.ev_address.street = '';
    this.newEvent.ev_address.postalCode = '';
    this.newEvent.ev_address.city = '';
    this.newEvent.ev_address.country = 'Canada';
  }

  ngOnInit() {}

  // Methods
  onSubmit(): void {
    if (this.category != '') {
      this.newEvent.ev_category.push(this.category);
    }
    let newEventCode = this.generateID();
    this.newEvent.ev_code = newEventCode;
    this.newEvent.ev_date.start = new Date(this.startDate);
    this.newEvent.ev_date.end = new Date(this.endDate);
    this.newEvent.ev_coordinator = this.um.getCurrentUser().user_email;
    this.newEvent.ev_attendees = [];
    this.newEvent.ev_photo = '';
    this.newEvent.ev_private = this.private;
    this.newEvent.ev_invitedUsers = [];
    this.newEvent.ev_address.street = this.street;
    this.newEvent.ev_address.postalCode = this.postalCode;
    this.newEvent.ev_address.city = this.city;
    
    // Change when other countries are added
    this.newEvent.ev_address.country = 'Canada';
    let newAttendee = new Attendee();
    newAttendee.user_email = this.currentUser.user_email;
    newAttendee.user_firstName = this.currentUser.user_firstName;
    newAttendee.user_lastName = this.currentUser.user_lastName;
    newAttendee.attendee_id = this.generateID();

    this.em.eventsCreate(this.newEvent).subscribe(createdEvent => {
      this.em.eventAddAttendee(newEventCode, newAttendee).subscribe(msg => {
        this.um.addEventToUser(newEventCode).subscribe(s => {
          this.router.navigate(['/eventRoom/', createdEvent._id]);
        });
      });
    });
  }

  generateID(): string {
    return (
      Date.now().toString(36) +
      Math.random()
        .toString(36)
        .substr(2, 5)
    ).toUpperCase();
  }
}
