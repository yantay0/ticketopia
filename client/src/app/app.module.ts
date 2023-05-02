import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterOutlet} from "@angular/router";
import {EventsComponent} from './component/events/events.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {TopBarComponent} from './component/top-bar/top-bar.component';
import {SearchComponent} from './component/search/search.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './component/login/login.component';
import {SignupComponent} from './component/signup/signup.component';
import {EventFilterComponent} from './component/events/event-filter/event-filter.component';
import {BannerComponent} from './component/banner/banner.component';
import {SearchPipe} from "./component/search/search.pipe";
import {EventDetailComponent} from './component/event-detail/event-detail.component';
import {AuthInterceptor} from "./auth-intercepter";
import {TicketComponent} from "./component/ticket/ticket.component";


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    TopBarComponent,
    SearchComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    BannerComponent,
    EventFilterComponent,
    SearchPipe,
    EventDetailComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
