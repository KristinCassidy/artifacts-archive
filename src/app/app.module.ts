import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { CollectionsComponent } from './navbar/collections/collections.component';
import { HomeComponent } from './navbar/home/home.component';
import { ArtifactComponent } from './navbar/collections/artifact/artifact.component';
import { ProfileComponent } from './navbar/profile/profile.component';
import { ExcursionLogComponent } from './navbar/excursion-log/excursion-log.component';
import { AddArtifactComponent } from './navbar/collections/artifact/add-artifact/add-artifact.component';
import { ArtifactProfileComponent } from './navbar/collections/artifact/artifact-profile/artifact-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CollectionsService } from './navbar/collections/collections.service';
import { ResearchComponent } from './navbar/research/research.component';
import { CollectionComponent } from './navbar/collections/collection/collection.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CollectionsComponent,
    HomeComponent,
    ArtifactComponent,
    ProfileComponent,
    ExcursionLogComponent,
    AddArtifactComponent,
    ArtifactProfileComponent,
    PageNotFoundComponent,
    ResearchComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CollectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
