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
  constructor(
    private route: ActivatedRoute,
    private u: UserService,
    private e: EventManagerService,
    private router: Router
  ) { 
    this.user = this.u.getCurrentUser();
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
    this.router.navigateByUrl('/userRead/'+ c);
    /*this.m.reqresUserGetByUsername(c).subscribe(s => {
      this.id = s._id;
      console.log(this.id);
      this.router.navigateByUrl('/userRead/'+ s._id);
    });
    */
  }

}
