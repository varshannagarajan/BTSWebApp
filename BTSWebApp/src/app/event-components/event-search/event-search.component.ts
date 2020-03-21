import { Component, OnInit } from '@angular/core';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Address } from 'src/app/classes/address';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html'
})
export class EventSearchComponent implements OnInit {
  events: Events[];
  term: string;
  constructor(private e: EventService, private sanitizer: DomSanitizer) {
    this.term = '';
    this.e.eventsGetAll().subscribe(s => {
      this.events = s;
    });
  }

  ngOnInit() {}

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
