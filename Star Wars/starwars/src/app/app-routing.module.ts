import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people/people.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { StarshipComponent } from './starship/starship.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { SpeciesDetailsComponent } from './species-details/species-details.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'characters',
    component: PeopleComponent,
    children: [
      { path: 'characters', component: PeopleComponent },
      { path: 'display', component: DisplayComponent },
    ],
  },
  {
    path: 'films',
    component: FilmsComponent,
    children: [
      { path: 'films', component: FilmsComponent },
      { path: 'filmdetail', component: FilmDetailsComponent },
    ],
  },
  {
    path: 'species',
    component: SpeciesComponent,
    children: [
      { path: 'species', component: SpeciesComponent },
      { path: 'speciesdetails', component: SpeciesDetailsComponent },
    ],
  },
  {
    path: 'planets',
    component: PlanetsComponent,
    children: [
      { path: 'planets', component: PlanetsComponent },
      { path: 'planetdetails', component: PlanetsDetailsComponent },
    ],
  },
  {
    path: 'vehicles',
    component: VehicleComponent,
    children: [
      { path: 'vehicles', component: VehicleComponent},
      { path: 'vehicledetails', component: VehicleDetailsComponent}
    ],
  },

  { 
    path: 'starship', 
    component: StarshipComponent,
    children: [
    { path: 'starship', component: StarshipComponent},
    { path: 'starshipdetails', component: StarshipDetailsComponent }
    ],
  } 

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing =[
  DisplayComponent,
  HomeComponent,
  PeopleComponent,
  FilmsComponent,
  SpeciesComponent,
  PlanetsComponent,
  FilmDetailsComponent,
  StarshipComponent,
  VehicleComponent,
  SpeciesDetailsComponent,
  PlanetsDetailsComponent,
  StarshipDetailsComponent,
  VehicleDetailsComponent
]
