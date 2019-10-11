import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventCreateComponent } from './event-create/event-create.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TokenViewComponent } from './token-view/token-view.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'eventCreate', component: EventCreateComponent},
  { path: 'userCreate', component: UserCreateComponent},
  { path: 'invalidRoute', component: InvalidRouteComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'tokenView', component: TokenViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
