import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BTSWebApp';

  constructor(
    private m: UserService,
    private router: Router,
    private auth: AuthService,
    private jwtHelper: JwtHelperService
     ) {
    this.router.events.subscribe((e) => {
        if (e instanceof NavigationEnd) {
          const token = localStorage.getItem('access_token');
          if (token) {
            if (!jwtHelper.isTokenExpired(token)) {
              auth.loggedIn = true;
            }
          }
          this.m.reqresUserGetById(this.m.currentUser._id).subscribe(s => {
            this.m.setCurrentUser(s);
          });
        }
     });
 }
}
