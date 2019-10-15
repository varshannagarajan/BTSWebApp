import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Events } from './events';
import { Observable } from 'rxjs'
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  currentEvent: Events;
    


  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  private url: String = 'https://blooming-woodland-73142.herokuapp.com/api/events';
  //private url: String = "http://localhost:8080/api/students";
  

  // Get all
  eventsGetAll(): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.url}`);
  }

  // Get one
  eventsGetById(id: string): Observable<Events> {
    return this.http.get<Events>(`${this.url}/${id}`);
  }

  eventsGet():Events{
    return this.currentEvent;
  }

  // Update
  eventsUpdate(e:Events){
    return this.http.put(`${this.url}/${e._id}`, e);
  }

  eventSet(e:Events):void{
    this.currentEvent=e;
}
}
