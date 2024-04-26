import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import our components
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
