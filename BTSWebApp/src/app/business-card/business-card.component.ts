import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styles: []
})
export class BusinessCardComponent implements OnInit {

  @Input()
  userOB: User;
  constructor() { }

  ngOnInit() {
  }

}
