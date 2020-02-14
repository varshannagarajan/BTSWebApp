import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {

  @Input()
  userOB: User;
  constructor() { }

  ngOnInit() {
  }

}
