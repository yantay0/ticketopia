import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {EventsComponent} from "./component/events/events.component";
import {CategoryEventsComponent} from "./component/category-events/category-events.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {DOMAIN} from "./config";

const routes: Routes = [
  {path: '', redirectTo: DOMAIN, pathMatch: 'full'},
  {path: DOMAIN,component: CategoryEventsComponent},
  {path: `${DOMAIN}/:category`, component: CategoryEventsComponent},
  {path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
