import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCreateComponent } from './event-create/event-create.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TokenViewComponent } from './token-view/token-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { HomeComponent } from './home/home.component';
import { EventReadComponent } from './event-read/event-read.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { UserReadComponent } from './user-read/user-read.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserActivateComponent } from './user-activate/user-activate.component';
import { GuardAuthService } from './guard-auth.service';
import { UserContactsComponent } from './user-contacts/user-contacts.component';
import { EventRoomComponent } from './event-room/event-room.component';
import { EventJoinComponent } from './event-join/event-join.component';
import { EventFeedComponent } from './event-feed/event-feed.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'eventCreate', component: EventCreateComponent},
  { path: 'eventRead/:_id', component: EventReadComponent},
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
  { path: 'userContacts', component: UserContactsComponent, canActivate: [GuardAuthService]},
  { path: 'eventRoom/:_id', component: EventRoomComponent},
  { path: 'eventFeed', component: EventFeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
