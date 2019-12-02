import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { User } from './user';
import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  constructor(private http: HttpClient) {
    this.currentUser = new User();
   }

  // private urlReqres = 'http://localhost:8080/api/users';
  private urlReqres = 'https://btsgroup11webservices.herokuapp.com/api/users';

  reqresUserGetAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlReqres}`);
  }

  reqresUserGetById(id: String): Observable<User> {
    return this.http.get<User>(`${this.urlReqres}/${id}`);
  }

  reqresUserGetByUsername(username: String): Observable<User> {
    return this.http.get<User>(`${this.urlReqres}/username/${username}`);
  }

  updateUser(user: User) {
    return this.http.put(`${this.urlReqres}/${user.user_email}`, user);
  }

  deleteUser(credentials: Credentials) {
    return this.http.delete(`${this.urlReqres}/${credentials.user_email}`);
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  addEventToUser(ec: String){
    return this.http.put(`${this.urlReqres}/addEvent/${ec}`, this.currentUser);
  }
}
