import { Injectable } from '@angular/core';
import { Events } from './events';
import { Observable } from 'rxjs'

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

  eventSet(e:Events):void{
      this.currentEvent=e;
      console.log(this.currentEvent);
  }
}
