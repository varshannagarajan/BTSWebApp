import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventReadComponent } from './event-read/event-read.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { EventDeleteComponent } from './event-delete/event-delete.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCreateComponent,
    EventReadComponent,
    EventUpdateComponent,
    EventDeleteComponent,
    UserCreateComponent,
    NavbarComponent,
    HomeComponent
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
