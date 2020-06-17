import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { BusinessExpPanelComponent } from './business-exp-panel/business-exp-panel.component';
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
import { AuthService } from './services/auth.service';
import { TokenViewComponent } from './token-view/token-view.component';
import { UserContactsComponent } from './user-components/user-contacts/user-contacts.component';
import { UserDeleteComponent } from './user-components/user-delete/user-delete.component';
import { UserReadComponent } from './user-components/user-read/user-read.component';
import { UserUpdateComponent } from './user-components/user-update/user-update.component';
import { UserCreateComponent } from './user-components/user-create/user-create.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutUsComponent } from './about-us/about-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatExpansionModule,
    MatPaginatorModule
  ],
  declarations: [AboutUsComponent, LandingPageComponent]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    EventCreateComponent,
    EventUpdateComponent,
    EventDeleteComponent,
    UserReadComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserCreateComponent,
    NavbarComponent,
    HomeComponent,
    InvalidRouteComponent,
    TokenViewComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserReadComponent,
    UserContactsComponent,
    UserProfileComponent,
    EventRoomComponent,
    EventJoinComponent,
    EventFeedComponent,
    EventSearchComponent,
    BusinessCardComponent,
    BusinessExpPanelComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgbModule,
    MaterialModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        authScheme: 'JWT'
      }
    }),
    MDBBootstrapModule.forRoot(),
    GoogleMapsModule,
  ],
  exports: [EventRoomComponent],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
