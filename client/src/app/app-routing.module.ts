import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {EventsComponent} from "./component/events/events.component";
import {CategoryEventsComponent} from "./component/category-events/category-events.component";

const routes: Routes = [
  {path: '', redirectTo: 'ticketopia.kz', pathMatch: 'full'},
  // {path: 'ticketopia.kz', component: CategoryEventsComponent},
  {path: ':category', component: CategoryEventsComponent},
  // { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
