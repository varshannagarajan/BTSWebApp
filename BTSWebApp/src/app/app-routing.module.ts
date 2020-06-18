import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './event-components/event-create/event-create.component';
import { EventDeleteComponent } from './event-components/event-delete/event-delete.component';
import { EventFeedComponent } from './event-components/event-feed/event-feed.component';
import { EventJoinComponent } from './event-components/event-join/event-join.component';
import { EventRoomComponent } from './event-components/event-room/event-room.component';
import { EventSearchComponent } from './event-components/event-search/event-search.component';
import { EventUpdateComponent } from './event-components/event-update/event-update.component';
import { HomeComponent } from './home/home.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TokenViewComponent } from './token-view/token-view.component';
import { UserContactsComponent } from './user-components/user-contacts/user-contacts.component';
import { UserDeleteComponent } from './user-components/user-delete/user-delete.component';
import { UserReadComponent } from './user-components/user-read/user-read.component';
import { UserUpdateComponent } from './user-components/user-update/user-update.component';
import { UserCreateComponent } from './user-components/user-create/user-create.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { AuthGuard } from './services/guard-auth.service';
import { UserProfileComponent } from './user-components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'welcome', component: LandingPageComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'eventCreate', component: EventCreateComponent },
  { path: 'eventUpdate/:_id', component: EventUpdateComponent },
  { path: 'eventDelete', component: EventDeleteComponent },
  { path: 'eventJoin', component: EventJoinComponent },
  { path: 'eventRoom/:_id', component: EventRoomComponent },
  { path: 'eventFeed', component: EventFeedComponent },
  { path: 'userCreate', component: UserCreateComponent },
  { path: 'userRead/:_id', component: UserReadComponent },
  { path: 'userUpdate', component: UserUpdateComponent },
  { path: 'userDelete', component: UserDeleteComponent },
  { path: 'userContacts', component: UserContactsComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'tokenView', component: TokenViewComponent, canActivate: [AuthGuard] },
  { path: 'viewAllEvents', component: EventSearchComponent, canActivate: [AuthGuard] },
  { path: '**', component: InvalidRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule {}
