import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-token-view',
  templateUrl: './token-view.component.html'
})
export class TokenViewComponent {
  tokenRaw?: string;
  tokenDecoded?: any;
  tokenIssuedTimestamp: any;

  constructor(private jwtHelper: JwtHelperService) {
    // Fetch the token from the browser's local storage
    this.tokenRaw = localStorage.getItem('access_token');
    // If it exists, decode it, otherwise, create placeholder values for the view
    if (this.tokenRaw) {
      this.tokenDecoded = this.jwtHelper.decodeToken(this.tokenRaw);
      this.tokenIssuedTimestamp = new Date(this.tokenDecoded.iat * 1000);
    } else {
      this.tokenRaw = '(no token)';
      this.tokenDecoded = { user_email: '', user_firstName: '' };
      this.tokenIssuedTimestamp = '';
    }
  }
}
