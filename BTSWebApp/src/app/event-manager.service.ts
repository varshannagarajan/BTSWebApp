import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Events } from './events';
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router';
import { Attendee } from './attendees';
import { EventAttendee } from './event-room/event-room.component';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  private currentEvent: Events;
    


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  //private url: String = 'https://btsgroup11webservices.herokuapp.com/api/events';
  private url: String = "http://localhost:8080/api/events";
  

  // Get all
  eventsGetAll(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.url}`);
  }

  // Get one
  eventsGetById(id: string): Observable<Events> {
    return this.http.get<Events>(`${this.url}/${id}`);
  }

  getCurrentEvents():Events{
    return this.currentEvent;
  }

  eventSet(e:Events){
    this.currentEvent=e;
  }

  eventAddContact(a:EventAttendee){
    return this.http.put(`${this.url}/addContactWithAttendeeID`, a);
  }

  // Update
  eventsUpdate(e:Events){
    return this.http.put(`${this.url}/${e._id}`, e);
  }
  
  //Create
  eventsCreate(e:Events){
    return this.http.post<any>(`${this.url}`, e);
  }

  //Delete
  eventsDelete(eid:String){
    return this.http.delete(`${this.url}/${eid}`);
  }
}
