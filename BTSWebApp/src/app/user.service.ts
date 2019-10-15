import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

import { User } from './user';
import { Credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private http: HttpClient) { }

  private urlReqres =
    'https://btsgroup11webservices.herokuapp.com/api/users';

  reqresUserGetAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlReqres}`);
  }

  reqresUserGetById(id: number): Observable<User> {
    return this.http.get<User>(`${this.urlReqres}/${id}`);
  }

  updateUser(user: User) {
    return this.http.put(`${this.urlReqres}/${user.user_email}`, user);
  }

  deleteUser(credentials: Credentials) {
    return this.http.delete(`${this.urlReqres}/${credentials.user_email}`);
  }
}
