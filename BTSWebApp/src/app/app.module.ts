import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { TokenViewComponent } from './token-view/token-view.component';
import { LoginComponent } from './login/login.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserReadComponent } from './user-read/user-read.component';
import { UserActivateComponent } from './user-activate/user-activate.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCreateComponent,
    UserCreateComponent,
    NavbarComponent,
    HomeComponent,
    InvalidRouteComponent,
    TokenViewComponent,
    LoginComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserReadComponent,
    UserActivateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
