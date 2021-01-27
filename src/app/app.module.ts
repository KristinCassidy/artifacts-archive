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
import { AddArtifactComponent } from './navbar/collections/sub-menu/add-artifact/add-artifact.component';
import { ArtifactProfileComponent } from './navbar/collections/artifact/artifact-profile/artifact-profile.component';

// import { CollectionsService } from './navbar/collections.service';
// import { Collection } from './navbar/collections/collection.model'



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
    // CollectionsService,
    // Collection,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
