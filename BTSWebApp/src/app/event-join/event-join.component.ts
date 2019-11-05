import { Component, OnInit } from '@angular/core';
import { Events } from '../events';

@Component({
  selector: 'app-event-join',
  templateUrl: './event-join.component.html',
})
export class EventJoinComponent implements OnInit {
  event: Events;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(): void{
    
  }
}
