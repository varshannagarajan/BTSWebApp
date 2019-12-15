import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../classes/credentials';
import { User } from '../classes/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {
  private url = environment.url;

  constructor(private http: HttpClient) {}

  public getToken(): string {
    return localStorage.getItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (token) {
      console.log('token exists');
      return true;
    } else {
      console.log('no token');
      return false;
    }
  }

  login(credentials: Credentials): Observable<any> {
    // Attempt to login
    // ##### EDIT the following to match the path to your web API login resource
    return this.http.post<any>(`${this.url}users/login`, credentials);
  }

  create(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}users`, user);
  }

  activate(credentials: Credentials): Observable<any> {
    return this.http.post<any>(`${this.url}users/activate`, credentials);
  }
}
