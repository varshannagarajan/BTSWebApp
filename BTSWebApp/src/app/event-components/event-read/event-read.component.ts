import { Component, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Events } from '../../classes/events';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import { MapMarker, MapInfoWindow } from '@angular/google-maps'

@Component({
  selector: 'app-event-read',
  templateUrl: './event-read.component.html'
})
export class EventReadComponent implements OnInit {
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow

  id: String;
  event: Events;
  attendeeUsers: User[];

  // Google Maps
  center: google.maps.LatLngLiteral;
  geocoder = new google.maps.Geocoder();
  markers = [];
  infoContent = '';

  constructor(
    private route: ActivatedRoute,
    private u: UserService,
    private e: EventService
  ) {
    this.attendeeUsers = [];
  }

  ngOnInit() {
    const id = this.route.snapshot.params['_id'];
    this.e.eventGetByCode(id).subscribe(s => {
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
    if(this.event.ev_coordinator == this.u.currentUser.user_email) {
      return true;
    }
    return false;
  }

}
