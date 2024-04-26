import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import our components
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { PageCreateGroupComponent } from './group/pages/page-create-group/page-create-group.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'create-group', component: PageCreateGroupComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
