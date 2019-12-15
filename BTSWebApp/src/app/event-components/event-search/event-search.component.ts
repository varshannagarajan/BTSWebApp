import { Component, OnInit } from '@angular/core';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html'
})
export class EventSearchComponent implements OnInit {
  events: Events[];
  term: string;
  constructor(private e: EventService) {
    this.term = '';
    this.e.eventsGetAll().subscribe(s => {
      this.events = s;
    });
  }

  ngOnInit() {}
}
