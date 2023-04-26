import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {EventsComponent} from "./component/events/events.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {DOMAIN} from "./config";
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { EventDetailsComponent } from './component/event-details/event-details.component';

const routes: Routes = [
  {path: '', redirectTo: DOMAIN, pathMatch: 'full'},
  {path: DOMAIN,component: EventsComponent},
  {path: `${DOMAIN}/:category`, component: EventsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
<<<<<<< HEAD
  // {path: ':category/events/:eventId', component: EventDetailsComponent },
  {path: `${DOMAIN}/:category/events/:id`, component: EventDetailsComponent },

  {path: '**', component: NotFoundComponent }
=======
  {path: '**', component: NotFoundComponent },
  {path: 'events/:eventsId', component: EventDetailsComponent },
>>>>>>> 19d2bc383e3f82e517204bea0709e0310542dcf2
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
