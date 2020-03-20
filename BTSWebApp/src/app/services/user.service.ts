import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User, PictureURL } from '../classes/user';
import { Credentials } from '../classes/credentials';
import { DeleteContact } from '../user-components/user-contacts/user-contacts.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  private url = environment.url;

  constructor(private http: HttpClient) {
    this.currentUser = new User();
   }

  reqresUserGetAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}users`);
  }

  reqresUserGetById(id: String): Observable<User> {
    return this.http.get<User>(`${this.url}users/${id}`);
  }

  reqresUserGetByUsername(username: String): Observable<User> {
    return this.http.get<User>(`${this.url}users/username/${username}`);
  }

  deleteContact(a: DeleteContact) {
    return this.http.put(`${this.url}users/deleteContact`, a);
  }

  updateUser(user: User) {
    return this.http.put(`${this.url}users/${user.user_email}`, user);
  }

  addProfilePicture(profilePicture: PictureURL) {
    return this.http.put(`${this.url}users/add-profile-picture`, profilePicture);
  }

  addLogoPicture(profilePicture: PictureURL) {
    return this.http.put(`${this.url}users/add-logo-picture`, profilePicture);
  }

  deleteUser(credentials: Credentials) {
    return this.http.delete(`${this.url}users/${credentials.user_email}`);
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

  addEventToUser(ec: String) {
    return this.http.put(`${this.url}users/addEvent/${ec}`, this.currentUser);
  }

  create(user: User): Observable<any> {
    return this.http.post<any>(`${this.url}users`, user);
  }
}
