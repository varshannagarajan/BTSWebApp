import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { EventService } from '../../services/event.service';
import { Events } from '../../classes/events';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html'
})
export class EventFeedComponent implements OnInit {
  user: User;
  userEvents: Events[];
  constructor(
    private route: ActivatedRoute,
    private m: UserService,
    private e: EventService,
    private router: Router
  ) {
    this.userEvents = new Array();
  }

  ngOnInit() {
    this.user = this.m.getCurrentUser();
    /*
    this.e.getUsersEvents(this.user.user_email).subscribe(s => {
      this.userEvents = s;
    });
    */
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
    this.router.navigate(['/eventRead/', e]);
  }
}
