import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { GuardAuthService } from './services/guard-auth.service';
import { InterceptTokenService } from './services/intercept-token.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { InvalidRouteComponent } from './invalid-route/invalid-route.component';
import { TokenViewComponent } from './token-view/token-view.component';
import { LoginComponent } from './login/login.component';
import { UserUpdateComponent } from './user-components/user-update/user-update.component';
import { UserDeleteComponent } from './user-components/user-delete/user-delete.component';
import { UserReadComponent } from './user-components/user-read/user-read.component';
import { UserActivateComponent } from './user-components/user-activate/user-activate.component';
import { UserCreateComponent } from './user-components/user-create/user-create.component';
import { EventReadComponent } from './event-components/event-read/event-read.component';
import { EventUpdateComponent } from './event-components/event-update/event-update.component';
import { EventDeleteComponent } from './event-components/event-delete/event-delete.component';
import { UserContactsComponent } from './user-components/user-contacts/user-contacts.component';
import { EventRoomComponent } from './event-components/event-room/event-room.component';
import { EventJoinComponent } from './event-components/event-join/event-join.component';
import { EventCreateComponent } from './event-components/event-create/event-create.component';
import { EventFeedComponent } from './event-components/event-feed/event-feed.component';
import { EventSearchComponent } from './event-components/event-search/event-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BusinessCardComponent } from './business-card/business-card.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule } from '@angular/material/';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  exports: [
    // Material
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,
  ]
})
export class MaterialModule {}

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
    EventRoomComponent,
    EventJoinComponent,
    EventFeedComponent,
    EventSearchComponent,
    BusinessCardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        authScheme: 'JWT'
      }
    })
  ],
  exports: [EventRoomComponent],
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
