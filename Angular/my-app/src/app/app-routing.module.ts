import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityOneComponent } from './city-one/city-one.component';
import { CityTwoComponent } from './city-two/city-two.component';
import { CitytwoDetailComponent } from './citytwo-detail/citytwo-detail.component';
import { CityoneDetailComponent } from './cityone-detail/cityone-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/cityone', pathMatch: 'full' },
  { path: 'cityone', component: CityOneComponent },
  { path: 'citytwo', component: CityTwoComponent },
  { path: 'cityone/:id', component: CityoneDetailComponent },
  { path: 'citytwo/:id', component: CitytwoDetailComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CityOneComponent,
  CityTwoComponent,
  PageNotFoundComponent,
  CitytwoDetailComponent,
  CityoneDetailComponent
];
