import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
import { ResearchComponent } from './navbar/research/research.component';
import { CollectionComponent } from './navbar/collections/collection/collection.component';
import { CollectionPreviewComponent } from './navbar/collections/collection/collection-preview/collection-preview.component';
import { CollectionGalleryComponent } from './navbar/collections/collection-gallery/collection-gallery.component';
import { CollectionService } from './services/collection.service';
import { CollectionEditComponent } from './navbar/collections/collection/collection-edit/collection-edit.component';
import { RiverLevelComponent } from './navbar/current-conditions/river-level/river-level.component';
import { RiverLevelService } from './services/river-level.service';
import { SubheaderComponent } from './header/subheader/subheader.component';
import { IdentificationComponent } from './navbar/research/identification/identification.component';
import { CurrentConditionsComponent } from './navbar/current-conditions/current-conditions.component';
import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './navbar/current-conditions/weather/weather.component';
import { ToggleDirective } from './services/dropdown.directive';
import { ForecastComponent } from './navbar/current-conditions/forecast/forecast.component';
import { AngularFireModule } from '@angular/fire';
import { AddCollectionComponent } from './navbar/collections/collection/add-collection/add-collection.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SubheaderComponent,
    HomeComponent,
    CollectionsComponent,
    CollectionComponent,
    CollectionPreviewComponent,
    CollectionGalleryComponent,
    CollectionEditComponent,
    ArtifactComponent,
    ArtifactProfileComponent,
    AddArtifactComponent,
    ResearchComponent,
    ExcursionLogComponent,
    RiverLevelComponent,
    ProfileComponent,
    PageNotFoundComponent,
    IdentificationComponent,
    CurrentConditionsComponent,
    WeatherComponent,
    ToggleDirective,
    ForecastComponent,
    AddCollectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule,
  ],
  providers: [ CollectionService, RiverLevelService, WeatherService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
