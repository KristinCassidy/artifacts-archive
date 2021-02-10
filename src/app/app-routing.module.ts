import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CollectionsComponent } from './navbar/collections/collections.component';
import { HomeComponent }  from './navbar/home/home.component';
import { ArtifactComponent } from './navbar/collections/artifact/artifact.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { ExcursionLogComponent } from './navbar/excursion-log/excursion-log.component';
import { AddArtifactComponent } from './navbar/collections/artifact/add-artifact/add-artifact.component';
import { ArtifactProfileComponent } from './navbar/collections/artifact/artifact-profile/artifact-profile.component';
import { ResearchComponent } from './navbar/research/research.component';
import { CollectionComponent } from './navbar/collections/collection/collection.component';
import { CollectionGalleryComponent } from './navbar/collections/collection/collection-gallery/collection-gallery.component';
import { CollectionEditComponent } from './navbar/collections/collection/collection-edit/collection-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'collections', component: CollectionsComponent, children: [ 
    { path: '', component: CollectionGalleryComponent },
    // { path: 'new', component: }
    { path: ':id', component: CollectionComponent, children: [
      { path: ':name', component: ArtifactProfileComponent},
    ]},
    { path: ':id/edit', component: CollectionEditComponent },
    
    
    // { path: ':`${collection.name}`', component: CollectionComponent
    // , children: [
      // { path: ':`${artifact.name}`', component: ArtifactProfileComponent }
    // ]
  ] },
  // { path: 'artifact', component: ArtifactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'excursion-log', component: ExcursionLogComponent },
  { path: 'new-item', component: AddArtifactComponent },
  { path: 'research', component: ResearchComponent },
  { path: '**', redirectTo: '/not-found'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
