import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CollectionsComponent } from './navbar/collections/collections.component';
// import { HomeComponent }  from './home/home.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'collections', component: CollectionsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
