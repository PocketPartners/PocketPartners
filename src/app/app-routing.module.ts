import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import our pages
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { PageCreateGroupComponent } from './group/pages/page-create-group/page-create-group.component';
import { HomeComponent } from "./public/pages/home/home.component";
import { PageGroupComponent } from "./group/pages/page-group/page-group.component";
import {IncomingComponent} from "./payments/incoming/pages/incoming.component";
import {OutgoingComponent} from "./payments/outgoing/pages/outgoing.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'groups', component: PageGroupComponent },
  { path: 'incoming', component: IncomingComponent },
  { path: 'outgoing', component: OutgoingComponent },
  { path: 'create-group', component: PageCreateGroupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
