import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import our pages
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { PageCreateGroupComponent } from './group/pages/page-create-group/page-create-group.component';
import { HomeComponent } from "./pockets/pages/home/home.component";
import { PageGroupComponent } from "./group/pages/page-group/page-group.component";
import { IncomingComponent } from "./payments/incoming/pages/incoming.component";
import { OutgoingComponent } from "./payments/outgoing/pages/outgoing.component";
import { ContactComponent } from "./contacts/pages/contact/contact.component";
import { PageExpensesComponent } from './expenses/pages/page-expenses/page-expenses.component';
import { AddExpenseComponent } from './expenses/pages/add-expense/add-expense.component';
import { LoginComponent } from "./authorization/components/login/login.component";
import { PageGroupDetailsComponent } from './group/pages/page-group-details/page-group-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'groups', component: PageGroupComponent },
  { path: 'group-detail/:id', component: PageGroupDetailsComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'incoming', component: IncomingComponent },
  { path: 'outgoing', component: OutgoingComponent },
  { path: 'create-group', component: PageCreateGroupComponent },
  { path: 'expenses', component: PageExpensesComponent },
  { path: 'expenses/add-expense', component: AddExpenseComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
