import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {EventsComponent} from "./component/events/events.component";

const routes: Routes = [
  {path: '', redirectTo: 'ticketopia.kz', pathMatch: 'full'},
  {path: 'ticketopia.kz', component: EventsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
