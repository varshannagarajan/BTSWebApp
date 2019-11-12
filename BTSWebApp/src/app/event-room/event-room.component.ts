import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../events';
import { EventManagerService } from '../event-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-room',
  templateUrl: './event-room.component.html',
  styleUrls: ['./event-room.component.css']
})
export class EventRoomComponent implements OnInit {
  id: string;
  user: User;
  event: Events;
  evAttendee: EventAttendee;

  constructor(
    private route: ActivatedRoute,
    private u: UserService,
    private e: EventManagerService,
    private router: Router
  ) { 
    this.user = this.u.getCurrentUser();
    this.evAttendee = new EventAttendee();
    this.evAttendee.attendeeId = "";
    this.evAttendee.eventCode = "";
    this.evAttendee.adderUserEmail = "";

  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('_id');
    this.e.eventsGetById(this.id).subscribe(s => {
      this.event = s;
      this.e.eventSet(this.event);
      console.log("*******************");
      console.log(this.e.getCurrentEvents());
    });
  }

  viewContact(c:string){
    console.log(c);
    this.router.navigate(['/userRead/'+ c]);
    /*this.m.reqresUserGetByUsername(c).subscribe(s => {
      this.id = s._id;
      console.log(this.id);
      this.router.navigateByUrl('/userRead/'+ s._id);
    });
    */
  }

  addContact(aID:string){
    console.log(aID);
    this.evAttendee.eventCode = this.event.ev_code;
    this.evAttendee.attendeeId = aID;
    this.evAttendee.adderUserEmail = this.user.user_email;
    this.e.eventAddContact(this.evAttendee);
    
  }

}

export class EventAttendee {
  eventCode: string;
  attendeeId: string;
  adderUserEmail: string;
}