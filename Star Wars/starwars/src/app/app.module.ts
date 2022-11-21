import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StarshipComponent } from './starship/starship.component';
import { StarWarsService } from './star-wars.service';
import { InterceptInterceptor } from './intercept.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    routing,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PeopleComponent,
    FilmsComponent,
    SpeciesComponent,
    PlanetsComponent,
    VehicleComponent,
    HomeComponent,
    DisplayComponent,
    StarshipComponent,
    NavbarComponent,
    FilmDetailsComponent,
    PlanetsDetailsComponent,
    SpeciesDetailsComponent,
    StarshipDetailsComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule

  ],
  providers: [StarWarsService,{
    provide: HTTP_INTERCEPTORS,
    useClass :InterceptInterceptor,
    multi :true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
