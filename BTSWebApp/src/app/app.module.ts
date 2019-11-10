import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

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
import { AuthService } from './auth.service';
import { GuardAuthService } from './guard-auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptTokenService } from "./intercept-token.service";
import { EventReadComponent } from './event-read/event-read.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';
import { EventRoomComponent } from './event-room/event-room.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    EventCreateComponent,
    EventReadComponent,
    EventUpdateComponent,
    EventDeleteComponent,
    UserCreateComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    NavbarComponent,
    HomeComponent,
    InvalidRouteComponent,
    TokenViewComponent,
    LoginComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserReadComponent,
    UserActivateComponent,
    UserContactsComponent,
    EventRoomComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: 'JWT'
      }
    })
  ],
  providers: [
    AuthService,
    GuardAuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptTokenService,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
