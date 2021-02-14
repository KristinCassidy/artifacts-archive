import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsComponent } from './navbar/collections/collections.component';
import { HomeComponent }  from './navbar/home/home.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { ExcursionLogComponent } from './navbar/excursion-log/excursion-log.component';
import { AddArtifactComponent } from './navbar/collections/artifact/add-artifact/add-artifact.component';
import { ArtifactProfileComponent } from './navbar/collections/artifact/artifact-profile/artifact-profile.component';
import { ResearchComponent } from './navbar/research/research.component';
import { CollectionComponent } from './navbar/collections/collection/collection.component';
import { CollectionGalleryComponent } from './navbar/collections/collection/collection-gallery/collection-gallery.component';
import { CollectionEditComponent } from './navbar/collections/collection/collection-edit/collection-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'collections', component: CollectionsComponent, children: [ 
    { path: '', component: CollectionGalleryComponent },
    { path: ':id/add', component: AddArtifactComponent},
    { path: ':id', component: CollectionComponent },
    { path: ':id/edit', component: CollectionEditComponent },
    { path: ':id/artifact', component: ArtifactProfileComponent },
    
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: 'new-item', component: AddArtifactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'excursion-log', component: ExcursionLogComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'artifact', component: ArtifactProfileComponent },
  { path: '**', redirectTo: '/not-found' },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
