import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Events } from '../../classes/events';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-read',
  templateUrl: './event-read.component.html'
})
export class EventReadComponent implements OnInit {
  id: String;
  event: Events;

  constructor(private route: ActivatedRoute, private m: EventService) {}

  ngOnInit() {
    const id = this.route.snapshot.params['_id'];
    this.m.eventGetByCode(id).subscribe(s => {
      this.event = s;
    });
  }
}
