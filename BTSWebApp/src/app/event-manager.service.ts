import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './events';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { User } from './user';
import { Attendee } from './attendees';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  private currentEvent: Events;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  //private url = 'https://btsgroup11webservices.herokuapp.com/api/events';
  private url = 'http://localhost:8080/api/events';

  // Get all
  eventsGetAll(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.url}`);
  }

  // Get one
  eventsGetById(id: String): Observable<Events> {
    return this.http.get<Events>(`${this.url}/${id}`);
  }

  eventGetByCode(id: String): Observable<Events> {
    return this.http.get<Events>(`${this.url}/eventCode/${id}`);
  }

  getCurrentEvents(): Events {
    return this.currentEvent;
  }

  eventSet(e: Events): void {
    this.currentEvent = e;
  }

  // Update
  eventsUpdate(e: Events) {
    return this.http.put(`${this.url}/${e._id}`, e);
  }

  // Create
  eventsCreate(e: Events) {
    return this.http.post<any>(`${this.url}`, e);
  }

  // Delete
  eventsDelete(eid: String) {
    return this.http.delete(`${this.url}/${eid}`);
  }

  eventAddAttendee(ec: String, a: Attendee) {
    return this.http.put(`${this.url}/attendees/${ec}`, a);
  }
}
