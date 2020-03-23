import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../../classes/events';
import { EventService } from '../../services/event.service';
import { MapMarker, MapInfoWindow } from '@angular/google-maps'

@Component({
  selector: 'app-event-room',
  templateUrl: './event-room.component.html'
})
export class EventRoomComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  id: String;
  user: User;
  event: Events;
  evAttendee: EventAttendee;
  attendeeUsers: User[];

  // Google Maps
  center: google.maps.LatLngLiteral;
  geocoder = new google.maps.Geocoder();
  markers = [];
  infoContent = '';

  constructor(
    private route: ActivatedRoute,
    private u: UserService,
    private e: EventService,
    private router: Router
  ) {
    this.user = this.u.getCurrentUser();
    this.evAttendee = new EventAttendee();
    this.evAttendee.attendeeId = '';
    this.evAttendee.eventCode = '';
    this.evAttendee.adderUserEmail = '';
    this.attendeeUsers = [];
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('_id');
    this.e.eventsGetById(this.id).subscribe(s => {
      this.event = s;

      this.setEventLocationToGoogleMaps()

      this.e.eventSet(this.event);
      for (let i = 0; i < this.event.ev_attendees.length; i++) {
        this.u
          .reqresUserGetByUsername(this.event.ev_attendees[i].user_email)
          .subscribe(s => {
            this.attendeeUsers.push(s);
          });
      }
    });
  }

  viewContact(c: String) {
    this.router.navigate(['/userRead/' + c]);
    /*this.m.reqresUserGetByUsername(c).subscribe(s => {
      this.id = s._id;
      this.router.navigateByUrl('/userRead/'+ s._id);
    });
    */
  }

  addContact(aID: String) {
    this.evAttendee.eventCode = this.event.ev_code;
    this.evAttendee.attendeeId = aID;
    this.evAttendee.adderUserEmail = this.user.user_email;
    this.e.eventAddContact(this.evAttendee).subscribe(x => {
      this.u.reqresUserGetByUsername(this.user.user_email).subscribe(s => {
        this.user = s;
        this.u.setCurrentUser(s);
      });
    });
  }

  setEventLocationToGoogleMaps() {
    var address = this.event.ev_address.street + ", " + this.event.ev_address.city + ", " + this.event.ev_address.province;
    console.log(address);
    this.geocoder.geocode({'address': address}, (results, status) => {
      if(status == "OK") {
        this.center = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        }
        this.addMarker(results[0].geometry.location.lat(), results[0].geometry.location.lng());
      } else {
        console.log("geocoder error");
      }
    });
  }

  addMarker(passedInLat, passedInLong) {
    this.markers.push({
      position: {
        lat: passedInLat,
        lng: passedInLong,
      },
      label: {
        color: 'red',
        text: this.event.ev_name,
      },
      title: this.event.ev_name,
      info: this.event.ev_description,
      options: {
        animation: google.maps.Animation.BOUNCE,
      },
    })

  }

  openMarkerInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }

  checkIfUserIsCoordinator(): Boolean {
    return this.event.ev_coordinator == this.u.currentUser.user_email;
  }

}

export class EventAttendee {
  eventCode: String;
  attendeeId: String;
  adderUserEmail: String;
}
