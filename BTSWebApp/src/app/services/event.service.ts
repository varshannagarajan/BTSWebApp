import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from '../classes/events';
import { Observable } from 'rxjs';
import { Attendee } from '../classes/attendees';
import { EventAttendee } from '../event-components/event-room/event-room.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private currentEvent: Events;
  private url = environment.url;

  constructor(private http: HttpClient) {}

  // Get all
  eventsGetAll(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.url}events`);
  }

  // Get one
  eventsGetById(id: String): Observable<Events> {
    return this.http.get<Events>(`${this.url}events/${id}`);
  }

  eventGetByCode(id: String): Observable<Events> {
    return this.http.get<Events>(`${this.url}events/eventCode/${id}`);
  }

  getUsersEvents(username: String) {
    return this.http.get<Events[]>(`${this.url}events/userEvents/${username}`);
  }

  getCurrentEvents(): Events {
    return this.currentEvent;
  }

  eventSet(e: Events): void {
    this.currentEvent = e;
  }

  eventAddContact(a: EventAttendee) {
    return this.http.put(`${this.url}events/addContactWithAttendeeID`, a);
  }

  // Update
  eventsUpdate(e: Events) {
    return this.http.put(`${this.url}events/${e._id}`, e);
  }

  // Create
  eventsCreate(e: Events) {
    return this.http.post<any>(`${this.url}events`, e);
  }

  // Delete
  eventsDelete(eid: String) {
    return this.http.delete(`${this.url}events/${eid}`);
  }

  eventAddAttendee(ec: String, a: Attendee) {
    return this.http.put(`${this.url}events/attendees/${ec}`, a);
  }
}
