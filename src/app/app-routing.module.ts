import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CollectionsComponent } from './navbar/collections/collections.component';
import { HomeComponent }  from './navbar/home/home.component';
import { ArtifactComponent } from './navbar/collections/artifact/artifact.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { ExcursionLogComponent } from './navbar/excursion-log/excursion-log.component';
import { AddArtifactComponent } from './navbar/collections/sub-menu/add-artifact/add-artifact.component';
import { ArtifactProfileComponent } from './navbar/collections/artifact/artifact-profile/artifact-profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'artifact', component: ArtifactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'excursion-log', component: ExcursionLogComponent },
  { path: 'new-item', component: AddArtifactComponent },
  { path: 'artifact-profile', component: ArtifactProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
