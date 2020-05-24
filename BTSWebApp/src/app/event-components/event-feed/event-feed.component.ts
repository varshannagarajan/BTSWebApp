import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { EventService } from '../../services/event.service';
import { Events } from '../../classes/events';
import { DomSanitizer } from '@angular/platform-browser';
import { Address } from 'src/app/classes/address';
import { Attendee } from '../../classes/attendees';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html'
})
export class EventFeedComponent implements OnInit {
  user: User;
  userEvents: Events[];
  term: string;
  newAttendee: Attendee;
  eventCode: String;
  eventID: String;
  currDate: Date;

  constructor(
    private route: ActivatedRoute,
    private m: UserService,
    private e: EventService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.userEvents = new Array();
    this.term = '';
    this.newAttendee = new Attendee();
    this.eventCode = '';
    this.currDate = new Date();
    console.log(this.currDate);
  }

  ngOnInit() {
    this.user = this.m.getCurrentUser();
    for (let i = 0; i < this.user.user_eventsList.length; i++) {
      this.e.eventGetByCode(this.user.user_eventsList[i]).subscribe(s => {
        this.userEvents.push(s);
      });
    }
  }

  getDate(d): string {
    const formattedDate = d.start;
    return formattedDate;
  }

  viewEvent(e: string) {
    this.router.navigate(['/eventRoom/', e]);
  }

  mapsLink(address: Address) {
    return this.sanitizer.bypassSecurityTrustUrl(
      'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(
          address.street +
            ' ' +
            address.city +
            ' ' +
            address.province +
            ' ' +
            address.postalCode +
            ' ' +
            address.country
        )
    );
  }
  onSubmit(): void {
    this.newAttendee.user_email = this.m.currentUser.user_email;
    this.newAttendee.user_firstName = this.m.currentUser.user_firstName;
    this.newAttendee.user_lastName = this.m.currentUser.user_lastName;
    this.newAttendee.attendee_id = this.generateID();

    this.e.eventAddAttendee(this.eventCode, this.newAttendee).subscribe(msg => {
      this.m.addEventToUser(this.eventCode).subscribe(s => {
        this.e.eventGetByCode(this.eventCode).subscribe(s => {
          this.eventID = s._id;
          this.router.navigate(['/eventRoom/', this.eventID]);
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
