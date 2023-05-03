import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EventsComponent} from "./component/events/events.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {DOMAIN} from "./config";
import {LoginComponent} from './component/login/login.component';
import {SignupComponent} from './component/signup/signup.component';
import {EventDetailComponent} from "./component/event-detail/event-detail.component";
import {TicketComponent} from "./component/ticket/ticket.component";
import {AccountComponent} from "./account/account.component";

const routes: Routes = [
  {path: '', redirectTo: DOMAIN, pathMatch: 'full'},
  {path: DOMAIN,component: EventsComponent},
  {path: `${DOMAIN}/:category`, component: EventsComponent},
  {path: `${DOMAIN}/:category/events/:id`,component: EventDetailComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'profile', component: AccountComponent},
  {path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
