import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';
import { EventService } from '../../services/event.service';
import { Events } from '../../classes/events';
import { DomSanitizer } from '@angular/platform-browser';
import { Address } from 'src/app/classes/address';

@Component({
  selector: 'app-event-feed',
  templateUrl: './event-feed.component.html'
})
export class EventFeedComponent implements OnInit {
  user: User;
  pastEvents: Events[];
  futureEvents: Events[];
  futureTerm: string;
  pastTerm: string;
  today: Date;

  constructor(
    private route: ActivatedRoute,
    private m: UserService,
    private e: EventService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
    this.pastEvents = new Array();
    this.futureEvents = new Array();
    this.futureTerm = '';
    this.pastTerm = '';
    this.today = new Date();
  }

  ngOnInit() {
    this.user = this.m.getCurrentUser();
    for (let i = 0; i < this.user.user_eventsList.length; i++) {
      this.e.eventGetByCode(this.user.user_eventsList[i]).subscribe(s => {
        if (new Date(s.ev_date.end) > this.today){
          this.futureEvents.push(s);
        }
        else{
          this.pastEvents.push(s);
        }
        
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
}
