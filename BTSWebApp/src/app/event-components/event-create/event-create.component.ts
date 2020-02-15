import { Component, OnInit } from '@angular/core';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import {FormControl} from '@angular/forms';
import { Address } from 'src/app/classes/address';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styles: [`
  .eventInfo{
      width:100%;
  }

  .eventTime{
      width:50%;
  }

  `],
})
export class EventCreateComponent implements OnInit {
  currentUser: User;
  newEvent: Events;
  loginError: string;
  category: String;
  startDate: String;
  endDate: String;
  street: String;
  postalCode: String;
  city: String;
  province: String;
  country: String;

  constructor(
    private em: EventService,
    private um: UserService
  ) {
    this.newEvent = new Events();
    this.newEvent.ev_name = '';
    this.currentUser = this.um.currentUser;
    this.newEvent.ev_category = [];
    this.category = "";
    this.newEvent.ev_date = {start: "", end: ""};
    this.newEvent.ev_address = new Address;
    this.newEvent.ev_address.street = "";
    this.newEvent.ev_address.postalCode = "";
    this.newEvent.ev_address.city = "";
    this.newEvent.ev_address.country = "Canada";
  }

  ngOnInit() {
  }

  // Methods
  onSubmit(): void {
    // this.newEvent.ev_coordinator = this.currentUser.user_email;
    if(this.category != ""){
      this.newEvent.ev_category.push(this.category);
    }
    this.newEvent.ev_code = this.generateID();
    this.newEvent.ev_date.start = this.startDate;
    this.newEvent.ev_date.end = this.endDate;
    this.newEvent.ev_coordinator = this.um.getCurrentUser().user_email;
    this.newEvent.ev_attendees = [];
    this.newEvent.ev_photo = "";
    this.newEvent.ev_private = false;
    this.newEvent.ev_invitedUsers = []
    this.newEvent.ev_address.street = this.street;
    this.newEvent.ev_address.postalCode = this.postalCode;
    this.newEvent.ev_address.city = this.city;
    // Change when other countries are added
    this.newEvent.ev_address.country = "Canada";
    

    console.log(this.newEvent);
    // this.em.eventsCreate(this.newEvent).subscribe(data => {
    // });
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
