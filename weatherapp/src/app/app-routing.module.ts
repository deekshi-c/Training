import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedComponent } from './detailed/detailed.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentComponent } from './recent/recent.component';
const routes: Routes = [
  { path: 'detail', component: DetailedComponent },
  { path: 'fav', component: FavouriteComponent },
  { path: 'recent', component: RecentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing =[
  DetailedComponent,
  FavouriteComponent,
  RecentComponent
]
