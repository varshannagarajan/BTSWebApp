import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCreateComponent } from './event-components/event-create/event-create.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TokenViewComponent } from './token-view/token-view.component';
import { UserCreateComponent } from './user-components/user-create/user-create.component';
import { HomeComponent } from './home/home.component';
import { EventUpdateComponent } from './event-components/event-update/event-update.component';
import { EventDeleteComponent } from './event-components/event-delete/event-delete.component';
import { UserReadComponent } from './user-components/user-read/user-read.component';
import { UserUpdateComponent } from './user-components/user-update/user-update.component';
import { UserDeleteComponent } from './user-components/user-delete/user-delete.component';
import { UserActivateComponent } from './user-components/user-activate/user-activate.component';
import { GuardAuthService } from './services/guard-auth.service';
import { UserContactsComponent } from './user-components/user-contacts/user-contacts.component';
import { EventRoomComponent } from './event-components/event-room/event-room.component';
import { EventJoinComponent } from './event-components/event-join/event-join.component';
import { EventFeedComponent } from './event-components/event-feed/event-feed.component';
import { EventSearchComponent } from './event-components/event-search/event-search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'eventCreate', component: EventCreateComponent},
  { path: 'eventUpdate/:_id', component: EventUpdateComponent},
  { path: 'eventDelete', component: EventDeleteComponent},
  { path: 'eventJoin', component: EventJoinComponent},
  { path: 'userActivate', component: UserActivateComponent},
  { path: 'userCreate', component: UserCreateComponent},
  { path: 'userRead/:_id', component: UserReadComponent},
  { path: 'userUpdate', component: UserUpdateComponent},
  { path: 'userDelete', component: UserDeleteComponent},
  { path: 'invalidRoute', component: InvalidRouteComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'tokenView', component: TokenViewComponent},
  { path: 'eventFeed', component: EventFeedComponent},
  { path: 'userContacts', component: UserContactsComponent},
  { path: 'eventRoom/:_id', component: EventRoomComponent},
  { path: 'viewAllEvents', component: EventSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
