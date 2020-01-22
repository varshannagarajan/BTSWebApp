import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';
import { Attendee } from 'src/app/classes/attendees';

@Component({
  selector: 'app-event-room',
  templateUrl: './event-room.component.html'
})
export class EventRoomComponent implements OnInit {
  id: String;
  user: User;
  event: Events;
  evAttendee: EventAttendee;
  attendeeUsers: User[];

  constructor(
    private route: ActivatedRoute,
    private u: UserService,
    private e: EventService,
    private router: Router
  ) {
    this.user = this.u.getCurrentUser();
    this.evAttendee = new EventAttendee();
    this.evAttendee.attendeeId = '';
    this.evAttendee.eventCode = '';
    this.evAttendee.adderUserEmail = '';
    this.attendeeUsers = [];
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('_id');
    this.e.eventsGetById(this.id).subscribe(s => {
      this.event = s;
      this.e.eventSet(this.event);
      console.log('Number of attendees is ' +  this.event.ev_attendees.length);
      for(let i = 0; i < this.event.ev_attendees.length; i++){
        this.u.reqresUserGetByUsername(this.event.ev_attendees[i].user_email).subscribe(s => {
          this.attendeeUsers.push(s);
          console.log('User Object' + s);
        });
        console.log('User Object' + this.attendeeUsers);
      }
    });
  }

  viewContact(c: String) {
    console.log(c);
    this.router.navigate(['/userRead/' + c]);
    /*this.m.reqresUserGetByUsername(c).subscribe(s => {
      this.id = s._id;
      console.log(this.id);
      this.router.navigateByUrl('/userRead/'+ s._id);
    });
    */
  }

  addContact(aID: String) {
    console.log(aID);
    this.evAttendee.eventCode = this.event.ev_code;
    this.evAttendee.attendeeId = aID;
    this.evAttendee.adderUserEmail = this.user.user_email;
    console.log(this.evAttendee);
    this.e.eventAddContact(this.evAttendee).subscribe(x => {
      console.log(x);
      this.u.reqresUserGetByUsername(this.user.user_email).subscribe(s => {
        this.user = s;
        this.u.setCurrentUser(s);
        console.log(s);
        console.log(this.u.currentUser);
      });
    });
  }
}

export class EventAttendee {
  eventCode: String;
  attendeeId: String;
  adderUserEmail: String;
}
