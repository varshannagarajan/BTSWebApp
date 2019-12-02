import { Component, OnInit } from '@angular/core';
import { Events } from '../events';
import { ActivatedRoute, Router } from '@angular/router';
import { EventManagerService } from '../event-manager.service';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  events: Events[];
  term: string;
  constructor(
    private e: EventManagerService
    ) {
      this.term = '';
      this.e.eventsGetAll().subscribe(s => {
        this.events = s;
      });
    }

  ngOnInit() {
  }

}
