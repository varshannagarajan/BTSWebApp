import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCreateComponent } from './event-create/event-create.component'
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { EventReadComponent } from './event-read/event-read.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TokenViewComponent } from './token-view/token-view.component';


const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: "eventCreate", component: EventCreateComponent},
  { path: "eventDelete", component: EventDeleteComponent},
  { path: "eventRead", component: EventReadComponent},
  { path: "eventUpdate", component: EventUpdateComponent},
  { path: "userCreate", component: UserCreateComponent},
  { path: "invalidRoute", component: InvalidRouteComponent},
  { path: "navbar", component: NavbarComponent},
  { path: "login", component: LoginComponent},
  { path: "tokenView", component: TokenViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
