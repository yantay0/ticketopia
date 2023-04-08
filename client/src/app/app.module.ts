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

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    TopBarComponent,
    SearchComponent,
    CategoryEventsComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
