import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BTSWebApp';

  constructor(
    private m: UserService,
    private router: Router
 ) {
    this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          this.m.reqresUserGetById(this.m.currentUser._id).subscribe(s => {
            this.m.setCurrentUser(s);
            console.log(this.m.getCurrentUser());
          });
        }
     });
 }
}
