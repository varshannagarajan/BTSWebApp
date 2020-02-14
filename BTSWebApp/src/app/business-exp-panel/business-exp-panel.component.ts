import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-business-exp-panel',
  templateUrl: './business-exp-panel.component.html',
  styleUrls: ['./business-exp-panel.component.css']
})
export class BusinessExpPanelComponent implements OnInit {
  panelOpen: boolean;
  @Input()
  userOB: User[];
  constructor() { }

  ngOnInit(): void {
  }

}
