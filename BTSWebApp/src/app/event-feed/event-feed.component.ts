import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { EventManagerService } from '../event-manager.service';
import { Events } from '../events';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.css']
})
export class EventFeedComponent implements OnInit {

  user: User;
  userEvents: Events[];
  constructor(
    private route: ActivatedRoute,
    private m: UserService,
    private e: EventManagerService,
    private router: Router
  ) { 
    this.userEvents = new Array();
  }

  ngOnInit() {
    this.user = this.m.getCurrentUser();
    console.log(this.m.getCurrentUser());
    /*
    this.e.getUsersEvents(this.user.user_email).subscribe(s => {
      this.userEvents = s;
      console.log(this.userEvents);
    });
    */
    for(let i = 0; i < this.user.user_eventsList.length; i++){
      this.e.eventGetByCode(this.user.user_eventsList[i]).subscribe(s => {
        console.log(s);
        this.userEvents.push(s);
      });
    }
  }

  getDate(d): string{
    let formattedDate = d.start;
    return formattedDate;
  }

  viewEvent(e: string){
    this.router.navigate(['/eventRead/', e]);
  }
}
