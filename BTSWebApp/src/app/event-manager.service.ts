import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './events';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  private currentEvent: Events;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  private url = 'https://btsgroup11webservices.herokuapp.com/api/events';

  // Get all
  eventsGetAll(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.url}`);
  }

  // Get one
  eventsGetById(id: string): Observable<Events> {
    return this.http.get<Events>(`${this.url}/${id}`);
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
  eventsDelete(eid: string) {
    return this.http.delete(`${this.url}/${eid}`);
  }
}
