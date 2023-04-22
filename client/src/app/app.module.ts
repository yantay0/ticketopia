import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { EventsComponent } from './component/events/events.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { SearchComponent } from './component/search/search.component';
import {CategoryEventsComponent} from "./component/category-events/category-events.component";
import { NotFoundComponent } from './component/not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { MovieSeatComponent } from './component/movie-seat/movie-seat.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    TopBarComponent,
    SearchComponent,
    CategoryEventsComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    MovieSeatComponent,

   
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
